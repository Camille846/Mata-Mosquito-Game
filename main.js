// DEFININDO A DIMENSÃO DO PALCO DO JOGO
var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalco()

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

