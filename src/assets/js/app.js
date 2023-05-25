const slides = document.querySelectorAll('.carousel_item');
const dynamicBackground = document.querySelector('#carousel');
let index = 0;

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        index = parseInt(slide.getAttribute('data-index'));

        updateSlide();
        updateBackground();
    });
});

const updateBackground = () => {
    switch (index) {
        case 0:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-01.webp")'
            break;
        case 1:

            break;
        case 2:

            break;
        case 3:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-02.webp")'
            break;
        case 4:
    }
}

const updateSlide = () => {
    for (i = 0; i < slides.length; i++) {
        if (slides.length == 3) {
            switch (index) {
                case 0:
                    slides[0].classList.replace(`item-${i}`, "item-0");
                    slides[1].classList.replace(`item-${i}`, "item-1");
                    slides[2].classList.replace(`item-${i}`, "item-2");
                    break;
                case 1:
                    slides[0].classList.replace(`item-${i}`, "item-2");
                    slides[1].classList.replace(`item-${i}`, "item-0");
                    slides[2].classList.replace(`item-${i}`, "item-1");
                    break;
                case 2:
                    slides[0].classList.replace(`item-${i}`, "item-1");
                    slides[1].classList.replace(`item-${i}`, "item-2");
                    slides[2].classList.replace(`item-${i}`, "item-0");
            }
        } else {
            switch (index) {
                case 0:
                    slides[0].classList.replace(`item-${i}`, "item-0");
                    slides[1].classList.replace(`item-${i}`, "item-1");
                    slides[2].classList.replace(`item-${i}`, "item-2");
                    slides[3].classList.replace(`item-${i}`, "item-3");
                    slides[4].classList.replace(`item-${i}`, "item-4");
                    break;
                case 1:
                    slides[0].classList.replace(`item-${i}`, "item-2");
                    slides[1].classList.replace(`item-${i}`, "item-0");
                    slides[2].classList.replace(`item-${i}`, "item-4");
                    slides[3].classList.replace(`item-${i}`, "item-1");
                    slides[4].classList.replace(`item-${i}`, "item-3");
                    break;
                case 2:
                    slides[0].classList.replace(`item-${i}`, "item-1");
                    slides[1].classList.replace(`item-${i}`, "item-3");
                    slides[2].classList.replace(`item-${i}`, "item-0");
                    slides[3].classList.replace(`item-${i}`, "item-4");
                    slides[4].classList.replace(`item-${i}`, "item-2");
                    break;
                case 3:
                    slides[0].classList.replace(`item-${i}`, "item-4");
                    slides[1].classList.replace(`item-${i}`, "item-2");
                    slides[2].classList.replace(`item-${i}`, "item-3");
                    slides[3].classList.replace(`item-${i}`, "item-0");
                    slides[4].classList.replace(`item-${i}`, "item-1");
                    break;
                case 4:
                    slides[0].classList.replace(`item-${i}`, "item-3");
                    slides[1].classList.replace(`item-${i}`, "item-4");
                    slides[2].classList.replace(`item-${i}`, "item-1");
                    slides[3].classList.replace(`item-${i}`, "item-2");
                    slides[4].classList.replace(`item-${i}`, "item-0");
            }
        }
    }
}