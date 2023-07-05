d3.dsv(',', 'Features_conjuntas.csv', d3.autoType).then(data => {
  console.log(data);
  
  const groupData = d3.group(data, d => d.user);
  const Danzabilidad = Array.from(groupData, ([user, values]) => ({
    user: user,
    Danzabilidad: d3.mean(values, d => d.danceability)
  }));
  console.log(Danzabilidad);

  // Definir un objeto que mapea cada usuario a un color específico
  const userColors = {
    Mica: "#EE9C9B",
    Mati: "#6BBEDE",
    Fede: "FYD179"
  };

  const chart = Plot.plot({
    marks: [
      Plot.dotY(Danzabilidad, {
        y: "Danzabilidad",
        x: "user",
        fill: d => userColors[d.user], // Asignar color según el usuario
        r: 15,
        title: 'Danceability',
        symbol: "star", // Usamos el marcador de estrella
        fontSize: 16 // Tamaño del título del gráfico
      })
    ],
    height: 400,
    width: 800,
    y: {
      grid: true,
      domain: [0, 1]
    },
    x: {
      legend: false,
      ticks: 5
    }
  });

  d3.select('#chartdance').append(() => chart);
});
