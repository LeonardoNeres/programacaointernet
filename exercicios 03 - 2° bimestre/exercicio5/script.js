document.getElementById('calcularBtn').addEventListener('click', function() {
    const precoLitro = parseFloat(document.getElementById('precoLitro').value);
    const valorAbastecer = parseFloat(document.getElementById('valorAbastecer').value);
    
    if (isNaN(precoLitro) || isNaN(valorAbastecer) || precoLitro <= 0 || valorAbastecer <= 0) {
        alert("Por favor, insira valores válidos maiores que zero!");
        return;
    }
    
    const litros = valorAbastecer / precoLitro;
    document.getElementById('litros').textContent = litros.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});