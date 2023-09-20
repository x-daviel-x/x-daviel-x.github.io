const elements = [
    { title: "Berserk", subtitle: "(Franquicia)", link: "../fichas/anime/afro_samurai/ft.html" },

    { title: "Afro Samurai", subtitle: "(Anime)", link: "../fichas/anime/afro_samurai/ft.html" },

    { title: "Akira", subtitle: "(Pelicula)", link: "../fichas/anime/afro_samurai/ft.html" },

];

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");
const noResultsText = document.getElementById("noResultsText");

searchInput.addEventListener("input", function() {
    const inputValue = searchInput.value.toLowerCase();
    const filteredElements = elements.filter(element =>
        element.title.toLowerCase().includes(inputValue) || element.subtitle.toLowerCase().includes(inputValue)
    );

    if (inputValue === "") {
        resultsList.innerHTML = "";
        noResultsText.style.display = "block";
    } else {
        resultsList.innerHTML = "";
        noResultsText.style.display = "none";
        filteredElements.forEach(element => {
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
