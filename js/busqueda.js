const elements = [
    { title: "Afro Samurai", subtitle: "Anime", link: "../inicio/fichas/animes/afro samurai/ft.html" },
    { title: "Demon Slayer", subtitle: "Franquicia", link: "../inicio/fichas/franquicias/demon_slayer/fr.html" },
    { title: "Demon Slayer A", subtitle: "Anime", link: "../inicio/fichas/franquicias/demon_slayer/animes/demon slayer/ft.html" },
    { title: "Akira", subtitle: "Pelicula", link: "../inicio/fichas/peliculas/akira/ft.html" },
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");
const noResultsText = document.getElementById("noResultsText");

// Establece el valor por defecto en la barra de búsqueda y agrega la clase para la inclinación
searchInput.value = "";
searchInput.classList.add("tilted-text");

searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value.toLowerCase();
    const filteredElements = elements.filter((element) =>
        element.title.toLowerCase().includes(inputValue) || element.subtitle.toLowerCase().includes(inputValue)
    );

    resultsList.innerHTML = ""; // Limpia la lista de resultados

    if (inputValue === "") {
        noResultsText.style.display = "block";
    } else {
        noResultsText.style.display = "none";
        filteredElements.forEach((element) => {
            const listItem = document.createElement("li");
            listItem.classList.add("result");

            const link = document.createElement("a");
            link.href = element.link;

            // Crea una imagen
            const image = document.createElement("img");
            // Establece la ruta de la imagen basada en el título
            image.src = `${element.title}.png`;
            // Establece un atributo alt para la accesibilidad
            image.alt = element.title;

            // Agrega la imagen al resultado
            listItem.appendChild(image);

            // Crea un contenedor para el texto del resultado
            const resultText = document.createElement("div");
            resultText.classList.add("result-text");

            // Agrega el título y el subtítulo al contenedor de texto
            resultText.innerHTML = `
                <div class="title">${element.title}</div>
                <div class="subtitle">${element.subtitle}</div>
            `;

            // Agrega el contenedor de texto al enlace
            link.appendChild(resultText);

            // Agrega el enlace a la lista de resultados
            listItem.appendChild(link);

            resultsList.appendChild(listItem);
        });
    }
});