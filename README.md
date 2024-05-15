# Belly Button Biodiversity Dashboard

This project provides an interactive dashboard for exploring the Belly Button Biodiversity dataset. It 
includes visualizations such as bar charts, bubble charts, and scatter plots to analyze the distribution 
and characteristics of operational taxonomic units (OTUs) found in human belly buttons.

# Introduction

This project visualizes the Belly Button Biodiversity dataset using D3.js and Plotly.js. Users can select 
different test subjects to view their microbial species and sample values. The dashboard includes the 
following features:

- A dropdown menu to select different test subjects.
- A bar chart displaying the top 10 OTUs found in the selected subject.
- A bubble chart showing the distribution of all OTUs for the selected subject.
- A scatter plot visualizing the OTU IDs versus sample values.

# Dataset

The dataset used in this project is fetched from the following URL:
https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json

# Requirements

- D3.js
- Plotly.js
- Bootstrap (for styling)
- Installation

#### Clone the repository to your local machine:
- git clone https://github.com/Bnrobertson/belly-button-challenge.git
#### Navigate to the project directory:
- cd belly-button-challenge

# Usage

Open index.html in your web browser to view the dashboard.
Use the dropdown menu to select different test subjects and see the corresponding visualizations update dynamically.
Code Explanation

# Fetching and Preparing Data
The data is fetched from the provided URL using D3.js. Once the data is loaded, it is used to update the charts and demographic information for the selected test subject.

# Visualization
The project includes three main visualizations:

1. #### Bar Chart: Displays the top 10 OTUs for the selected sample.
2. #### Bubble Chart: Shows the distribution of all OTUs for the selected sample.
3. #### Scatter Plot: Plots OTU IDs versus sample values for the selected sample.
The bubble chart and scatter plot are updated similarly to the bar chart using the respective functions updateBubbleChart and updateScatterPlot.

