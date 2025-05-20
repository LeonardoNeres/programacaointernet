document.getElementById('converterBtn').addEventListener('click', function() {
    const diasTotais = parseInt(document.getElementById('dias').value);
    
    if (isNaN(diasTotais) || diasTotais < 0) {
        alert("Por favor, insira um número válido de dias (maior ou igual a zero)");
        return;
    }
    
    const anos = Math.floor(diasTotais / 360);
    const meses = Math.floor((diasTotais % 360) / 30);
    const dias = diasTotais % 30;
    
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('diasRestantes').textContent = dias;
    document.getElementById('resultado').style.display = 'block';
});