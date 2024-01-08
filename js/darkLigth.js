export function toggleDarkLigth() {
  let darkMode = document.querySelector('#darkMode');
  let body = document.body; // chamar uma tag html direto

  if (darkMode.classList.contains('bx-moon')) {
    darkMode.classList.replace('bx-moon', 'bx-sun');

    document.body.classList.add('color'); // adicionando a class color na tag body
  } else {
    darkMode.classList.replace('bx-sun', 'bx-moon');
    {
      //removendo a classe do body
      document.body.classList.remove('color');
    }
  }
}

darkMode.addEventListener('click', toggleDarkLigth);
