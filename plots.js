function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample) {
    console.log(newSample);
  }

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then(function(data){
        var metadata = data.metadata;

        var resultArray = metadata.filter(function(data){
            return data.id == sample;
        })
        console.log(resultArray);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");

        //Clear any existing data
        PANEL.html("");

        Object.entries(result).forEach(function([key, value]){
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        })
    })
  }