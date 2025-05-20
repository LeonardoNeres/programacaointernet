document.getElementById('calcularBtn').addEventListener('click', function() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);

    if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 30 || mes < 1 || mes > 12) {
        alert("Por favor, insira uma data válida!\nDia: 1 a 30\nMês: 1 a 12");
        return;
    }
    
    const totalDias = (mes - 1) * 30 + dia;
    
    document.getElementById('totalDias').textContent = totalDias;
    document.getElementById('resultado').style.display = 'block';
});