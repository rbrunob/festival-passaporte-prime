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
menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    functionHeader.classList.remove('active');

    document.querySelector('main').addEventListener("click", () => {
        menu.classList.remove('active')
    })
})

// open input search
const search = document.querySelector('.search_icon');
const functionHeader = document.querySelector('.function_search');
const inputHeader = document.querySelector('.function_search input');

search.addEventListener('click', () => {
    functionHeader.classList.toggle('active');
    inputHeader.focus();
    menu.classList.remove('active')

    document.querySelector('main').addEventListener("click", () => {
        functionHeader.classList.remove('active');
        inputHeader.value = '';
    })
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
            buttonSinopse.setAttribute("title", "veja mais")
            location.href = '#sinopse'

        } else {
            sinopseArea.classList.add('active');
            buttonSinopse.classList.add('active');
            buttonSinopse.setAttribute("title", "veja menos")
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
    // dafault variables
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;
    let leftCount = 0;

    // verify classes and update highlight class
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

    // create dots and add active to the first dot
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

    // move carousel based on the direction it receives (left, right)
    function handleCarousel(direction) {
        let areaItems = document.querySelector(".xtra_items");
        let allItems = areaItems.querySelectorAll('.xra_item');

        // aux variable
        let itemChange;

        // remove highlight class from all items
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

            // stores the last item
            itemChange = allItems[allItems.length - 1];

            // remove the last item
            allItems[allItems.length - 1].remove();

            // insert last item after begin area items div
            areaItems.insertAdjacentElement("afterbegin", itemChange);

            // get all item again to update new items postions
            allItems = areaItems.querySelectorAll('.xra_item');

            // animation classes
            allItems[0].classList.add('hidden');
            setTimeout(function () {
                allItems[5].classList.remove('hidden');
            }, 400)

            // get all item again to update new items postions
            allItems = areaItems.querySelectorAll('.xra_item');

            setTimeout(function () {

                // add highligh class ever to the sencond item
                allItems[2].classList.add('highlight');

                // handle hidden classes from all items
                for (i = 0; i < allItems.length; i++) {
                    if (allItems[0].classList.contains('hidden')) {
                        allItems[0].classList.remove('hidden');
                    }
                }

            }, 10)

            // get all dots
            let allDots = document.querySelectorAll('.dots .dot');

            // get width dots area
            let widthDotsArea = dotsArea.offsetWidth - 10;

            // verify position
            if (leftCount <= 0) {
                // set leftCount as width area
                leftCount = widthDotsArea

                for (i = 0; i < allDots.length; i++) {
                    // add -18px for all dots
                    allDots[i].style.left = `${-18}px`

                    // append the first item to the end of the dots area
                    allDots[0].style.left = `${widthDotsArea}px`
                }

            } else {
                // decrement -18px to the first item
                allDots[0].style.left = `${leftCount -= 18}px`

                // set as zero the last item postion
                allDots[allDots.length - 1].style.left = `${0}px`

                // set as zero left style
                allDots[currentIndex + 1].style.left = `${0}px`
            }

        } else if (direction == 'right') {
            currentIndex++

            if (currentIndex > allItems.length - 1) {
                currentIndex = 0;
            }

            // get all item again to update new items postions
            allItems = areaItems.querySelectorAll('.xra_item');

            // stores the first item
            itemChange = allItems[0];

            // handle hidden class to the first item
            allItems[0].classList.add('hidden')
            setTimeout(function () {
                // remove first item
                allItems[0].remove();

                // insert first item before end area items
                areaItems.insertAdjacentElement("beforeend", itemChange);
            }, 300)

            // get all item again to update new items postions
            allItems = areaItems.querySelectorAll('.xra_item');

            // add highligh class ever to the sencond item
            allItems[3].classList.add('highlight');

            // remove highlight class from all items
            setTimeout(function () {
                for (i = 0; i < allItems.length; i++) {
                    if (allItems[i].classList.contains('hidden')) {
                        allItems[i].classList.remove('hidden');
                    }
                }
            }, 300)

            let allDots = document.querySelectorAll('.dots .dot');

            // get width dots area
            let widthDotsArea = dotsArea.offsetWidth - 10;

            // verify position
            if (leftCount >= widthDotsArea) {
                // set leftCount as 0
                leftCount = 0

                for (i = 0; i < allDots.length - 1; i++) {
                    // set all left style items to zero
                    allDots[i].style.left = `${0}px`

                    // set last item left style to zero
                    allDots[allDots.length - 1].style.left = `${0}px`
                }
            } else {
                // increment 18px to the first item
                allDots[0].style.left = `${leftCount += 18}px`
                // set -18px left style
                allDots[currentIndex].style.left = `${-18}px`
            }
        }


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

    const prevXtra = document.querySelector('.xtra_carousel .prev')
    const nextXtra = document.querySelector('.xtra_carousel .next')

    prevXtra.addEventListener('click', () => handleCarousel('right'))
    nextXtra.addEventListener('click', () => handleCarousel('left'))
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

        // html structure
        popup.innerHTML = `
        <div class='close'></div>
        <div class="popup_row">
            <div class="popup_content">
                <img src=${src} />
            </div>
        </div>
        `;

        // close actions
        const handleClose = () => {
            popup.style.visibility = 'hidden'
            popup.style.opacity = '0'
        }

        document.querySelector('.close').addEventListener('click', handleClose);
    })
})

const teaserButton = document.querySelector('.carousel_button button');
if (teaserButton) {

    teaserButton.addEventListener('click', () => {
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';

        // set url content
        const src = "https://preprod.containermedia.com.br/passaporte-prime/src/assets/videos/teaser-passaporte-prime.mp4"

        // html structure
        popup.innerHTML = `
        <div class='close'></div>
        <div class="popup_row">
            <div class="popup_content">
                <iframe width="100%" height="550" src="https://www.youtube.com/embed/O9pJCgB1HUY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        `;

        document.querySelector('.close').addEventListener('click', handleClose);
    })

    // append pop up section in the body html
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

    // default variables
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;

    // create dots based in the carousel items length
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

    // move carousel based on the direction it receives (left, right)
    function handleCarousel(direction) {
        if (direction == 'left') {
            currentIndex++

            fullItemsCarouselAreaItems.scrollLeft += fullItemsCarouselAreaItems.offsetWidth;

        } else if (direction == 'right') {
            currentIndex--

            fullItemsCarouselAreaItems.scrollLeft -= fullItemsCarouselAreaItems.offsetWidth;

        }

        let allDots = document.querySelectorAll('.dots-full-item .dot');

        // update dot active
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

const highlights = document.getElementById('highlights');

if (highlights) {
    // default variable
    let index = 0

    const prev = document.querySelector(".carousel_actions_highlights .prev_h")
    const next = document.querySelector(".carousel_actions_highlights .next_h")

    next.addEventListener("click", () => {
        // increment 
        index++

        // verify position 
        if (index > 2) {
            index = 0
        }

        // call function
        handleCarousel(index)
    })

    prev.addEventListener("click", () => {
        // decrement 
        index--

        // verify position 
        if (index < 0) {
            index = 2
        }

        // call function
        handleCarousel(index)
    })


    const items = document.querySelectorAll(".items_highlights .item");

    // set carousel position 
    function handleCarousel(index) {
        for (i = 0; i < items.length; i++) {
            switch (index) {
                case 0:
                    items[0].classList.replace(`item-${i}`, "item-0");
                    items[1].classList.replace(`item-${i}`, "item-1");
                    items[2].classList.replace(`item-${i}`, "item-2");
                    break;
                case 1:
                    items[0].classList.replace(`item-${i}`, "item-2");
                    items[1].classList.replace(`item-${i}`, "item-0");
                    items[2].classList.replace(`item-${i}`, "item-1");
                    break;
                case 2:
                    items[0].classList.replace(`item-${i}`, "item-1");
                    items[1].classList.replace(`item-${i}`, "item-2");
                    items[2].classList.replace(`item-${i}`, "item-0");
            }
        }
    }
}

const blog = document.querySelector("#blog");

if (blog) {
    const previusarrow = document.querySelector(".blog_carousel .prev");
    const nextarrow = document.querySelector(".blog_carousel .next");

    const carousel = document.querySelector(".blog_carousel_items");
    const items = document.querySelectorAll(".blog_carousel_items .item");

    previusarrow.addEventListener('click', () => {
        carousel.scrollLeft -= carousel.offsetWidth;
    });
    nextarrow.addEventListener('click', () => {
        carousel.scrollLeft += carousel.offsetWidth;
    });

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
    items.forEach((item) => {
        item.style.width = `calc(${width}% - 40px)`;
    });
}

const carouselFullWidth = document.getElementById('fullwidth');

if (carouselFullWidth) {
    const items = document.querySelectorAll('.carousel_fullwidth .item');
    const dots = document.querySelector('.fullwidth_row .dotsfull');

    let currentIndex = 0;

    const createDotsFullWidth = () => {
        for (i = 0; i < items.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dotfull');

            if (i == (currentIndex)) {
                dot.classList.add('active');
                items[0].classList.add('active');
            }

            dots.appendChild(dot);
        }
    }

    createDotsFullWidth();



    let quantity = 1;

    let width = 100 / quantity;

    items.forEach((item) => {
        item.style.width = `calc(${width}%)`;
    });

    let dotsFullWidth = document.querySelectorAll('.fullwidth_row .dotsfull .dotfull');

    dotsFullWidth.forEach((item, index) => {
        item.addEventListener("click", () => {
            for (i = 0; i < items.length; i++) {
                items[i].classList.remove('active');
                dotsFullWidth[i].classList.remove('active');
            }

            items[index].classList.add('active');
            item.classList.add('active');
        })
    })

    // update active dots
    dotsFullWidth.forEach((item, index) => {
        if (index == currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }

    })

}