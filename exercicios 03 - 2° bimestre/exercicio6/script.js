document.getElementById('calcularBtn').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const precoPorQuilo = 12.00;
    
    if (isNaN(peso) || peso <= 0) {
        alert("Por favor, insira um peso válido maior que zero!");
        return;
    }
    
    const valor = peso * precoPorQuilo;
    document.getElementById('valor').textContent = valor.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});