const chooseActiveTab = (tab) => {
    document.querySelectorAll('.tabs__nav-btn--active').forEach((item) => item.classList.remove('tabs__nav-btn--active'));
    document.querySelectorAll('.tabs__column').forEach((item) => item.classList.add('hidden'));
    document.querySelectorAll('.tabs__image').forEach((item) => item.classList.add('hidden'));

    const id = tab.getAttribute('id');

    tab.classList.add('tabs__nav-btn--active');
    document.querySelector('#C' + id).classList.remove('hidden');
    document.querySelector('#i' + id).classList.remove('hidden');
}