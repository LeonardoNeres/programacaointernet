document.getElementById('calcularBtn').addEventListener('click', function() {
    const paes = parseInt(document.getElementById('paes').value) || 0;
    const broas = parseInt(document.getElementById('broas').value) || 0;
    
    const precoPao = 0.12;
    const precoBroa = 1.50;
    
    const totalPaes = paes * precoPao;
    const totalBroas = broas * precoBroa;
    const totalVendas = totalPaes + totalBroas;
    const poupanca = totalVendas * 0.10;
    
    document.getElementById('total').textContent = totalVendas.toFixed(2);
    document.getElementById('poupanca').textContent = poupanca.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
});