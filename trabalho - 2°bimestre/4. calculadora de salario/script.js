function calcularAumento() {
  const salarioAtual = parseFloat(document.getElementById('salario').value);
  const codigoCargo = parseInt(document.getElementById('cargo').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(salarioAtual) || salarioAtual <= 0) {
    resultado.textContent = "Salário inválido! Digite um valor positivo.";
    return;
  }

  if (isNaN(codigoCargo)) {
    resultado.textContent = "Código de cargo inválido!";
    return;
  }

  let percentual;
  switch (codigoCargo) {
    case 101: percentual = 0.10; break;
    case 102: percentual = 0.20; break;
    case 103: percentual = 0.30; break;
    default: percentual = 0.40;
  }

  const aumento = salarioAtual * percentual;
  const novoSalario = salarioAtual + aumento;

  resultado.innerHTML = `
    <p>Salário antigo: R$ ${salarioAtual.toFixed(2)}</p>
    <p>Novo salário: R$ ${novoSalario.toFixed(2)}</p>
    <p>Diferença: R$ ${aumento.toFixed(2)} (${percentual * 100}%)</p>
  `;
}