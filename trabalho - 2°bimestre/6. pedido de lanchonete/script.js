function calcularPedido() {
  const codigoInput = document.getElementById('codigo');
  const quantidadeInput = document.getElementById('quantidade');
  const resultado = document.getElementById('resultado');

  const codigo = parseInt(codigoInput.value);
  const quantidade = parseInt(quantidadeInput.value);

  const cardapio = [
    { nome: "Cachorro quente", preco: 11.00 },
    { nome: "Bauru", preco: 8.50 },
    { nome: "Misto Quente", preco: 8.00 },
    { nome: "Hamburger", preco: 9.00 },
    { nome: "Cheeseburger", preco: 10.00 },
    { nome: "Refrigerante", preco: 4.50 }
  ];

  if (isNaN(codigo) || codigo < 1 || codigo > 6) {
    resultado.textContent = "❌ Código inválido! Digite de 1 a 6.";
    codigoInput.focus();
    return;
  }

  if (isNaN(quantidade) || quantidade < 1) {
    resultado.textContent = "❌ Quantidade inválida! Mínimo 1.";
    quantidadeInput.focus();
    return;
  }

  const item = cardapio[codigo - 1];
  const total = item.preco * quantidade;

  resultado.innerHTML = `
    <p>✅ Pedido calculado:</p>
    <p>${quantidade}x ${item.nome}</p>
    <p>Total: R$ ${total.toFixed(2)}</p>
  `;
}