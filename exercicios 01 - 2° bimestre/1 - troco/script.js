let valorPago = document.querySelector("#valorPago")
let valorProduto = document.querySelector("#valorProduto");

function calculo() {
    let pagamento = parseFloat(valorPago.value);
    let preco = parseFloat(valorProduto.value);
    let subnums =  pagamento - preco;
    let resultado = document.getElementById('valorTroco');
    resultado.innerText = `troco a ser devolvido: ${subnums}`;
}
