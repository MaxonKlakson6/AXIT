const chooseActiveTab = (tab) => {
    document.querySelectorAll('.tabs__nav-btn--active').forEach((item) => item.classList.remove('tabs__nav-btn--active'));
    document.querySelectorAll('.tabs__column').forEach((item) => item.classList.add('hidden'));
    document.querySelectorAll('.tabs__image').forEach((item) => item.classList.add('hidden'));

    const id = tab.getAttribute('id');

    tab.classList.add('tabs__nav-btn--active');
    document.querySelector(`#C${id}`).classList.remove('hidden');
    document.querySelector(`#i${id}`).classList.remove('hidden');
}

const changeMenuState = (btn) => {
    const menu = document.querySelector('.nav-bar__menu');
    const links = document.querySelectorAll('.link');
    let isActive = btn.classList.contains('menu__is-active');

    if(isActive){
        btn.classList.remove('menu__is-active');
        menu.style.display = 'none';
        links.forEach((item) => item.style.display = 'none');
        return;
    }

    btn.classList.add('menu__is-active');
    menu.style.display = 'flex';
    links.forEach((item) => item.style.display = "block");
}

let position = -288;
const current = document.querySelector('.slider');
const item = document.querySelector('.customers__item');
const move = item.offsetWidth;
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');

const next = () =>{
    position -= move;

    setPosition();
    isEnded();
}

const prev = () =>{
    position += move;

    setPosition();
    isEnded();
}

const setPosition = () => {
    current.style.transform = `translateX(${position}px)`;
    activeDot();
}

const isEnded = () =>{
    console.log()
    btnPrev.disabled = position >= 0;
    btnNext.disabled = position <= -576;
}

const activeDot = () => {
    const dots = document.querySelectorAll('.slider__button');
    dots.forEach((item) => {item.classList.remove('slider__button-active')})
    switch (position){
        case 0:
            dots[0].classList.add('slider__button-active');
            break;
        case -288:
            dots[1].classList.add('slider__button-active');
            break;
        case -576:
            dots[2].classList.add('slider__button-active');
            break;
    }
}