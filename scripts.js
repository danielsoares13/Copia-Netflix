const video = document.querySelector(".video")
const VideoModal = document.querySelector(".video-modal")
const BotaoSom = document.getElementById("volumeToggle");
const icon = BotaoSom.querySelector("i");
const BotaoSomModal = document.getElementById("volumeToggleModal");
const iconModal = BotaoSomModal.querySelector("i");
const Botao = document.querySelector(".link-info")
const modal = document.querySelector('.modal')

Botao.addEventListener("click", MostrarModal)
modal.addEventListener("click", EsconderModal)


function MostrarModal(Botao){
   modal.style.display = "block"
  if (Botao = true){
    video.pause();
  }
}

function EsconderModal(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    VideoModal.muted = true;
    iconModal.classList.replace("fa-volume-up", "fa-volume-mute");
    VideoModal.currentTime = 0;
    video.play();
    video.muted = false;
  }
};

function toggleVolume() {
    

    if (video.muted) {
      video.muted = false;
      icon.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
      video.muted = true;
      icon.classList.replace("fa-volume-up", "fa-volume-mute");
    }
  }

  function toggleVolumeModal() {
    
    
    if (VideoModal.muted) {
      VideoModal.muted = false;
      iconModal.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
      VideoModal.muted = true;
      iconModal.classList.replace("fa-volume-up", "fa-volume-mute");
    }
  }
