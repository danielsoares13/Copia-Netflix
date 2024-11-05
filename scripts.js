let BotaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let Botao = document.querySelector(".link-info")
let modal = document.querySelector('.modal')

Botao.addEventListener("click", MostrarModal)
modal.addEventListener("click", EsconderModal)

function MostrarModal(){
    modal.style.display = "block"
}

function EsconderModal(){
    modal.style.display = "none"
}


function toggleVolume() {
    let BotaoSom = document.getElementById("volumeToggle");
    let icon = BotaoSom.querySelector("i");

    // Verifica o estado atual do áudio
    if (video.muted) {
      video.muted = false;
      icon.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
      video.muted = true;
      icon.classList.replace("fa-volume-up", "fa-volume-mute");
    }
  }
