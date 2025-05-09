function calcularMedias() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const n3 = parseFloat(document.getElementById("num3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultado").innerText = "Por favor, preencha todos os números corretamente.";
    return;
  }


  const mediaAritmetica = (n1 + n2 + n3) / 3;

  const mediaPonderada = (n1 * 3 + n2 * 2 + n3 * 5) / (3 + 2 + 5);

  const somaDasMedias = mediaAritmetica + mediaPonderada;

  const mediaDasMedias = somaDasMedias / 2;


  document.getElementById("resultado").innerHTML = `
    <strong>Resultados:</strong><br>
    a) Média Aritmética: ${mediaAritmetica.toFixed(2)}<br>
    b) Média Ponderada: ${mediaPonderada.toFixed(2)}<br>
    c) Soma das Médias: ${somaDasMedias.toFixed(2)}<br>
    d) Média das Médias: ${mediaDasMedias.toFixed(2)}
  `;
}
