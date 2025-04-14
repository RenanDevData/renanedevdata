document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão com o ícone
    const botaoTema = document.querySelector('#theme-toggle');
    const icone = botaoTema.querySelector('i'); // Seleciona o elemento i dentro do botão
    
    // Adiciona evento de clique
    botaoTema.addEventListener('click', function() {
      // Alterna a classe no body (para mudar o tema)
      document.body.classList.toggle('light-theme');
      
      // Verifica e alterna os ícones do Font Awesome
      if (icone.classList.contains('fa-sun')) {
        // Muda para o ícone de lua
        icone.classList.remove('fa-sun');
        icone.classList.add('fa-moon');
      } else {
        // Muda para o ícone de sol
        icone.classList.remove('fa-moon');
        icone.classList.add('fa-sun');
      }
      
      // Salva a preferência do usuário
      const temaModo = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('tema', temaModo);
    });
    
    // Verifica se há uma preferência salva e aplica ao carregar a página
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'light') {
      document.body.classList.add('light-mode');
      icone.classList.remove('fa-sun');
      icone.classList.add('fa-moon');
    }
  });


