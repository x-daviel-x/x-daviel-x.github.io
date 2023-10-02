const elements = [
    { 
        title: "Demon Slayer", 
        subtitle: "Colección", 
        link: "../archivo/colecciones/demon slayer/fr.html", 
        icon: "../archivo/colecciones/demon slayer/icon.png",
        keywords: ["Koyoharu Gotouge", "colección", "鬼滅の刃"]
    },



    { 
        title: "Afro Samurai", 
        subtitle: "Anime", 
        link: "../archivo/animes/afro samurai/ft.html", 
        icon: "../archivo/animes/afro samurai/icon.png",
        keywords: ["afro samurai", ""]
    },
    { 
        title: "Demon Slayer", 
        subtitle: "Anime", 
        link: "../archivo/colecciones/demon slayer/animes/demon slayer/ft.html", 
        icon: "../archivo/colecciones/demon slayer/animes/demon slayer/icon.png",
        keywords: ["demon slayer", "鬼滅の刃"]
    },



    { 
        title: "Akira", 
        subtitle: "Película", 
        link: "../archivo/peliculas/akira/ft.html", 
        icon: "../archivo/peliculas/akira/poster.png",
        keywords: ["akira", "pelicula", ""]
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
        // Comprueba si el valor de búsqueda coincide con el título, el subtítulo o las palabras clave
        return (
            element.title.toLowerCase().includes(inputValue) || 
            element.subtitle.toLowerCase().includes(inputValue) || 
            element.keywords.some(keyword => keyword.includes(inputValue))
        );
    });

    resultsList.innerHTML = ""; // Limpia la lista de resultados

    if (inputValue !== "") {
        if (filteredElements.length > 0) {
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
                // Utiliza el campo 'icon' para construir la ruta de acceso a la imagen del icono
                image.src = element.icon;
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
        } else {
            // Si no se encontraron resultados, muestra un resultado especial
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