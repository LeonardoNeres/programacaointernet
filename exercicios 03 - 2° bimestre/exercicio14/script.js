document.getElementById('calcularBtn').addEventListener('click', function() {
    const total = parseFloat(document.getElementById('conta').value);
    
    if (isNaN(total) || total <= 0) {
        alert("Por favor, insira um valor válido para a conta (maior que zero)");
        return;
    }
    
    const parteInteira = Math.floor(total / 3);
    
    const carlos = parteInteira;
    const andre = parteInteira;
    
    const felipe = total - (carlos + andre);
    
    document.getElementById('carlos').textContent = carlos.toFixed(2);
    document.getElementById('andre').textContent = andre.toFixed(2);
    document.getElementById('felipe').textContent = felipe.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});