var freqData = [
    {
        type: "scatter",
        x:[0],
        y:[0],
        marker: {size: 12, color: "850000"},
        showlegend: false,
        name: "Freq",
        text: level,
        hoverinfo: "text+name"
    },
    {
        values: [ 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["8-9", "7-8","6-7","5-6","4-5","3-4","2-3","1-2","0-1",""],
        textinfo: "text",
        textposition: "inside",
        marker: {
            colors:[
                "rgba(0,105,11,.5",
                "rgba(12,125,22,.5",
                "rgba(14,1025,0,.5",
                "rgba(110,145,22,.5",
                "rgba(178,215,42,.5",
                "rgba(200,205,95,.5",
                "rgba(232,225,145,.5",
                "rgba(242,242,202,.5",
                "rgba(241,225,215,.5",
                "rgba(255,255,255,0"
            ]
        },
        labels: ["8-9", "7-8","6-7","5-6","4-5","3-4","2-3","1-2","0-1",""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlengend:false
    }
  ];
    var freqlayout = { 
    shapes: [
        {
            type: "path",
            path:path,
            fillcolor: "850000",
            line: {
                color: "850000"
            }
        }
    ],
    title: "<b> Belly Button Washing Frequency</b> <br> Scrub per week",
    height: 500,
    width: 500,
    xaxis: {
        zeroline: false,
        showtickelabels: false,
        showgrid: false,
        range: [-1,1]
    },
    yaxis: {
        zeroline: false,
        showtickelabels: false,
        showgrid: false,
        range: [-1,1]
    }
  }
  Plotly.newPlot("freq", freqData, freqLayout);