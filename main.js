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
  if (primeiro) {
    display.textContent = text
    primeiro = false
  } else {
    display.textContent += text
  }
  display.textContent = display.textContent.substring(0, 17)
  segundaVariavel = display.textContent
  apagar = true
}
const inserir = e => inserirDisplay
nums.forEach(e => e.addEventListener('click', inserir))

//***  PAREI NOS 18 MINUTIS */
