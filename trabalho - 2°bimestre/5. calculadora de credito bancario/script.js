function calcularCredito() {
  const saldo = parseFloat(document.getElementById('saldo').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(saldo) || saldo < 0) {
    resultado.textContent = "Digite um valor válido!";
    return;
  }

  let credito = 0;
  if (saldo > 200 && saldo <= 400) {
    credito = saldo * 0.20;
  } else if (saldo > 400 && saldo <= 600) {
    credito = saldo * 0.30;
  } else if (saldo > 600) {
    credito = saldo * 0.40;
  }

  if (credito > 0) {
    resultado.textContent = `Saldo médio: R$${saldo.toFixed(2)} | Crédito: R$${credito.toFixed(2)}`;
  } else {
    resultado.textContent = `Saldo médio: R$${saldo.toFixed(2)} | Sem direito a crédito`;
  }
}