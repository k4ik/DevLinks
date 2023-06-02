function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');

  if(html.classList.contains('light')){
    img.setAttribute('src', './assets/images/avatar-light.png');
    img.setAttribute('alt', 'mayk sorrindo, usando jaqueta e óculos escuros, com fundo roxo e azul claro');
  } else {
    img.setAttribute('src', './assets/images/avatar.png');
  }
};

