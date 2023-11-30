// REDIRECCION
// Esta función se ejecutará cuando el usuario haga clic en el botón de retroceso
function redirigir() {
    // Cambia la URL a la página específica a la que deseas redirigir
    history.pushState(null, null, "https://google.com");
}

// Esta función se ejecutará cuando la página se cargue
document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento al botón de retroceso
    window.addEventListener("popstate", redirigir);
});