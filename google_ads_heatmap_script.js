function main() {
  // === User Customization Section ===
  const SPREADSHEET_URL = 'YOUR_GOOGLE_SHEET_URL_HERE'; // Replace with your Google Sheet URL
  const SHEET_NAME = 'YOUR_TAB_NAME_HERE'; // Replace with the name of your sheet tab
  // ================================

  // Google Ads Query: Adjust fields or date range if necessary
  const query = `
    SELECT
      CampaignName,
      Cost,
      Impressions,
      Clicks,
      Conversions,
      CampaignStatus
    FROM
      CAMPAIGN_PERFORMANCE_REPORT
    WHERE
      Cost > 0
    DURING
      THIS_MONTH
  `;

  // Fetch report data
  const report = AdsApp.report(query);
  const rows = report.rows();

  // Connect to the Google Sheet
  const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  // Define headers
  const headers = [
    'Campaign Name',
    'Cost',
    'Impressions',
    'Clicks',
    'Conversions',
    'Cost/Conversion',
    'Avg CPC',
    'CTR (%)'
  ];

  // Clear the sheet and set headers
  sheet.clear();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Populate the sheet with campaign performance data
  let row = 2; // Start after the header row
  while (rows.hasNext()) {
    const campaign = rows.next();
    const campaignName = campaign['CampaignName'];
    const cost = parseFloat(campaign['Cost']);
    const impressions = parseInt(campaign['Impressions']);
    const clicks = parseInt(campaign['Clicks']);
    const conversions = parseFloat(campaign['Conversions']);

    // Calculate additional metrics
    const costPerConversion = conversions > 0 ? (cost / conversions).toFixed(2) : 'N/A';
    const avgCPC = clicks > 0 ? (cost / clicks).toFixed(2) : 'N/A';
    const ctr = impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : 'N/A';

    // Write data to the sheet
    sheet.getRange(row, 1).setValue(campaignName);
    sheet.getRange(row, 2).setValue(cost);
    sheet.getRange(row, 3).setValue(impressions);
    sheet.getRange(row, 4).setValue(clicks);
    sheet.getRange(row, 5).setValue(conversions);
    sheet.getRange(row, 6).setValue(costPerConversion);
    sheet.getRange(row, 7).setValue(avgCPC);
    sheet.getRange(row, 8).setValue(ctr);

    row++;
  }

  // Apply conditional formatting
  applyConditionalFormatting(sheet);

  Logger.log('MTD campaign performance data updated successfully with a custom heatmap.');
}

function applyConditionalFormatting(sheet) {
  const lastRow = sheet.getLastRow();

  if (lastRow > 1) {
    // Define ranges
    const ctrRange = sheet.getRange(2, 8, lastRow - 1); // CTR (%)
    const avgCpcRange = sheet.getRange(2, 7, lastRow - 1); // Avg CPC
    const costPerConvRange = sheet.getRange(2, 6, lastRow - 1); // Cost/Conversion

    // Clear existing rules
    sheet.clearConditionalFormatRules();

    // Custom colors
    const red = '#e06666';
    const yellow = '#fff2cc';
    const green = '#b6d7a8';

    // Create new conditional formatting rules
    const rules = [];

    // CTR (%) Heatmap
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .setGradientMinpoint(red) // Red (worst performer)
      .setGradientMidpointWithValue(yellow, SpreadsheetApp.InterpolationType.NUMBER, '2') // Yellow (middle)
      .setGradientMaxpointWithValue(green, SpreadsheetApp.InterpolationType.NUMBER, '5') // Green (best performer)
      .setRanges([ctrRange])
      .build());

    // Avg CPC Heatmap
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .setGradientMinpoint(green) // Green (best CPC)
      .setGradientMidpointWithValue(yellow, SpreadsheetApp.InterpolationType.NUMBER, '1.5') // Yellow (middle)
      .setGradientMaxpointWithValue(red, SpreadsheetApp.InterpolationType.NUMBER, '3') // Red (worst CPC)
      .setRanges([avgCpcRange])
      .build());

    // Cost/Conversion Heatmap
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .setGradientMinpoint(green) // Green (best cost/conversion)
      .setGradientMidpointWithValue(yellow, SpreadsheetApp.InterpolationType.NUMBER, '50') // Yellow (middle)
      .setGradientMaxpointWithValue(red, SpreadsheetApp.InterpolationType.NUMBER, '100') // Red (worst cost/conversion)
      .setRanges([costPerConvRange])
      .build());

    // Apply the rules
    sheet.setConditionalFormatRules(rules);
  }
}

