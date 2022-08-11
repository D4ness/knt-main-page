// examples-slider
const deviceWidth = window.screen.width;

let slider = document.querySelector('.examples__slider'),
    slides = document.querySelector('.examples__slides'),
    sliderTrack = slider.querySelector('.examples__slider-track'),
    allSlides = document.querySelectorAll('.example'),
    slideWidth = allSlides[0].offsetWidth + 24,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    lastTrf = --slides.length * slideWidth,
    posThreshold = slideWidth * .35,
    trfRegExp = /[-0-9.]+(?=px)/,
    deviceWidthM = window.screen.width,
    slide = () => {
        if (transition && deviceWidthM <= 767) {
            sliderTrack.style.transition = 'transform .5s';
        }
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    },
    getEvent = () => event.type.search('touch') !== -1 ? event.touches[0] : event,

    swipeStart = function () {
        let evt = getEvent();
        if (allowSwipe && deviceWidthM <= 767) {
            transition = true;

            nextTrf = (slideIndex + 1) * -slideWidth;
            prevTrf = (slideIndex - 1) * -slideWidth;

            posInit = posX1 = evt.clientX;
            posY1 = evt.clientY;

            sliderTrack.style.transition = '';

            document.addEventListener('touchmove', swipeAction);
            document.addEventListener('mousemove', swipeAction);
            document.addEventListener('touchend', swipeEnd);
            document.addEventListener('mouseup', swipeEnd);

            slides.classList.remove('grab');
            slides.classList.add('grabbing');
        }
    },
    swipeAction = function () {

        let evt = getEvent(),
            style = sliderTrack.style.transform,
            transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        posY2 = posY1 - evt.clientY;
        posY1 = evt.clientY;

        // определение действия свайп или скролл
        if (!isSwipe && !isScroll && deviceWidthM <= 767) {
            let posY = Math.abs(posY2);
            if (posY > 7 || posX2 === 0) {
                isScroll = true;
                allowSwipe = false;
            } else if (posY < 7) {
                isSwipe = true;
            }
        }
        if (isSwipe && deviceWidthM <= 767) {
            // запрет ухода влево на первом слайде
            if (slideIndex === 0) {
                if (posInit < posX1) {
                    setTransform(transform, 0);
                    return;
                } else {
                    allowSwipe = true;
                }
            }

            // запрет ухода вправо на последнем слайде
            if (slideIndex === --slides.length && deviceWidthM <= 767) {
                if (posInit > posX1) {
                    setTransform(transform, lastTrf);
                    return;
                } else {
                    allowSwipe = true;
                }
            }

            // запрет протаскивания дальше одного слайда
            if ((posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) && deviceWidthM <= 767) {
                reachEdge();
                return;
            }
            sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
        }

    },
    swipeEnd = function () {
        posFinal = posInit - posX1;

        isScroll = false;
        isSwipe = false;

        document.removeEventListener('touchmove', swipeAction);
        document.removeEventListener('mousemove', swipeAction);
        document.removeEventListener('touchend', swipeEnd);
        document.removeEventListener('mouseup', swipeEnd);

        slides.classList.add('grab');
        slides.classList.remove('grabbing');

        if (allowSwipe && deviceWidthM <= 767) {
            if (Math.abs(posFinal) > posThreshold) {
                if (posInit < posX1) {
                    slideIndex--;
                } else if (posInit > posX1) {
                    slideIndex++;
                }
            }

            if (posInit !== posX1) {
                allowSwipe = false;
                slide();
            } else {
                allowSwipe = true;
            }

        } else {
            allowSwipe = true;
        }

    },
    setTransform = function (transform, compareTransform) {
        if (transform >= compareTransform && deviceWidthM <= 767) {
            if (transform > compareTransform) {
                sliderTrack.style.transform = `translate3d(${compareTransform}px, 0px, 0px)`;
            }
        }
        allowSwipe = false;
    },
    reachEdge = function () {
        transition = false;
        swipeEnd();
        allowSwipe = true;
    };

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
slides.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

const shiftTeachers = deviceWidth > 768 ? 636 : 334;

const slideTeachersRight = () => {
    let prevNum = 0;
    const slideT = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[0];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const prevMargin = parseInt(slideT.style.marginLeft) || 0;
    if (prevMargin > -2544) {
        slideT.style.marginLeft = (prevMargin - shiftTeachers).toString() + "px";
        let radioNum = -prevMargin / shiftTeachers + 2;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        prevNum = radioBgChangeColor(radio);
        if ((prevMargin - shiftTeachers === -2544) || (prevMargin === -2004)) {
            const btn = document.getElementsByClassName('slider__button')[1];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
        }
    }
}

const slideTeachersLeft = () => {
    let prevNum = 0;
    const slideT = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[1];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const prevMargin = parseInt(slideT.style.marginLeft) || 0;
    if (prevMargin < 0) {
        slideT.style.marginLeft = (prevMargin + shiftTeachers).toString() + "px";
        let radioNum = -prevMargin / shiftTeachers;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        prevNum = radioBgChangeColor(radio);
        if (prevMargin + shiftTeachers === 0) {
            const btn = document.getElementsByClassName('slider__button')[0];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
        }
    }
}
const radioBgChangeColor = (el) => {
    let number = 0;
    const labels = document.getElementsByClassName('teachers__slider__navigation__label');
    for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        if (label.style.opacity === "1") {
            number = label.id[label.id.length - 1];
        }
        label.style.backgroundColor = "#8F9AB3";
        label.style.opacity = "0.5";
    }
    const btnL = document.getElementsByClassName('slider__button')[0];
    const btnR = document.getElementsByClassName('slider__button')[1];
    btnL.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    btnR.style.backgroundImage = 'url(images/slider/arrow-left.svg)';

    if (el.id === 'slider__label1') {
        btnL.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
    } else if (el.id === 'slider__label5') {
        btnR.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
    }
    el.style.backgroundColor = '#326EEA';
    el.style.opacity = '1';
    return number;
}
const radioBgChange = (el) => {
    const prevNumber = radioBgChangeColor(el);
    if (el.id[el.id.length - 1] > prevNumber) {
        for (let i = 0; i < el.id[el.id.length - 1] - prevNumber; i++) {
            slideTeachersRight();
        }
    } else if (el.id[el.id.length - 1] < prevNumber) {
        for (let i = 0; i < prevNumber - el.id[el.id.length - 1]; i++) {
            slideTeachersLeft();
        }
    }
}

const offsetExample = deviceWidth > 768 ? 0 : 170;
const exampleLeftSide = deviceWidth > 768 ? 1632 : 170;
const exampleRightSide = deviceWidth > 768 ? -1632 : -2278;
const slideE = document.getElementsByClassName('example_1')[0];
if (deviceWidth < 768) {
    const btn = document.getElementsByClassName('slider__button')[2];
    btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
}

const slideExampleRight = () => {
    if (deviceWidth > 768) {
        const slideE = document.getElementsByClassName('example_1')[0];
        const btn = document.getElementsByClassName('slider__button')[2];
        btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
        const shift = 272 * 2;
        const prevMargin = parseInt(slideE.style.marginLeft) || offsetExample;
        if (prevMargin > exampleRightSide) {
            slideE.style.marginLeft = (prevMargin - shift).toString() + "px";
            if (prevMargin - shift === exampleRightSide) {
                const btn = document.getElementsByClassName('slider__button')[3];
                btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            }
        }
    }
}
const slideExampleLeft = () => {
    if (deviceWidth > 768) {
        const slideE = document.getElementsByClassName('example_1')[0];
        const btn = document.getElementsByClassName('slider__button')[3];
        btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
        const shift = 272 * 2;
        const prevMargin = parseInt(slideE.style.marginLeft) || offsetExample;
        if (prevMargin < exampleLeftSide) {
            slideE.style.marginLeft = (prevMargin + shift).toString() + "px";
            if (prevMargin + shift === exampleLeftSide) {
                const btn = document.getElementsByClassName('slider__button')[2];
                btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            }
        }
    }
}


