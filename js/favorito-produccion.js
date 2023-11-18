document.addEventListener('DOMContentLoaded', function () {
    const nombre = document.getElementById('nombre').textContent;
    const tipo = document.getElementById('tipo').textContent;
    const favoritoButton = document.getElementById('favoritoButton');
    const produccionURL = window.location.href; // Obtiene la URL actual

    // Obtener la fuente de la imagen
    const iconoElement = document.getElementById('icono');
    const icono = iconoElement.src;

    // Asignar la misma ruta al atributo data-src
    iconoElement.setAttribute('data-src', icono);

    // Función para manejar el botón de favoritos
    function toggleFavorito() {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const index = favoritos.findIndex(item => item.id === nombre);

        if (index === -1) {
            favoritos.push({ id: nombre, nombre: tipo, url: produccionURL, imagen: icono });
        } else {
            favoritos.splice(index, 1);
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        actualizarEstadoFavorito();
    }

    // Función para actualizar el estado del botón de favoritos
    function actualizarEstadoFavorito() {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        const esFavorito = favoritos.some(item => item.id === nombre);

        if (esFavorito) {
            favoritoButton.textContent = 'Quitar de Favoritos';
        } else {
            favoritoButton.textContent = 'Añadir a Favoritos';
        }
    }

    // Asigna la función al evento click del botón
    favoritoButton.addEventListener('click', toggleFavorito);

    // Actualiza el estado del botón al cargar la página
    actualizarEstadoFavorito();
});
