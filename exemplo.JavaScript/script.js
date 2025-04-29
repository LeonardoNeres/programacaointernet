let h1Texto = document.querySelector("#h1Texto");
let inputTexto = document.querySelector("#inputTexto");
let btTrocaTexto = document.querySelector("#btTrocaTexto");

function trocarTexto() {
    let TextoDigitado = inputTexto.value;

    h1Texto.textContent = TextoDigitado;
}

btTrocaTexto.onclick = function() {
    trocarTexto();
}