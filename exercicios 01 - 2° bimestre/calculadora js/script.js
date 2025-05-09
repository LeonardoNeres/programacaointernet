let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");

function somarNumeros() {
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let somanums = num1 + num2;
    let resultado = document.getElementById('resultado');
    resultado.innerText = `resultado: ${somanums}`;
}
