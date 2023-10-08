// Obtén la URL de la página actual
const currentPage = window.location.pathname.split('/').pop();

// Obtén todos los elementos de la barra de navegación
const navLinks = document.querySelectorAll('.navbar a');

// Recorre los enlaces y agrega la clase "active" al enlace correcto
navLinks.forEach(link => {
    const linkHref = link.getAttribute('href').split('/').pop();
    if (linkHref === currentPage) {
        link.classList.add('active');
    }
});
