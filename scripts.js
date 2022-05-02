const carouselCards = document.querySelector('.carousel__cards');
const carouselButtons = document.querySelectorAll('.carousel__button');
const numberOfImages = document.querySelectorAll('.carousel__cards img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        // if previous button is clicked
        if (event.target.id == 'carousel__prev') {
            if (imageIndex !== 1) {
                imageIndex -= 1;
                translateX += 300;
            }
        } else {
            // else if next button is clicked
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 300;
            }
        }
       carouselImages.style.transform = 'translateX($(translateX)px)';
    });
});

// new idea, just swap image, h3, link and p around.