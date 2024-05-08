const elements = [
    { 
        title: "Kimetsu no Yaiba", 
        subtitle: "Colección", 
        link: "../archivo/colecciones/kimetsu no yaiba/fr.html", 
        icon: "../archivo/colecciones/kimetsu no yaiba/icono.webp",
        keywords: ["koyoharu gotouge", "demon slayer", "鬼滅の刃"]
    },
    { 
        title: "Kimetsu no Yaiba", 
        subtitle: "Anime", 
        link: "../archivo/colecciones/kimetsu no yaiba/animes/kimetsu no yaiba/ft.html", 
        icon: "../archivo/colecciones/kimetsu no yaiba/animes/kimetsu no yaiba/icono.webp",
        keywords: ["koyoharu gotouge", "demon slayer", "鬼滅の刃"]
    },
    { 
        title: "El tren infinito", 
        subtitle: "Película de Kimetsu no Yaiba", 
        link: "../archivo/colecciones/kimetsu no yaiba/peliculas/mugen ressha-hen/ft.html", 
        icon: "../archivo/colecciones/kimetsu no yaiba/peliculas/mugen ressha-hen/poster.webp", 
        keywords: ["koyoharu gotouge", "demon slayer", "鬼滅の刃"]
    },
    { 
        title: "Afro Samurai", 
        subtitle: "Anime", 
        link: "../archivo/animes/afro samurai/ft.html", 
        icon: "../archivo/animes/afro samurai/icono.webp",
        keywords: ["afro samurai", "negro", "prieto"]
    },
    { 
        title: "Akira", 
        subtitle: "Película", 
        link: "../archivo/peliculas/akira/ft.html", 
        icon: "../archivo/peliculas/akira/poster.webp",
        keywords: ["akira", "pelicula", "acción"]
    },
];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

// Establece el valor por defecto en la barra de búsqueda y agrega la clase para la inclinación
searchInput.value = "";
searchInput.classList.add("tilted-text");

searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value.toLowerCase();
    const filteredElements = elements.filter((element) => {
        return (
            element.title.toLowerCase().includes(inputValue) || 
            element.subtitle.toLowerCase().includes(inputValue) || 
            element.keywords.some(keyword => keyword.includes(inputValue))
        );
    });

    resultsList.innerHTML = "";

    if (inputValue !== "") {
        if (filteredElements.length > 0) {
            filteredElements.forEach((element) => {
                const listItem = document.createElement("li");
                listItem.classList.add("result");

                listItem.addEventListener("click", function () {
                    window.location.href = element.link;
                    clearSearchResults();
                });

                const link = document.createElement("a");
                link.href = element.link;

                const image = document.createElement("img");
                image.src = element.icon;

                listItem.appendChild(image);

                const resultText = document.createElement("div");
                resultText.classList.add("result-text");

                resultText.innerHTML = `
                    <div class="title">${element.title}</div>
                    <div class="subtitle">${element.subtitle}</div>
                `;

                listItem.appendChild(resultText);
                resultsList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement("li");
            listItem.classList.add("result");
            
            const resultText = document.createElement("div");
            resultText.classList.add("result-text");
            resultText.innerHTML = `
                <div class="title">Esta opción no está disponible</div>
                <div class="subtitle">Intenta buscar otra producción</div>
            `;

            listItem.appendChild(resultText);
            resultsList.appendChild(listItem);
        }
    }
});

const clearButton = document.getElementById("btnInicio");
clearButton.addEventListener("click", function() {
    searchInput.value = "";
    resultsList.innerHTML = "";
});

const btnBusqueda = document.getElementById("btnBusqueda");
btnBusqueda.addEventListener("click", function() {
    toggleContent('Busqueda');
    searchInput.focus();
});

function clearSearchResults() {
    searchInput.value = "";
    resultsList.innerHTML = "";
}

resultsList.addEventListener("click", function(event) {
    if (event.target.classList.contains("result")) {
        clearSearchResults();
    }
});
