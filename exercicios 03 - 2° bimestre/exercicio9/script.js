document.getElementById('calcularBtn').addEventListener('click', function() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    
    // Validar entradas
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        alert("Por favor, preencha todas as coordenadas com valores numéricos!");
        return;
    }
    
    const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    
    document.getElementById('distancia').textContent = distancia.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});