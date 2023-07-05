
d3.dsv(',', 'Features_conjuntas.csv', d3.autoType).then(data => {
  console.log(data);

  // Filtrar los datos en los que la popularidad no es cero

  const groupData = d3.group(data, d => d.user);
  const Energía = Array.from(groupData, ([user, values]) => ({
    user: user,
    Energía: d3.mean(values, d => d.energy)
  }));
  console.log(Energía);

  // Definir un objeto que mapea cada usuario a un color específico
  const userColors = {
    Mica: "#EB7F7D",
    Mati: "#6BBEDE",
    Fede: "#F4D179"
  };

  const chart = Plot.plot({
    marks: [
      Plot.barY(Energía, {
        y: "Energía",
        x: "user",
        fill: d => userColors[d.user], // Asignar color según el usuario
        r: 15,
        title: 'Energía',
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
    },
    style: {
      backgroundColor: "transparent", // Set the background color to transparent
      
    }
  });

  d3.select('#chart').append(() => chart);
});
