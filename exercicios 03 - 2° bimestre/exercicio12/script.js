document.getElementById('separarBtn').addEventListener('click', function() {
    const numero = parseInt(document.getElementById('numero').value);
    
    if (isNaN(numero) || numero < 0 || numero > 999) {
        alert("Por favor, digite um número válido entre 0 e 999");
        return;
    }
    
    const numeroFormatado = numero.toString().padStart(3, '0');
    
    const centena = numeroFormatado.charAt(0);
    const dezena = numeroFormatado.charAt(1);
    const unidade = numeroFormatado.charAt(2);
    
    document.getElementById('centena').textContent = centena;
    document.getElementById('dezena').textContent = dezena;
    document.getElementById('unidade').textContent = unidade;
    document.getElementById('resultado').style.display = 'block';
});