let video = document.querySelector(".video")
const BotaoSom = document.getElementById("volumeToggle");
const icon = BotaoSom.querySelector("i");
const Botao = document.querySelector(".link-info")
const modal = document.querySelector('.modal')

Botao.addEventListener("click", MostrarModal)
modal.addEventListener("click", EsconderModal)

function MostrarModal(){
    modal.style.display = "block"
}

function EsconderModal(){
    modal.style.display = "none"
}


function toggleVolume() {
    
    // Verifica o estado atual do áudio
    if (video.muted) {
      video.muted = false;
      icon.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
      video.muted = true;
      icon.classList.replace("fa-volume-up", "fa-volume-mute");
    }
  }
