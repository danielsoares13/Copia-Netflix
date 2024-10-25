let BotaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let Botao = document.querySelector(".link-info")
let modal = document.querySelector('.modal')
let toggle = document.getElementById('toggle');
 

toggle.addEventListener('change', function() {
    if (this.checked) {
        video.muted = false
    } else {
        video.muted = true
    }
});

Botao.addEventListener("click", MostrarModal)
modal.addEventListener("click", EsconderModal)

function MostrarModal(){
    modal.style.display = "block"
}

function EsconderModal(){
    modal.style.display = "none"
}

