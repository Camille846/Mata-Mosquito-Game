// DEFININDO A DIMENSÃO DO PALCO DO JOGO
var altura = 0
var largura = 0

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalco()

// CRIANDO POSIÇÕES RANDÔMICAS
function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // Impede a criação de posições negativas aleatórias 
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criando elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosquito.png"
    mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}

posicaoRandomica()

// CRIANDO TAMANHOS RANDÔMICOS 
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        
    }
}

// CRIANDO LADOS ALEATÓRIOS
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}

// CRIANDO E REMOVENDO MOSQUITOS A CADA CICLO DE TEMPO
setInterval(() => {
    posicaoRandomica()
}, 1000);