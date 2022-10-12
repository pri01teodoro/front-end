const menu = document.querySelector('#menu');
const menuIcon = document.querySelector('#menu-icon');

function showMenu(){
    menu.classList.toggle('show') /* lista de classes que o menu tem (classList); o add adiciona a classe showMenu dentro de menu */
    changeMenuIcon();
}

menuIcon.addEventListener('click', showMenu);

function changeMenuIcon() {
    if (menu.classList.contains('show')) {
        menuIcon.src = 'assets/imgs/iconCloseMenu.svg';
        menuIcon.title = 'Fechar menu';
    } else {
        menuIcon.src = 'assets/imgs/iconMenu.svg';
        menuIcon.title = 'Mostrar menu';
    }
}