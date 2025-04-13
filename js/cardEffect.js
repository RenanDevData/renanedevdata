// Adicione este código JavaScript ao seu site, pode ser antes do fechamento da tag </body>

document.addEventListener('DOMContentLoaded', function() {
  // Seleciona os elementos necessários
  const imageContainer = document.querySelector('.image-container');
  const image = document.querySelector('.imgPerfil');
  
  if (!imageContainer || !image) return;
  
  // Configurando os estilos iniciais via JavaScript
  imageContainer.style.position = 'relative';
  imageContainer.style.borderRadius = '20px';
  imageContainer.style.overflow = 'hidden';
  imageContainer.style.width = '100%'
  imageContainer.style.height = '100%'
  imageContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  imageContainer.style.transition = 'box-shadow 0.3s ease';
  imageContainer.style.transformStyle = 'preserve-3d';
  
  image.style.transition = 'transform 0.2s ease';
  image.style.transformStyle = 'preserve-3d';
  
  // Adicionando efeito de brilho
  const glowEffect = document.createElement('div');
  glowEffect.style.position = 'absolute';
  glowEffect.style.top = '0';
  glowEffect.style.left = '0';
  glowEffect.style.right = '0';
  glowEffect.style.bottom = '0';
  glowEffect.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)';
  glowEffect.style.zIndex = '5';
  glowEffect.style.opacity = '0';
  glowEffect.style.transition = 'opacity 0.3s ease';
  glowEffect.style.borderRadius = '20px';
  imageContainer.appendChild(glowEffect);
  
  // Adicionando perspectiva ao elemento pai
  const sobreSection = document.querySelector('.sobre');
  if (sobreSection) {
      sobreSection.style.perspective = '1000px';
  }
  
  // Função para lidar com o movimento do mouse
  function handleMouseMove(e) {
      const rect = imageContainer.getBoundingClientRect();
      
      // Calcula o centro do elemento
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calcula a distância do mouse ao centro
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Distância máxima para o efeito
      const threshold = 300;
      
      // Verifica se o mouse está próximo o suficiente para aplicar o efeito
      const distanceX = Math.abs(mouseX - centerX);
      const distanceY = Math.abs(mouseY - centerY);
      
      if (distanceX < threshold && distanceY < threshold) {
          // Calcula a distância normalizada (-1 a 1)
          const normX = (mouseX - centerX) / threshold;
          const normY = (mouseY - centerY) / threshold;
          
          // Aplica a rotação (máximo 15 graus)
          const rotateY = normX * 15;
          const rotateX = -normY * 15; // Invertido para movimento natural
          
          // Aplica transformações
          imageContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          
          // Adiciona sombra dinâmica
          imageContainer.style.boxShadow = `${-rotateY/2}px ${-rotateX/2}px 30px rgba(0, 0, 0, 0.5)`;
          
          // Move também a imagem para efeito de paralaxe mais profundo
          const moveX = normX * 10;
          const moveY = normY * 10;
          image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
          
          // Mostra o efeito de brilho
          glowEffect.style.opacity = '1';
      }
  }
  
  // Resetar posição quando mouse sai
  function resetPosition() {
      imageContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
      imageContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
      image.style.transform = 'translate(0px, 0px) scale(1)';
      glowEffect.style.opacity = '0';
  }
  
  // Adicionar eventos para o efeito
  document.addEventListener('mousemove', handleMouseMove);
  imageContainer.addEventListener('mouseleave', resetPosition);
});