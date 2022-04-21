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
/* segundaVariavelele chama de segundaVariavel */
let segundaVariavel

let apagarIgual

const ajustaPontoVirgula = () =>
  (display.textContent = display.textContent.replace('.', ','))
/* recebe o texto */
const inserirDisplay = text => {
  /*Verificacao dos number numeros digitados*/
  if (primeiro) {
    display.textContent = text
    primeiro = false
  } else {
    display.textContent += text
  }
  /*Limite da quantidade de algarismos */
  display.textContent = display.textContent.substring(0, 17)
  segundaVariavel = display.textContent
  apagarIgual = true
}

const inserir = e => inserirDisplay(e.target.textContent)

nums.forEach(e => e.addEventListener('click', inserir))
/* converte os textos em operadores matematicos */
const inserirOperador = e => {
  primeiro = true
  operador = e.target.textContent
  if (operador == 'x') {
    operador = '*'
  } else if (operador == '÷') {
    operador = '/'
  }
  numeroAnterior = display.textContent
}

operadores.forEach(e => e.addEventListener('click', inserirOperador))

const calcular = () => {
  if (numeroAnterior && operador) {
    let result = numeroAnterior + operador

    if (segundaVariavel) {
      result += segundaVariavel
    } else {
      result += numeroAnterior
    }

    display.textContent = eval(result.replace(',', '.'))
    ajustaPontoVirgula()

    if (display.textContent == 'NaN') {
      display.textContent = '0'
    }

    numeroAnterior = display.textContent
    primeiro = true
    apagarIgual = false
  }
}

igual.addEventListener('click', calcular)

const apagarUltimo = () => {
  if (apagarIgual) {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1)
    } else {
      display.textContent = 0
    }

    primeiro = true
  }
}

apagar.addEventListener('click', apagarUltimo)

const inverteSinal = () => {
  display.textContent = parseFloat(display.textContent.replace(',', '.')) * -1
  ajustaPontoVirgula()
}

maismenos.addEventListener('click', inverteSinal)

const limpaCalculo = () => {
  display.textContent = '0'
  primeiro = true
}

limparCalculo.addEventListener('click', limpaCalculo)

const limpaTudo = () => {
  display.textContent = '0'
  numeroAnterior = '0'
  segundaVariavel = '0'
  primeiro = true
}

limparTudo.addEventListener('click', limpaTudo)

const calcPorc = () => {
  display.textContent = parseFloat(display.textContent.replace(',', '.')) / 100
  ajustaPontoVirgula()
  segundaVariavel = display.textContent
  primeiro = true
}

porc.addEventListener('click', calcPorc)

const calcDivisaoUm = () => {
  display.textContent = 1 / parseFloat(display.textContent.replace(',', '.'))
  ajustaPontoVirgula()
  segundaVariavel = display.textContent
  numeroAnterior = '0'
  primeiro = true
}

divisaoUm.addEventListener('click', calcDivisaoUm)

const calcPotencia = () => {
  display.textContent = Math.pow(
    parseFloat(display.textContent.replace(',', '.')),
    2
  )
  ajustaPontoVirgula()
  segundaVariavel = display.textContent
  numeroAnterior = '0'
  primeiro = true
}

potencia.addEventListener('click', calcPotencia)

const calcRaiz = () => {
  display.textContent = Math.sqrt(
    parseFloat(display.textContent.replace(',', '.'))
  )
  ajustaPontoVirgula()
  segundaVariavel = display.textContent
  numeroAnterior = '0'
  primeiro = true
}

raiz.addEventListener('click', calcRaiz)
