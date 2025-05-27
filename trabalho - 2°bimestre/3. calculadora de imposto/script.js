function calcularImposto() {
  const ano = parseInt(document.getElementById('ano').value);
  const valor = parseFloat(document.getElementById('valor').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(ano)) {
    resultado.textContent = "Ano inválido! Digite um número (ex: 1990).";
    return;
  }

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "Valor inválido! Digite um número positivo (ex: 25000.00).";
    return;
  }

  const taxa = ano < 1990 ? 0.01 : 0.015;
  const imposto = valor * taxa;

  resultado.textContent = `Imposto a pagar: R$ ${imposto.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })}`;
}
