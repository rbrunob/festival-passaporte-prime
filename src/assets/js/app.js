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
if (sinopse) {
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
}

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
if (carouselArea) {

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

}

// xtra carousel
const dotsArea = document.querySelector('.dots');
const xtraCarouselArea = document.querySelector('.xtra_items');
const xtraCarouselItems = document.querySelectorAll('.xra_item');
if (xtraCarouselArea) {

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;

    const handleHighlight = () => {
        xtraCarouselItems.forEach(item => {
            if (item.classList.contains('item-2')) {
                item.classList.add('highlight');
            } else {
                item.classList.remove('highlight');
            }
        })
    }

    handleHighlight();

    const createDots = () => {
        for (i = 0; i < xtraCarouselItems.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');

            if (i == (currentIndex)) {
                dot.classList.add('active')
            }

            dotsArea.appendChild(dot);
        }
    }

    createDots();

    function handleCarousel(direction) {
        let areaItems = document.querySelector(".xtra_items");
        let allItems = areaItems.querySelectorAll('.xra_item');
        let itemChange;

        for (i = 0; i < allItems.length; i++) {
            if (allItems[i].classList.contains('highlight')) {
                allItems[i].classList.remove('highlight');
            }
        }

        if (direction == 'left') {
            currentIndex--

            if (currentIndex < 0) {
                currentIndex = allItems.length - 1
            }

            itemChange = allItems[allItems.length - 1];
            allItems[allItems.length - 1].remove();
            areaItems.insertAdjacentElement("afterbegin", itemChange);
            allItems = areaItems.querySelectorAll('.xra_item');
            allItems[0].classList.add('hidden');
            allItems[5].classList.add('hidden');
            setTimeout(function () {
                allItems[5].classList.remove('hidden');
            }, 400)

            allItems = areaItems.querySelectorAll('.xra_item');
            setTimeout(function () {
                allItems[2].classList.add('highlight');
                for (i = 0; i < allItems.length; i++) {
                    if (allItems[0].classList.contains('hidden')) {
                        allItems[0].classList.remove('hidden');
                    }
                }
            }, 10)

            console.log('left')

        } else if (direction == 'right') {
            currentIndex++

            if (currentIndex > allItems.length - 1) {
                currentIndex = 0;
            }

            allItems = areaItems.querySelectorAll('.xra_item');
            itemChange = allItems[0];
            allItems[0].classList.add('hidden')
            setTimeout(function () {
                allItems[0].remove();
                areaItems.insertAdjacentElement("beforeend", itemChange);
            }, 300)

            allItems = areaItems.querySelectorAll('.xra_item');
            allItems[3].classList.add('highlight');
            setTimeout(function () {
                for (i = 0; i < allItems.length; i++) {
                    if (allItems[i].classList.contains('hidden')) {
                        allItems[i].classList.remove('hidden');
                    }
                }
            }, 300)

            console.log('right')
        }

        let allDots = document.querySelectorAll('.dots .dot');

        allDots.forEach((item, index) => {
            if (index == currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })

    }

    xtraCarouselArea.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPosition = e.clientX;
        xtraCarouselArea.style.cursor = "grabbing"
    });

    xtraCarouselArea.addEventListener('mousemove', e => {
        if (isDragging) {
            const currentPosition = e.clientX;
            currentTranslate = prevTranslate + currentPosition - startPosition;
        }
    });

    xtraCarouselArea.addEventListener('mouseup', () => {
        isDragging = false;
        xtraCarouselArea.style.cursor = "grab"

        if (currentTranslate < prevTranslate) {
            handleCarousel('right')
        } else if (currentTranslate > prevTranslate) {
            handleCarousel('left')
        }

        prevTranslate = currentTranslate;
    });

    xtraCarouselArea.addEventListener('mouseleave', () => {
        isDragging = false;
    });
}
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
if (teaserButton) {

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

}

const fullItemsCarouselArea = document.getElementById('full-item');

if (fullItemsCarouselArea) {
    const fullItemsCarouselAreaItems = document.querySelector('.full-item-items');
    const fullItemsCarouselItems = document.querySelectorAll('.full-item-items .item');
    const areaDots = document.querySelector('.dots-full-item');

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;

    const createDots = () => {
        for (i = 0; i < fullItemsCarouselItems.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');

            if (i == (currentIndex)) {
                dot.classList.add('active')
            }

            areaDots.appendChild(dot);
        }
    }

    createDots();

    function handleCarousel(direction) {
        if (direction == 'left') {
            currentIndex++

            fullItemsCarouselAreaItems.scrollLeft += fullItemsCarouselAreaItems.offsetWidth;

            console.log(currentIndex)
        } else if (direction == 'right') {
            currentIndex--

            fullItemsCarouselAreaItems.scrollLeft -= fullItemsCarouselAreaItems.offsetWidth;

            console.log(currentIndex)
        }

        let allDots = document.querySelectorAll('.dots-full-item .dot');

        allDots.forEach((item, index) => {
            if (index == currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }

    let quantity = 1;

    let width = 100 / quantity;
    fullItemsCarouselItems.forEach((item) => {
        item.style.width = `calc(${width}%)`;
    });

    fullItemsCarouselAreaItems.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPosition = e.clientX;
        fullItemsCarouselAreaItems.style.cursor = "grabbing"
    });

    fullItemsCarouselAreaItems.addEventListener('mousemove', e => {
        if (isDragging) {
            fullItemsCarouselAreaItems.style.cursor = "grabbing"
            const currentPosition = e.clientX;
            currentTranslate = prevTranslate + currentPosition - startPosition;
        }
    });

    fullItemsCarouselAreaItems.addEventListener('mouseup', () => {
        isDragging = false;
        fullItemsCarouselAreaItems.style.cursor = "grab"

        if (currentTranslate < prevTranslate) {
            if (currentIndex < fullItemsCarouselItems.length - 1) {
                handleCarousel('left')
            }
        } else if (currentTranslate > prevTranslate) {

            if (currentIndex > 0) {
                handleCarousel('right')
            }
        }

        prevTranslate = currentTranslate;
    });

    fullItemsCarouselAreaItems.addEventListener('mouseleave', () => {
        isDragging = false;
    });
}