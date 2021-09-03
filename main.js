// DEFININDO A DIMENSÃO DO PALCO DO JOGO
var altura = 0
var largura = 0

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalco()
