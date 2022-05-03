/* CAROUSEL FUNCTIONALITY */
// new idea, just swap image, h3, link and p around.
const carouselImages = document.querySelectorAll('.carousel__card > img');
const numOfImages = document.querySelectorAll(".carousel__card > img").length;
const carouselDescriptions = document.querySelectorAll('.carousel p');
let currMainImage = 2;

function shiftLeft() {
    console.log("Shifting left..");
    if (currMainImage == numOfImages) {
        currMainImage = 1; 
    } else {
        currMainImage ++;
    }
}

function shiftRight() {
    console.log("Shifting right...");
    if (currMainImage == 1) {
        currMainImage = 3; 
    } else {
        currMainImage --;
    }
}

