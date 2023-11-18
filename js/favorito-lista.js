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
