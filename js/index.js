const popup = document.querySelector('.menu__btn');
const list = document.querySelector('.menu__list');

popup.onclick = function () {
    list.classList.toggle('menu__list-active')
}
console.log(popup);