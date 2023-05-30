// carousel main character 
const slides = document.querySelectorAll('.carousel_item');
const dynamicBackground = document.querySelector('#carousel');
let index = 0;

// get slide array
slides.forEach(slide => {
    slide.addEventListener('click', () => {
        index = parseInt(slide.getAttribute('data-index'));

        // call functions
        updateSlide();
        updateBackground();
    });
});

// update background whenever function is called
const updateBackground = () => {
    switch (index) {
        case 0:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-01.webp")'
            break;
        case 1:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-02.webp")'
            break;
        case 2:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-01.webp")'
            break;
        case 3:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-02.webp")'
            break;
        case 4:
            dynamicBackground.style.backgroundImage = ' url("https://preprod.containermedia.com.br/passaporte-prime/src/assets/images/bg-passaporte-prime-01.webp")'
    }
}

// update slide position whenever function is called
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

// menu toggle
const menu = document.querySelector('.menu_toggle');
menu.addEventListener('click', () => { menu.classList.toggle('active') })

// open input search
const search = document.querySelector('.search_icon');
const functionHeader = document.querySelector('.function_search');
const inputHeader = document.querySelector('.function_search input');

search.addEventListener('click', () => {
    functionHeader.classList.toggle('active')
    inputHeader.focus()
})

// open sinopse 
const buttonSinopse = document.querySelector('.sinopse_button');
const sinopseArea = document.querySelector('.sinopse_area');
const sinopse = document.querySelector('#sinopse');

buttonSinopse.addEventListener('click', () => {
    if (sinopseArea.classList.contains('active')) {
        sinopseArea.classList.remove('active');
        buttonSinopse.classList.remove('active');
        location.href = '#sinopse'

    } else {
        sinopseArea.classList.add('active');
        buttonSinopse.classList.add('active');
    }
})

// characters effect
const buttonCharacters = document.querySelectorAll('.character_button');

buttonCharacters.forEach(button => {
    button.addEventListener('click', () => {
        const character = button.parentNode;
        character.classList.toggle('active');
    })
})

// carousel characters
const carouselArea = document.querySelector('.carousel_area');
const characters = document.querySelectorAll('.character_item');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');

prev.addEventListener('click', () => {
    carouselArea.scrollLeft -= carouselArea.offsetWidth;
})

next.addEventListener('click', () => {
    carouselArea.scrollLeft += carouselArea.offsetWidth;
})

let screenWidth = window.screen.width;
let quantity;

if (screenWidth <= 540) {
    quantity = 1;
} else if (screenWidth <= 1000) {
    quantity = 3
} else {
    quantity = 4;
}

let width = 100 / quantity;
characters.forEach((item) => {
    item.style.width = `calc(${width}% - 20px)`;
});

// xtra carousel
const dotsArea = document.querySelector('.dots');
const dots = document.querySelectorAll('.dot');
const xtraCarouselArea = document.querySelector('.xtra_items');
const xtraCarouselItems = document.querySelectorAll('.xra_item');

const carouselWidth = xtraCarouselArea.offsetWidth;

let visibleItems = 0;

xtraCarouselItems.forEach(item => {
    if (item.offsetLeft >= 0 && item.offsetLeft + item.offsetWidth <= carouselWidth) {
        visibleItems++
    } else {
        console.log('hidden')
    }
});

console.log(visibleItems)
// xtra carousel

// pop up
const body = document.querySelector('body');

const popup = document.createElement('div');
popup.classList.add('popup')

const galleryItems = document.querySelectorAll('.gallery_item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';

        const src = item.children[0].src;

        popup.innerHTML = `
        <div class='close'></div>
        <div class="popup_row">
            <div class="popup_content">
                <img src=${src} />
            </div>
        </div>
        `;

        document.querySelector('.close').addEventListener('click', handleClose);
    })
})

const teaserButton = document.querySelector('.carousel_button button');

teaserButton.addEventListener('click', () => {
    popup.style.visibility = 'visible';
    popup.style.opacity = '1';

    const src = "https://preprod.containermedia.com.br/passaporte-prime/src/assets/videos/teaser-passaporte-prime.mp4"

    popup.innerHTML = `
    <div class='close'></div>
    <div class="popup_row">
        <div class="popup_content">
            <video src=${src} preload controls></video>
        </div>
    </div>
    `;

    document.querySelector('.close').addEventListener('click', handleClose);
})

body.appendChild(popup);

const handleClose = () => {
    popup.style.visibility = 'hidden'
    popup.style.opacity = '0'
}