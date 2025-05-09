function encontrarMenor() {
  const v1 = parseFloat(document.getElementById("v1").value);
  const v2 = parseFloat(document.getElementById("v2").value);
  const v3 = parseFloat(document.getElementById("v3").value);
  const v4 = parseFloat(document.getElementById("v4").value);

  if (isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4)) {
    document.getElementById("resultado").innerText = "Por favor, preencha todos os valores.";
    return;
  }

  const menor = Math.min(v1, v2, v3, v4);

  document.getElementById("resultado").innerText = `O menor valor é: ${menor}`;
}
