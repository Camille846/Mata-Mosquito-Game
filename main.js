// DEFININDO A DIMENSÃO DO PALCO DO JOGO
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500
var nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === 'Normal'){
    // 1500ms
    criaMosquitoTempo = 1500
} else if(nivel === 'Medio'){
    // 1000ms
    criaMosquitoTempo = 1000
} else if(nivel === 'Dificil'){
    // 750ms
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalco()

var cronometro = setInterval(() => {
    tempo -= 1 
    
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000);

// CRIANDO POSIÇÕES RANDÔMICAS
function posicaoRandomica(){
    // REMOVER MOSQUITO ANTERIOR (CASO EXISTA)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        // Controlando os pontos de vida
        if(vidas > 3){
            window.location.href = "game_over.html"
        } else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

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
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

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

