

export let menuIcon = document.querySelector('#menu-icon')
  export let links = document.querySelector('.links')

 export function menuHamburguer() {
    menuIcon.classList.toggle('bx-x')
    links.classList.toggle('open')
  }

  window.onscroll=() => { // rolar scrol sair menu
    menuIcon.classList.remove('bx-x');
    links.classList.remove('open');

    menuIcon.addEventListener('click', menuHamburguer)
  }

  
  menuIcon.addEventListener('click', menuHamburguer, links)