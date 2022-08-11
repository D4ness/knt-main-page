const deviceWidth = window.screen.width;
const shiftTeachers = deviceWidth > 768 ? 636 : 334;

const slideTeachersRight = () => {
    // if (deviceWidth > 768) {
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
            console.log(btn, btn.style.backgroundImage);
        }
    }
    // }
}

const slideTeachersLeft = () => {
    // if (deviceWidth > 768) {
    let prevNum = 0;
    const slideT = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[1];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
    const prevMargin = parseInt(slideT.style.marginLeft) || 0;
    // const shift = 20;
    // console.log(prevMargin);
    if (prevMargin < 0) {
        slideT.style.marginLeft = (prevMargin + shiftTeachers).toString() + "px";
        let radioNum = -prevMargin / shiftTeachers;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        prevNum = radioBgChangeColor(radio);
        if (prevMargin + shiftTeachers === 0) {
            const btn = document.getElementsByClassName('slider__button')[0];
            btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
            // console.log(btn, btn.style.backgroundImage);
        }
    }
    // }
}
const radioBgChangeColor = (el) => {
    let number = 0;
    const labels = document.getElementsByClassName('teachers__slider__navigation__label');
    for (let i = 0; i < labels.length; i++) {
        const label = labels[i];
        if (label.style.opacity === "1") {
            console.log('labels: ', label.id)
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
        console.log('prev', prevNumber, 'right');
        for (let i = 0; i < el.id[el.id.length - 1] - prevNumber; i++) {
            slideTeachersRight();
        }
    } else if (el.id[el.id.length - 1] < prevNumber) {
        for (let i = 0; i < prevNumber - el.id[el.id.length - 1]; i++) {
            slideTeachersLeft();
        }
    }
    console.log('id', el.id[el.id.length - 1]);
    // slideRadio();
}

const offsetExample = deviceWidth > 768 ? 0 : 170;
// const exampleLeftSide = deviceWidth > 768 ? 544 : 170;
const exampleLeftSide = deviceWidth > 768 ? 1632 : 170;
const exampleRightSide = deviceWidth > 768 ? -1632 : -2278;
// const exampleRightSide = deviceWidth > 768 ? 1632 : -2278;
const slideE = document.getElementsByClassName('example_1')[0];
if (deviceWidth > 768) {
    // slideE.style.marginLeft = "92px";
} else {
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
        // console.log(prevMargin, offsetExample);
        if (prevMargin > exampleRightSide) {
            slideE.style.marginLeft = (prevMargin - shift).toString() + "px";
            if (prevMargin - shift === exampleRightSide) {
                const btn = document.getElementsByClassName('slider__button')[3];
                btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
                // console.log(btn, btn.style.backgroundImage);
            }
        }
    }
}
// 0 2278 mobile
const slideExampleLeft = () => {
    if (deviceWidth > 768) {
        const slideE = document.getElementsByClassName('example_1')[0];
        const btn = document.getElementsByClassName('slider__button')[3];
        btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';
        const shift = 272 * 2;
        const prevMargin = parseInt(slideE.style.marginLeft) || offsetExample;
        // console.log(slideE.style.marginLeft);
        if (prevMargin < exampleLeftSide) {
            slideE.style.marginLeft = (prevMargin + shift).toString() + "px";
            console.log(slideE.style.marginLeft, 'ss', prevMargin, shift, prevMargin + shift);
            if (prevMargin + shift === exampleLeftSide) {
                const btn = document.getElementsByClassName('slider__button')[2];
                btn.style.backgroundImage = 'url(images/slider/arrow-left-disabled.svg)';
                // console.log(btn, btn.style.backgroundImage);
            }
        }
    }
}


const slideRadio = () => {
    const slideE = document.getElementsByClassName('teachers__slide_1')[0];
    const prevMargin = slideE.style.marginLeft;
    // console.log(prevMargin);
    // slideTeachersRight();
}


const showHideMenu = (el) => {
    const menu = document.querySelector('.menu-mobile');
    if (menu.classList.value === 'menu-mobile') {
        document.querySelector('.menu-mobile').classList.add('active');
        el.style.display = 'none';
        document.getElementsByClassName('header__burger')[1].style.display = 'inline';
        document.getElementsByClassName('header')[0].style.position = 'fixed';
        document.querySelector('.announce').style.marginTop = '124px';

    } else if (menu.classList.value === 'menu-mobile active') {
        hideMenu(el);
    }
}
const hideMenu = (el) => {
    console.log(el);
    document.querySelector('.menu-mobile').classList.remove('active');
    el.style.display = 'none';
    document.getElementsByClassName('header__burger')[0].style.display = 'inline';
    document.getElementsByClassName('header')[0].style.position = 'relative';
    document.querySelector('.announce').style.marginTop = '0';
}

const showHideNavList = (el) => {
    const ul = el.nextElementSibling;
    if ((ul.style.display === 'none') || (ul.style.display === '')) {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
}
const modalD = document.getElementById('modal-w__download');
const showDownloadWindow = () => {
    modalD.style.display = 'flex';
}
const modalC = document.getElementById('modal-w__city');

const showCityWindow = () => {
    if (deviceWidth > 768) {
        modalC.style.display = 'flex';

    } else {
        const burger = document.querySelector('#burger');
        showHideMenu(burger);
    }
}

const modalFL = document.getElementById('modal-w__free-lesson');

const showFLWindow = () => {
    modalFL.style.display = 'flex';
    hideMenu(document.querySelector('.header__cross'))
}



