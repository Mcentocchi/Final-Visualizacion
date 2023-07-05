var trace1 = {
    x: ["Rock", "Punk", "Metal"],
    y: [28.53, 0.85, 0],
    name: 'Federico',
    marker: {color: '#F4D179' },
    type: 'bar'
  };
  
  var trace2 = {
    x: ["Rock", "Punk", "Metal"],
    y: [82, 51, 48],
    name: 'Otros INTP',
    marker: {color: '#cccccc' },
    type: 'bar'
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    // title: 'US Export of Plastic Scrap',
    xaxis: {tickfont: {
      size: 14,
      color: 'rgb(107, 107, 107)'
    }},
    yaxis: {
      title: 'Proporción de escucha del género (%)',
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }
    },
    legend: {
      x: 0,
      y: 1.2,
      bgcolor: 'rgba(255, 255, 255, 0)',
      bordercolor: 'rgba(255, 255, 255, 0)'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1
  };
  
  Plotly.newPlot('myDiv', data, layout);
  
// #fc8d59
// #d73027
// #7f0000