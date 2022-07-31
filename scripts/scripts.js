const slideTeachersRight = () => {
    const slide = document.getElementsByClassName('teachers__slide_1')[0];
    const btn = document.getElementsByClassName('slider__button')[0];
    btn.style.backgroundImage = 'url(images/slider/arrow-left.svg)';

    const prevMargin = parseInt(slide.style.marginLeft) || 0;
    if (prevMargin > (-80)) {
        slide.style.marginLeft = (prevMargin - 20).toString() + "%";
        let radioNum = -prevMargin / 20 + 2;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        radioBgChange(radio);
        if (prevMargin - 20 === -80) {
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

    if (prevMargin < (0)) {
        slide.style.marginLeft = (prevMargin + 20).toString() + "%";
        let radioNum = -prevMargin / 20;
        const radio = document.getElementById('slider__label' + radioNum.toString())
        radioBgChange(radio);
        if (prevMargin + 20 === 0) {
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