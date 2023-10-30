// Obtén elementos necesarios
const agregarFavoritoButtons = document.querySelectorAll('#agregarFavorito');
const favoritosList = document.getElementById('favoritosList');

// Agregar evento de clic a los botones "Agregar a Favoritos"
agregarFavoritoButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const elemento = {
            nombre: `Elemento ${index + 1}`,
            descripcion: `Descripción del Elemento ${index + 1}`,
        };

        // Obtén la lista actual de favoritos desde el almacenamiento local
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

        // Agrega el elemento a la lista de favoritos
        favoritos.push(elemento);

        // Guarda la lista actualizada en el almacenamiento local
        localStorage.setItem('favoritos', JSON.stringify(favoritos));

        alert('Agregado a Favoritos');
    });
});

// Cargar y mostrar elementos favoritos en la página de Favoritos
const mostrarFavoritos = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length === 0) {
        favoritosList.innerHTML = '<li>No hay elementos en Favoritos.</li>';
    } else {
        favoritosList.innerHTML = favoritos.map((elemento) =>
            `<li>${elemento.nombre}: ${elemento.descripcion}</li>`
        ).join('');
    }
};

mostrarFavoritos();
