const display = document.getElementById('display')
const displayText = document.getElementById('display').textContent
const igual = document.getElementById('igual')
const apagar = document.getElementById('apagar')
const maismenos = document.getElementById('maismenos')
const limparCalculo = document.getElementById('limparCalculo')
const limparTudo = document.getElementById('limparTudo')
const porc = document.getElementById('porc')
const virg = document.getElementById('virg')
const divisaoUm = document.getElementById('divisaoUm')
const potencia = document.getElementById('potencia')
const raiz = document.getElementById('raiz')

/* carrega os numeros na variavel nums */
const nums = document.querySelectorAll('[id*=num]')
const operadores = document.querySelectorAll('[id*=sinal]')

/* armazena o primeiro numero digitado */
let primeiro = true
/* armazena o operador escolhido */
let operador
/* primeiraVariavelele chama de numeroAnterior */
let primeiraVariavel
/* segundaVariavelele chama de numeroAtual */
let segundaVariavel
/* */
let apagarIgual

/* recebe o texto */
const inserirDisplay = text => {
  /*Verificacao dos numeros digitados*/
  if (primeiro) {
    display.textContent = text
    primeiro = false
  } else {
    display.textContent += text
  }
  /*Limite da quantidade de algarismos */
  display.textContent = display.textContent.substring(0, 17)

  segundaVariavel = display.textContent
  apagar = true
}
const inserir = e => inserirDisplay(e.target.textContent)
nums.forEach(e => e.addEventListener('click', inserir))

/* converte os textos em operadores matematicos */
const inserirOperadores = e => {
  primeiro = true
  operador = e.target.textContent
  if ((operador = 'x')) {
    operador = '*'
  } else if ((operador = '÷')) {
    operador = '/'
  }
  primeiraVariavel = display.textContent
}
operadores.forEach(e => e.addEventListener('click', inserirOperadores))

const calcular = () => {
  if (primeiraVariavel && operador) {
    let result = primeiraVariavel + operador
    if (segundaVariavel) {
      result += primeiraVariavel
    } else {
      result += primeiraVariavel
    }
    display.textContent = eval(result.replace(',', '.'))
  }
}
igual.addEventListener('click', calcular)

/*23 min */
