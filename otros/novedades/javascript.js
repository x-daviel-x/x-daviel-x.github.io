// Obtener referencias a elementos HTML
const images = document.querySelectorAll('.noticia');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const closeBtn = document.getElementById('close');

// Asignar un texto personalizado a cada noticia
const noticias = [
    'Texto personalizado para Noticia 1.',
    'Texto personalizado para Noticia 2.',
    'Texto personalizado para Noticia 3asdkjjjjjjjjjjjjjjjjjjjjjjjjjjjj sakjdfdskjfkdsjf  fksjdfksdjfkjdskjfsd sdfkdskjfkdsfjkdsf fksdjfdsjfksd sdkfjdskjfkdsjf kjfksdjfkjdsf ksjfksdjfksjf skjfksdjfks.',
    'Texto personalizado para Noticia 4.',
    'Texto personalizado para Noticia 5.',
    'Texto personalizado para Noticia 6.'
];

// Agregar clic a las imágenes para mostrar el pop-up
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        popup.style.display = 'block';
        popupText.textContent = noticias[index];
    });
});

// Cerrar el pop-up cuando se hace clic en el botón de cierre
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
