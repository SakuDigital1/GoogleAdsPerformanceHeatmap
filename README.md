GoogleAdsPerformanceHeatmap
This tool automates the process of analyzing Google Ads campaign performance by pulling real-time data into Google Sheets and visualizing key metrics like CTR, CPC, and Cost/Conversion with heatmaps.

Features
Automated Data Retrieval: Fetches Month-To-Date (MTD) Google Ads campaign data directly into a Google Sheet.
Heatmaps for Key Metrics: Highlights underperforming and overperforming campaigns at a glance.
Customizable: Easily modify the script for different metrics or thresholds.
No Technical Skills Required: Plug-and-play tool that works seamlessly with Google Ads and Google Sheets.
What’s Included
Script: A JavaScript file to paste into your Google Ads account.
Google Sheets Template: Pre-configured sheet for storing and visualizing data.
User Guide (PDF): Step-by-step instructions for setup and usage.
How to Use
1. Prerequisites
Access to a Google Ads account.
A Google Sheet to store and visualize the data.
Basic familiarity with Google Ads Scripts (no coding skills required).
2. Setup Instructions
Step 1: Copy the Script
Go to your Google Ads account.
Navigate to Tools & Settings > Scripts > + New Script.
Copy the code from google_ads_heatmap_script.js and paste it into the editor.
Step 2: Update Placeholders
Replace the following placeholders in the script:

YOUR_GOOGLE_SHEET_URL_HERE: Add the URL of your Google Sheet.
YOUR_TAB_NAME_HERE: Add the tab name in the sheet (e.g., "Main").
Step 3: Authorize and Run
Save the script and click Preview to authorize it.
Run the script to populate your Google Sheet with campaign data.
3. Key Metrics
The tool calculates and visualizes the following metrics:

CTR (%): Click-Through Rate
CPC ($): Cost Per Click
Cost/Conversion ($): Efficiency of conversions
Impressions: Total ad views
Clicks: Total ad clicks
Conversions: Number of completed actions
4. Heatmap Logic
The script uses conditional formatting to highlight performance:

CTR (%):
Green: >5%
Yellow: 2%–5%
Red: <2%
CPC ($):
Green: <$1.50
Yellow: $1.50–$3.00
Red: >$3.00
Cost/Conversion ($):
Green: <$50
Yellow: $50–$100
Red: >$100
5. Scheduling Automation
Go to your Google Ads account.
Open the script and click Schedule.
Set the script to run daily, weekly, or monthly.
