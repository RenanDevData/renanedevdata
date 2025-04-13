
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de menu e o menu
    const menuBtn = document.querySelector('.menu-mobile-btn');
    const menuLinks = document.querySelector('nav ul:last-child');
    
    // Toggle do menu quando o botão é clicado
    menuBtn.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
    });
    
    // Fecha o menu quando um link é clicado
    const navLinks = menuLinks.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.classList.remove('active');
        });
    });
    
    // Fecha o menu quando clicar fora dele
    document.addEventListener('click', function(e) {
        if (!menuLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            menuLinks.classList.remove('active');
        }
    });
});


