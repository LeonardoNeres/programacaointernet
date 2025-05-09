function compararValores() {
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  if (isNaN(v1) || isNaN(v2)) {
    document.getElementById("resultado").innerText = "Por favor, preencha os dois valores corretamente.";
    return;
  }

  if (v1 > v2) {
    document.getElementById("resultado").innerText = `O maior valor é: ${v1}`;
  } else if (v2 > v1) {
    document.getElementById("resultado").innerText = `O maior valor é: ${v2}`;
  } else {
    document.getElementById("resultado").innerText = "Os dois valores são iguais.";
  }
}
