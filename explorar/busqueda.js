const elements = [
    { title: "Afro Samurai", subtitle: "Anime", link: "../inicio/fichas/animes/afro samurai/ft.html" },
    { title: "Demon Slayer", subtitle: "Franquicia", link: "../inicio/fichas/franquicias/demon_slayer/fr.html" },
    { title: "Demon Slayer A", subtitle: "Anime", link: "../inicio/fichas/franquicias/demon_slayer/animes/demon slayer/ft.html" },
    { title: "Akira", subtitle: "Pelicula", link: "../inicio/fichas/peliculas/akira/ft.html" },
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

// Establece el valor por defecto en la barra de búsqueda y agrega la clase para la inclinación
searchInput.value = "";
searchInput.classList.add("tilted-text");

searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value.toLowerCase();
    const filteredElements = elements.filter((element) =>
        element.title.toLowerCase().includes(inputValue) || element.subtitle.toLowerCase().includes(inputValue)
    );

    resultsList.innerHTML = ""; // Limpia la lista de resultados

    if (inputValue !== "") {
        filteredElements.forEach((element) => {
            const listItem = document.createElement("li");
            listItem.classList.add("result");

            // Agrega un evento de clic al elemento de resultado (listItem)
            listItem.addEventListener("click", function () {
                // Redirige al usuario a la página correspondiente al hacer clic en el resultado
                window.location.href = element.link;
            });

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

            // Agrega el título y el subtítulo al resultado
            const resultText = document.createElement("div");
            resultText.classList.add("result-text");

            // Agrega el título y el subtítulo al contenedor de texto
            resultText.innerHTML = `
                <div class="title">${element.title}</div>
                <div class="subtitle">${element.subtitle}</div>
            `;

            // Agrega el contenedor de texto al resultado
            listItem.appendChild(resultText);

            // Agrega el resultado a la lista de resultados
            resultsList.appendChild(listItem);
        });
    }
});
