// ELEMENTO FAVORITO
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
     const claseIcono = esFavorito ? 'fa-solid fa-bookmark fa-beat' : 'fa-regular fa-bookmark';

        favoritoButton.innerHTML = `<i class="${claseIcono}"></i>`;
    }




    // Asigna la función al evento click del botón
    favoritoButton.addEventListener('click', toggleFavorito);

    // Actualiza el estado del botón al cargar la página
    actualizarEstadoFavorito();
});



// LISTA DE FAVORITOS
document.addEventListener('DOMContentLoaded', function () {
    const favoritosLista = document.getElementById('favoritosLista');

    // Obtiene la lista de favoritos desde el almacenamiento local
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Llena dinámicamente la lista de favoritos
    favoritos.forEach(item => {
        // Crear contenedor principal
        const listItem = document.createElement('div');
        listItem.classList.add('seccion-favorito');

        // Crear elemento de imagen con estilo personalizado
        const imagen = document.createElement('img');
        imagen.classList.add('estilo-imagen'); // Agregar clase de estilo personalizado
        imagen.src = item.imagen; // Utilizar la ruta directa proporcionada por el objeto favorito
        imagen.alt = 'Imagen de la Producción';

        // Crear contenedor para la información (nombre, ID, etc.)
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-container');

        // Crear elemento para mostrar el ID de la producción con estilos aplicados
        const idElement = document.createElement('div');
        idElement.classList.add('h8'); // Agregar clase de estilo personalizado
        idElement.textContent = `${item.id}`;
        infoContainer.appendChild(idElement);

        // Crear elemento para mostrar el Nombre de la producción con estilos aplicados
        const nombreElement = document.createElement('div');
        nombreElement.classList.add('h9', 'estilo-nombre'); // Agregar clase de estilo personalizado
        nombreElement.textContent = `${item.nombre}`;
        infoContainer.appendChild(nombreElement);

        // Agregar la información al contenedor principal
        listItem.appendChild(imagen);
        listItem.appendChild(infoContainer);

        // Crear enlace para redirigir al HTML correspondiente
        const enlace = document.createElement('a');
        enlace.href = item.url; // Utilizar la URL almacenada en el objeto favorito
        enlace.appendChild(listItem);
        favoritosLista.appendChild(enlace);
    });
});
