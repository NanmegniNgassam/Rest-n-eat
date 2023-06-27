"use strict";
// Fetching UI Elements
let openMenuButton = document.getElementById('openMenu');
let closeMenuButton = document.getElementById('closeMenu');
let menu = document.getElementById('menu');
let navBar = document.getElementById('navigation');
let menuInteractions = () => {
    openMenuButton.classList.toggle('close');
    closeMenuButton.classList.toggle('close');
    if (menu.offsetHeight == 0) {
        menu.style.height = '120px';
    }
    else {
        menu.style.height = '0px';
    }
};
openMenuButton.addEventListener('click', () => {
    menuInteractions();
});
closeMenuButton.addEventListener('click', () => {
    menuInteractions();
});
window.addEventListener('scroll', () => {
    navBar.classList.toggle('sticky', (window.scrollY > 0));
});
