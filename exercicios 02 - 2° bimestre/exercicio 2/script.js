function calcular() {
    const numPessoas = parseInt(document.getElementById('pessoas').value);


    if (isNaN(numPessoas) || numPessoas < 1) {
        alert("Por favor, digite um número válido de pessoas (pelo menos 1).");
        return;
    }
    
    const ovos = numPessoas * 2;

    const queijo = numPessoas * 50;

    document.getElementById('ovos').textContent = ovos;
    document.getElementById('queijo').textContent = queijo;
    
    document.getElementById('resultado').style.display = 'block';
}