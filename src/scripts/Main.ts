// Fetching UI Elements
let openMenuButton = document.getElementById('openMenu') as HTMLElement;
let closeMenuButton = document.getElementById('closeMenu') as HTMLElement;
let menu = document.getElementById('menu') as HTMLUListElement;


let menuInteractions = () => {
    openMenuButton.classList.toggle('close');
    closeMenuButton.classList.toggle('close');

    if(menu.offsetHeight == 0){
        menu.style.height = '120px';
    } else {
        menu.style.height = '0px';
    }
}

openMenuButton.addEventListener('click', () => {
    menuInteractions();
})
closeMenuButton.addEventListener('click', () => {
    menuInteractions();
})