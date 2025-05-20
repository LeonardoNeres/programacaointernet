document.getElementById('calcularBtn').addEventListener('click', function() {
    const salarioInicial = parseFloat(document.getElementById('salario').value);
    
    if (isNaN(salarioInicial) || salarioInicial <= 0) {
        alert("Por favor, insira um valor válido para o salário (maior que zero)");
        return;
    }
    
    const aumento = salarioInicial * 0.15;
    const salarioComAumento = salarioInicial + aumento;
    const imposto = salarioComAumento * 0.08;
    const salarioFinal = salarioComAumento - imposto;
    
    document.getElementById('salarioInicial').textContent = salarioInicial.toFixed(2);
    document.getElementById('salarioAumento').textContent = salarioComAumento.toFixed(2);
    document.getElementById('salarioFinal').textContent = salarioFinal.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});