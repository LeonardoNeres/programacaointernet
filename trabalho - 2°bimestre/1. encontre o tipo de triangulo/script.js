function verificarTriangulo() {
  const x = parseFloat(document.getElementById('x').value);
  const y = parseFloat(document.getElementById('y').value);
  const z = parseFloat(document.getElementById('z').value);
  const resultado = document.getElementById('resultado');

  if (x < y + z && y < x + z && z < x + y) {
    if (x === y && y === z) {
      resultado.textContent = "Triângulo equilátero: todos os lados são iguais.";
    } else if (x === y || x === z || y === z) {
      resultado.textContent = "Triângulo isósceles: dois lados são iguais.";
    } else {
      resultado.textContent = "Triângulo escaleno: todos os lados são diferentes.";
    }
  } else {
    resultado.textContent = "Os valores informados não formam um triângulo.";
  }
}
