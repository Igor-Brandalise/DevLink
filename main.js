/*Parte troca de modo de cor*/
function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar as imagens do sol e da lua
  const sunImg = document.getElementById("sun");
  const moonImg = document.getElementById("moon");

  // alternar a visibilidade das imagens
  if (html.classList.contains("light")) {
    sunImg.style.display = "none";
    moonImg.style.display = "inline";
  } else {
    sunImg.style.display = "inline";
    moonImg.style.display = "none";
  }
}