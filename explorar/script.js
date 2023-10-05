// script.js
document.addEventListener("DOMContentLoaded", function () {
    const barraInferior = document.getElementById("barra-inferior");

    const iconos = config.iconos;

    // Rutas siempre relativas al directorio raíz (Carpeta Principal)
    const rutas = {
        minijuegos: "minijuegos.html",
        explorar: "explorar.html",
        busqueda: "busqueda.html"
    };

    let barraHTML = "";

    for (const clave in iconos) {
        if (iconos.hasOwnProperty(clave)) {
            barraHTML += `<div class="icono"><a href="${rutas[clave]}">${iconos[clave]}</a></div>`;
        }
    }

    barraInferior.innerHTML = barraHTML;
});
