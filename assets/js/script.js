var slideshowImages = document.querySelectorAll(".slideshow-container .imgs");

var nextImgDelay = 5000;
let currentImg = 0;

slideshowImages[currentImg].style.display = "block";

setInterval(nextImg, nextImgDelay);

function nextImg() {
    slideshowImages[currentImg].style.display = "none";
    currentImg = (currentImg + 1) % slideshowImages.length;
    slideshowImages[currentImg].style.display = "block";

}