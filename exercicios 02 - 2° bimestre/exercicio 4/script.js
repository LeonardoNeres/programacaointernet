function calcularPedido() {
    const sabor1 = document.getElementById('sabor1').value.trim();
    const sabor2 = document.getElementById('sabor2').value.trim();
    const sabor3 = document.getElementById('sabor3').value.trim();
    const sabor4 = document.getElementById('sabor4').value.trim();
    
    if (!sabor1 || !sabor2) {
        alert("Por favor, informe pelo menos 2 sabores de pizza.");
        return;
    }
    
    const refrigerantes = parseInt(document.getElementById('refrigerantes').value) || 0;
    
    const sabores = [sabor1, sabor2, sabor3, sabor4].filter(sabor => sabor !== '');
    
    const valorPizzas = sabores.length * 12.00;
    const valorRefrigerantes = refrigerantes * 7.00;
    const total = valorPizzas + valorRefrigerantes;
    
    const saboresHtml = sabores.map(sabor => `<p>🍕 ${sabor}</p>`).join('');
    document.getElementById('saboresEscolhidos').innerHTML = saboresHtml;
    
    document.getElementById('valorTotal').textContent = total.toFixed(2);
    
    document.getElementById('resultado').style.display = 'block';
}