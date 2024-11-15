const video = document.querySelector(".video")
const VideoModal = document.querySelector(".video-modal")
const BotaoSom = document.getElementById("volumeToggle");
const icon = BotaoSom.querySelector("i");
const BotaoSomModal = document.getElementById("volumeToggleModal");
const iconModal = BotaoSomModal.querySelector("i");
const Botao = document.querySelector(".link-info")
const modal = document.querySelector('.modal')
const searchContainer = document.querySelector(".search-container");
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

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

  searchBtn.addEventListener("click", () => {
    searchContainer.classList.toggle("active"); // Alterna a classe 'active'
    if (searchInput.style.width === "0px" || searchInput.style.width === "") {
     searchInput.focus(); // Foca no campo quando ele é aberto
  }
});

document.addEventListener("click", (event) => {
  // Verifica se o clique foi fora do `searchContainer`
  if (!searchContainer.contains(event.target)) {
    searchContainer.classList.remove("active");
  }
});
