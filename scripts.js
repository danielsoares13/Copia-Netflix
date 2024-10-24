let BotaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let Botao = document.querySelector(".link-info")
let modal = document.querySelector('.modal')
 

BotaoSom.addEventListener("click", LigaSom)

function LigaSom(){
    video.muted = false
}

Botao.addEventListener("click", MostrarBotao)
modal.addEventListener("click", EsconderModal)

function MostrarBotao(){
    modal.style.display = "block"
}

function EsconderModal(){
    modal.style.display = "none"
}