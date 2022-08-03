const deviceWidth = window.screen.width;
console.log(deviceWidth);

const slideTeachersRight = () => {
    const slide = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[0];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const shift = 20;
    const prevMargin = parseInt(slide.style.marginLeft) || 0;
    if (prevMargin > (-80)) {
        slide.style.marginLeft = (prevMargin - shift).toString() + "%";
        let radioNum = -prevMargin / shift + 2;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        radioBgChange(radio);
        if (prevMargin - shift === -80) {
            const btn = document.getElementsByClassName('slider__button')[1];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            console.log(btn, btn.style.backgroundImage);
        }
    }
}
const offset = deviceWidth > 767 ? 0 : 170;

const slideExampleRight = () => {
    const slide = document.getElementsByClassName('example_1')[0];
    const btn = document.getElementsByClassName('slider__button')[2];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const shift = 272;
    const prevMargin = parseInt(slide.style.marginLeft) || offset;
    console.log(prevMargin);
    if (prevMargin > -1100) {
        slide.style.marginLeft = (prevMargin - shift).toString() + "px";
        if (prevMargin - shift === -1100 ) {
            const btn = document.getElementsByClassName('slider__button')[3];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            console.log(btn, btn.style.backgroundImage);
        }
    }
}
const slideExampleLeft = () => {
    const slide = document.getElementsByClassName('example_1')[0];
    const btn = document.getElementsByClassName('slider__button')[3];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const shift = 272;
    const prevMargin = parseInt(slide.style.marginLeft) || offset;
    console.log(prevMargin);
    if (prevMargin < 532) {
        slide.style.marginLeft = (prevMargin + shift).toString() + "px";
        if (prevMargin + shift === 532) {
            const btn = document.getElementsByClassName('slider__button')[2];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            console.log(btn, btn.style.backgroundImage);
        }
    }
}

const slideTeachersLeft = () => {
    const slide = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[1];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const prevMargin = parseInt(slide.style.marginLeft) || 0;
    const shift = 20;
    if (prevMargin < (0)) {
        slide.style.marginLeft = (prevMargin + shift).toString() + "%";
        let radioNum = -prevMargin / shift;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        radioBgChange(radio);
        if (prevMargin + shift === 0) {
            const btn = document.getElementsByClassName('slider__button')[0];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            console.log(btn, btn.style.backgroundImage);
        }
    }
}

const slideRadio = () => {
    const slide = document.getElementsByClassName('teachers__slide_1')[0];
    const prevMargin = slide.style.marginLeft;
    console.log(prevMargin);
    // slideTeachersRight();
}

const radioBgChange = (el) => {
    const labels = document.getElementsByClassName('teachers__slider__navigation__label');
    for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        label.style.backgroundColor = "#8F9AB3";
        label.style.opacity = "0.5";
    }
    el.style.backgroundColor = '#326EEA';
    el.style.opacity = '1';
    slideRadio();
}

const showHideMenu = (el) => {
    const menu = document.querySelector('.menu-mobile');
    if (menu.classList.value === 'menu-mobile') {
        document.querySelector('.menu-mobile').classList.add('active');
        el.style.display = 'none';
        document.getElementsByClassName('header__burger')[1].style.display = 'inline';
        document.getElementsByClassName('header')[0].style.position = 'fixed';
    } else if (menu.classList.value === 'menu-mobile active') {
        document.querySelector('.menu-mobile').classList.remove('active');
        el.style.display = 'none';
        document.getElementsByClassName('header__burger')[0].style.display = 'inline';
        document.getElementsByClassName('header')[0].style.position = 'relative';

    }
}

const showHideNavList = (el) => {
    const ul = el.nextElementSibling;
    if ((ul.style.display === 'none') || (ul.style.display === '')) {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
}