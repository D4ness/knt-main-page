const deviceWidthS = window.screen.width;

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
    if (deviceWidthS > 768) {
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



