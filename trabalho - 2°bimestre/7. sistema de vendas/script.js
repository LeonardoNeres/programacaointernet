function calcularPagamento() {
  const precoInput = document.getElementById('preco');
  const condicaoInput = document.getElementById('condicao');
  const resultado = document.getElementById('resultado');

  const preco = parseFloat(precoInput.value);
  const condicao = condicaoInput.value.toLowerCase();

  if (isNaN(preco) || preco <= 0) {
    resultado.textContent = "❌ Preço inválido! Digite um valor positivo.";
    precoInput.focus();
    return;
  }

  if (!['a', 'b', 'c', 'd'].includes(condicao)) {
    resultado.textContent = "❌ Condição inválida! Digite a, b, c ou d.";
    condicaoInput.focus();
    return;
  }

  let valorFinal;
  let descricao;

  switch (condicao) {
    case 'a':
      valorFinal = preco * 0.90;
      descricao = "À vista (dinheiro/cheque) com 10% de desconto";
      break;
    case 'b':
      valorFinal = preco * 0.85;
      descricao = "À vista (cartão) com 15% de desconto";
      break;
    case 'c':
      valorFinal = preco;
      descricao = "2x no cartão sem juros (2x de R$" + (preco/2).toFixed(2) + ")";
      break;
    case 'd':
      valorFinal = preco * 1.10;
      descricao = "2x no cartão com 10% juros (2x de R$" + (valorFinal/2).toFixed(2) + ")";
      break;
  }

  resultado.innerHTML = `
    <p>✅ ${descricao}</p>
    <p>Valor Total: R$ ${valorFinal.toFixed(2)}</p>
  `;
}