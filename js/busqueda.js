const elements = [
    { title: "Berserk", subtitle: "(Franquicia)", link: "../inicio/fichas/franquicias/berserk/fr.html" },
    { title: "Afro Samurai", subtitle: "(Anime)", link: "../inicio/fichas/animes/afro samurai/ft.html" },
    { title: "Akira", subtitle: "(Pelicula)", link: "../inicio/fichas/peliculas/akira/ft.html" },
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
            link.innerHTML = `
                <div class="title">${element.title}</div>
                <div class="subtitle">${element.subtitle}</div>
            `;

            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        });
    }
});
