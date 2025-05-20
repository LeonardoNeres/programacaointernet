document.getElementById('calcularBtn').addEventListener('click', function() {
    const c = parseFloat(document.getElementById('comprimento').value);
    const l = parseFloat(document.getElementById('largura').value);
    
    if (isNaN(c) || isNaN(l) || c <= 0 || l <= 0) {
        alert("Valores inválidos");
        return;
    }
    
    document.getElementById('area').textContent = (c * l).toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});