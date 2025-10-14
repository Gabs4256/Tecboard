const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Definir os caminhos das duas imagens
const darkModeIcon = "./Assets/Modos branco.png";
const lightModeIcon = "./Assets/Modos preto.png"; // ou o nome correto

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Trocar a imagem baseado no tema
    if (body.classList.contains('light-theme')) {
        themeIcon.src = lightModeIcon;
    } else {
        themeIcon.src = darkModeIcon;
    }
});
