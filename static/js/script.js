document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered');
    });
});

// Agregar evento para registrar clics en los enlaces
document.querySelectorAll('.container a').forEach((link) => {
    link.addEventListener('click', (event) => {
        console.log(`Se hizo clic en: ${link.querySelector('img').alt}`);
    });
});

// Animación para la carga de imágenes
document.querySelectorAll('.container a img').forEach((img) => {
    img.style.opacity = 0;
    img.addEventListener('load', () => {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = 1;
    });
});