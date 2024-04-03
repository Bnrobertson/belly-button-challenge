// Define the URL for the JSON data
let url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Function to update the chart
function updateChart(sampleIndex) {
  // JSON data
  d3.json(url).then(function(data) {
    let samples = data.samples;
    let selectedSample = samples.find(sample => sample.id === sampleIndex);

    // Extract top 10 OTUs
    let topOTUs = selectedSample.otu_ids.slice(0, 10);
    let topValues = selectedSample.sample_values.slice(0, 10);
    let topLabels = selectedSample.otu_labels.slice(0, 10);

    // Update the dropdown menu
  let dropdown = d3.select("#selDataset");
  dropdown.selectAll("option")
    .data(samples.map(d => d.id))
    .enter()
    .append("option")
    .attr("value", d => d)
    .text(d => d);

    // Update the demographic info (if available)
    let metadata = data.metadata.find(metadata => metadata.id === +sampleIndex);
    let sampleMetadata = d3.select("#sample-metadata");
    sampleMetadata.html("");
    if (metadata) {
      Object.entries(metadata).forEach(([key, value]) => {
        sampleMetadata.append("p").text(`${key}: ${value}`);
      });
    }

    // Create the horizontal bar chart
    let trace1 = {
      x: topValues,
      y: topOTUs.map(otuId => `OTU ${otuId}`),
      text: topLabels,
      type: "bar",
      orientation: "h"
    };

    let layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU ID" }
    };

    Plotly.newPlot("bar", [trace1], layout);
  })
}

// Function to handle dropdown change
function optionChanged(selectedSample) {
  updateChart(selectedSample);
}

// Initialize the chart with the first sample
updateChart("940");

// Function to update the bubble chart
function updateBubbleChart(sampleIndex) {
    // Fetch data from the JSON
    d3.json(url).then(function(data) {
      let samples = data.samples;
      let selectedSample = samples.find(sample => sample.id === sampleIndex);
  
      // Define trace for the bubble chart
      let trace2 = {
        x: selectedSample.otu_ids,
        y: selectedSample.sample_values,
        text: selectedSample.otu_labels,
        mode: 'markers',
        marker: {
          size: selectedSample.sample_values,
          color: selectedSample.otu_ids,
          colorscale: 'Earth',
          opacity: 0.9
        }
      };
  
      let layout = {
        xaxis: { title: 'OTU ID' }
      };
  
      Plotly.newPlot('bubble', [trace2], layout);
    })
  }
  
  // Call the updateBubbleChart function with the first sample
  updateBubbleChart("940");
  
// Function to update the scatter plot
function updateScatterPlot(sampleIndex) {
    // Fetch data from the JSON
    d3.json(url).then(function(data) {
      let samples = data.samples;
      let selectedSample = samples.find(sample => sample.id === sampleIndex);
  
      // Define trace for the scatter plot
      let trace4 = {
        x: selectedSample.otu_ids,
        y: selectedSample.sample_values,
        mode: 'markers',
        marker: {
          size: 10,
          color: 'rgb(82, 149, 53)'
        },
        type: 'scatter',
        text: selectedSample.otu_labels,
        hoverinfo: 'text'
      };
  
      let layout = {
        title: 'Scatter Plot of OTU ID vs Sample Values',
        xaxis: { title: 'OTU ID' },
        yaxis: { title: 'Sample Values' }
      };
  
      Plotly.newPlot('scatter', [trace4], layout);
    })
  }
  
  // Call the updateScatterPlot function initially with the first sample
  updateScatterPlot("940");
  