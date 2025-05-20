document.getElementById('calcularBtn').addEventListener('click', function() {
    const cavalos = parseInt(document.getElementById('cavalos').value);
    const ferradorasPorCavalo = parseInt(document.getElementById('ferradorasPorCavalo').value);
    
    if (isNaN(cavalos) || isNaN(ferradorasPorCavalo) || cavalos <= 0 || ferradorasPorCavalo <= 0) {
        alert("Por favor, insira valores válidos (maiores que zero)");
        return;
    }
    
    const total = cavalos * ferradorasPorCavalo;
    document.getElementById('totalFerradoras').textContent = total;
    document.getElementById('resultado').style.display = 'block';
});