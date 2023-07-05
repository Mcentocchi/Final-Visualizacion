var trace1 = {
    x: ["K-pop", "Jazz", "Electronic"],
    y: [43.80, 1.80, 0.56],
    name: 'Micaela',
    marker: {color: '#EE9C9B' },
    type: 'bar'
  };
  
  var trace2 = {
    x: ["K-pop", "Jazz", "Electronic"],
    y: [52, 62, 75],
    name: 'Otros ENFP',
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
  
  Plotly.newPlot('graficomica', data, layout);
  
// #fc8d59
// #d73027
// #7f0000