const chooseActiveTab = (tab) => {
    document.querySelectorAll('.tabs__nav-btn--active').forEach((item) => item.classList.remove('tabs__nav-btn--active'));
    document.querySelectorAll('.tabs__column').forEach((item) => item.classList.add('hidden'));
    document.querySelectorAll('.tabs__image').forEach((item) => item.classList.add('hidden'));

    const id = tab.getAttribute('id');

    tab.classList.add('tabs__nav-btn--active');
    document.querySelector('#C' + id).classList.remove('hidden');
    document.querySelector('#i' + id).classList.remove('hidden');
}

const changeMenuState = (btn) => {
    const menu = document.querySelector('.nav-bar__menu');
    const links = document.querySelectorAll('.link');
    let isActive = btn.style.backgroundImage.toString();

    if(isActive == 'url("images/header/close.svg")'){
        btn.style.backgroundImage = "url('images/header/menu.svg')";
        menu.style.display = 'none';
        links.forEach((item) => item.style.display = 'none');
        return;
    }

    btn.style.backgroundImage = 'url("images/header/close.svg")';
    menu.style.display = 'flex';
    links.forEach((item) => item.style.display = "block");
}

let item = document.querySelector('.customers__item');
let move = item.offsetWidth;
const itemContainer = document.querySelector('.customers__list');
itemContainer.style.transform = `trasnlateX:${move}px`;