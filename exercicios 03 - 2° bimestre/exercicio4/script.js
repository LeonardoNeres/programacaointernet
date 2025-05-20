document.getElementById('calcularBtn').addEventListener('click', function() {
    const nome = document.getElementById('nome').value.trim();
    const idade = parseInt(document.getElementById('idade').value);
    
    if (!nome || isNaN(idade) || idade < 0) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }
    
    const diasVividos = idade * 365;
    const mensagem = `${nome.toUpperCase()}, VOCÊ JÁ VIVEU ${diasVividos} DIAS`;
    
    document.getElementById('mensagem').textContent = mensagem;
    document.getElementById('resultado').style.display = 'block';
});