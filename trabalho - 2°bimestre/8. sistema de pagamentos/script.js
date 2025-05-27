function calcularSalario() {
  const nivel = parseInt(document.getElementById('nivel').value);
  const horas = parseInt(document.getElementById('horas').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(nivel) || nivel < 1 || nivel > 3) {
    resultado.textContent = "Nível inválido! Digite 1, 2 ou 3.";
    return;
  }

  if (isNaN(horas) || horas < 1) {
    resultado.textContent = "Horas inválidas! Digite um número positivo.";
    return;
  }

  let valorHora;
  switch(nivel) {
    case 1: valorHora = 12; break;
    case 2: valorHora = 17; break;
    case 3: valorHora = 25; break;
  }

  const salario = valorHora * horas * 4.5;
  resultado.textContent = `Salário mensal: R$ ${salario.toFixed(2)}`;
}