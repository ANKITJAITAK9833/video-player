// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const videoContainer = document.querySelector(".video-container");
const button = document.querySelector(".switch-btn");
const preloaderContainer = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloaderContainer.classList.add("hide-preloader");
});
button.addEventListener("click", function () {
  if (!button.classList.contains("slide")) {
    videoContainer.pause();
    button.classList.add("slide");
  } else {
    button.classList.remove("slide");
    videoContainer.play();
  }
});
