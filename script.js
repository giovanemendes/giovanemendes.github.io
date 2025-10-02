document.getElementById('contato-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const mensagemSucesso = document.getElementById('mensagem-sucesso');
  mensagemSucesso.classList.add('show');
  
  setTimeout(function() {
    mensagemSucesso.classList.remove('show');
    document.getElementById('contato-form').reset();
  }, 4000);
});

// Smooth scroll para os links de navegação
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Smooth scroll para o botão "Conheça nossos serviços"
document.querySelector('.btn[href="#servicos"]').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#servicos');
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});
