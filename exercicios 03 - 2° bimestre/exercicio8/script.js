document.getElementById('calcularBtn').addEventListener('click', function() {
    const pequenas = parseInt(document.getElementById('pequenas').value) || 0;
    const medias = parseInt(document.getElementById('medias').value) || 0;
    const grandes = parseInt(document.getElementById('grandes').value) || 0;
    
    const precoP = 10.00;
    const precoM = 12.00;
    const precoG = 15.00;
    
    const total = (pequenas * precoP) + (medias * precoM) + (grandes * precoG);
    
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});