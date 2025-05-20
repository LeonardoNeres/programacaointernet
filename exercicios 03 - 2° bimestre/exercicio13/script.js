document.getElementById('calcularBtn').addEventListener('click', function() {
    const raio = parseFloat(document.getElementById('raio').value);
    const PI = 3.14;
    
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio (maior que zero)");
        return;
    }
    
    const area = PI * Math.pow(raio, 2);
    document.getElementById('area').textContent = area.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});