let quantidade = document.querySelector("#quantidade")
let precoQuilo = document.querySelector("#precoQuilo");

function calcularValor() {
    let preco = parseFloat(precoQuilo.value);
    let qtd = parseFloat(quantidade.value);
    let total =  preco * qtd;
    let resultado = document.getElementById('valorTotal');
    resultado.innerText = `total a pagar: ${total}`;
}
