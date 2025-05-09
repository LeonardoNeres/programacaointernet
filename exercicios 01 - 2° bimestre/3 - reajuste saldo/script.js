function calcularReajuste() {
  const saldo = parseFloat(document.getElementById("saldo").value);

  if (isNaN(saldo)) {
    document.getElementById("resultado").innerText = "Por favor, insira um valor válido.";
    return;
  }

  const novoSaldo = saldo * 1.01;
  document.getElementById("resultado").innerText =
    `Saldo com reajuste de 1%: R$ ${novoSaldo.toFixed(2)}`;
}
