function Converter() {
    const moeda = {
      euro: 6.17,
      dolar: 5.21,
      bitcoin: 244216.93,
      real: 1
    };
    const moeda1 = document.getElementById("moeda1").value;
    const moeda2 = document.getElementById("moeda2").value;
    const valor = parseFloat(document.getElementById("valor1").value);
  
    let valor2 = valor * (moeda[moeda1] / moeda[moeda2]);
  
    document.getElementById("valor2").value = valor2.toFixed(2);
  }