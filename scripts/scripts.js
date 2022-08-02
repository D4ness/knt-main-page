const slideTeachersRight = () => {
    const slide = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[0];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const shift = 10;
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

const slideTeachersLeft = () => {
    const slide = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[1];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const prevMargin = parseInt(slide.style.marginLeft) || 0;
    const shift = 10;
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

const radioBgChange = (el) => {
    const labels = document.getElementsByClassName('teachers__slider__navigation__label');
    for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        label.style.backgroundColor = "#8F9AB3";
        label.style.opacity = "0.5";
    }
    el.style.backgroundColor = '#326EEA';
    el.style.opacity = '1';
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