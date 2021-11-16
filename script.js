//Adicionando efeito de digitação no container nav
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  typeSpeed: 30
});

//Adicionando animações
const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 2000,
      reset: true
});

ScrollReveal().reveal('.post', { delay: 300 });