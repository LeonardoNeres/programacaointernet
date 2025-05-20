function calcular() {
    const valorDolar = parseFloat(document.getElementById('dolar').value);
    
    if (isNaN(valorDolar) || valorDolar <= 0) {
        alert("Por favor, digite um valor válido para a cotação do dólar.");
        return;
    }
    
    const umPorcento = valorDolar * 1.01;
    const doisPorcento = valorDolar * 1.02;
    const cincoPorcento = valorDolar * 1.05;
    const dezPorcento = valorDolar * 1.10;
    
    document.getElementById('original').textContent = valorDolar.toFixed(2);
    document.getElementById('umPorcento').textContent = umPorcento.toFixed(2);
    document.getElementById('doisPorcento').textContent = doisPorcento.toFixed(2);
    document.getElementById('cincoPorcento').textContent = cincoPorcento.toFixed(2);
    document.getElementById('dezPorcento').textContent = dezPorcento.toFixed(2);
    
    document.getElementById('resultado').style.display = 'block';
}