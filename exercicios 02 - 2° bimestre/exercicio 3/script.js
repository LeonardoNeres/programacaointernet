function calcular() {
    const num1 = parseInt(document.getElementById('numero1').value);
    const num2 = parseInt(document.getElementById('numero2').value);


    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, digite dois números inteiros válidos.");
        return;
    }
    
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    
    let divisao;
    if (num2 === 0) {
        divisao = "Indefinido (divisão por zero)";
    } else {
        divisao = (num1 / num2).toFixed(2);
    }
    
    document.getElementById('soma').textContent = soma;
    document.getElementById('subtracao').textContent = subtracao;
    document.getElementById('multiplicacao').textContent = multiplicacao;
    document.getElementById('divisao').textContent = divisao;
    
    document.getElementById('resultado').style.display = 'block';
}