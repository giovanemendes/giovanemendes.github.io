document.addEventListener('DOMContentLoaded', function() {
    // Obtenha todas as imagens da seção hero
    const heroImages = document.querySelectorAll('.hero-image');

    // Inicialize o índice da imagem atual
    let currentIndex = 0;

    // Função para alternar as imagens com intervalo de tempo
    function changeHeroImage() {
        // Verifica se heroImages é uma NodeList válida e possui itens
        if (heroImages.length > 0) {
            // Remove a classe 'active' da imagem atual
            heroImages[currentIndex].classList.remove('active');

            // Atualiza o índice para a próxima imagem
            currentIndex = (currentIndex + 1) % heroImages.length;

            // Adiciona a classe 'active' à próxima imagem
            heroImages[currentIndex].classList.add('active');
        }
    }

    // Inicia a transição inicialmente
    changeHeroImage();

    // Configura o intervalo para alternar as imagens a cada 5 segundos (5000 milissegundos)
    setInterval(changeHeroImage, 5000); // Reduzi para 5000 para testar mais rapidamente
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
});

