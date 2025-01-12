# **GoogleAdsPerformanceHeatmap**

This tool automates the process of analyzing Google Ads campaign performance by pulling real-time data into Google Sheets and visualizing key metrics like **CTR**, **CPC**, and **Cost/Conversion** with heatmaps.

---

## **Features**
- 🛠 **Automated Data Retrieval**: Fetches **Month-To-Date (MTD)** Google Ads campaign data directly into a Google Sheet.
- 🎨 **Heatmaps for Key Metrics**: Highlights underperforming and overperforming campaigns at a glance.
- ⚙️ **Customizable**: Easily modify the script for different metrics or thresholds.
- 🚀 **No Technical Skills Required**: Plug-and-play tool that works seamlessly with Google Ads and Google Sheets.

---

## **Setup Instructions**

### **1. Prerequisites**
- Access to a **Google Ads account**.
- A **Google Sheet** to store and visualize the data.
- Basic familiarity with Google Ads Scripts (no coding skills required).

### **2. Steps to Set Up**
#### Step 1: Copy the Script
1. Go to **Tools & Settings > Scripts > + New Script** in your Google Ads account.
2. Copy the code from `google_ads_heatmap_script.js` and paste it into the editor.

#### Step 2: Update Placeholders
Replace the following placeholders in the script:
- `**YOUR_GOOGLE_SHEET_URL_HERE**`: Add the URL of your Google Sheet.
- `**YOUR_TAB_NAME_HERE**`: Add the tab name in the sheet (e.g., `Main`).

#### Step 3: Authorize and Run
1. Save the script and click **Preview** to authorize it.
2. Run the script to populate your Google Sheet with campaign data.

---

## **Key Metrics**
| Metric           | Description                       |
|-------------------|-----------------------------------|
| `CTR (%)`        | Click-Through Rate               |
| `CPC ($)`        | Cost Per Click                   |
| `Cost/Conversion`| Cost per customer action         |

---

## **Heatmap Logic**
- **CTR (%)**:
  - 🟢 **Green**: >5%
  - 🟡 **Yellow**: 2%–5%
  - 🔴 **Red**: <2%
- **CPC ($)**:
  - 🟢 **Green**: <$1.50
  - 🟡 **Yellow**: $1.50–$3.00
  - 🔴 **Red**: >$3.00

---

## **Resources**
- 📄 **[Google Sheet Template](https://docs.google.com/spreadsheets/d/your-template-link)**  
- 📘 **[Setup Guide (PDF)](https://link-to-pdf-guide)**  
- 🎥 **[Demo Video](https://link-to-demo-video)**  

---

## **License**
This project is licensed under the **MIT License**.
