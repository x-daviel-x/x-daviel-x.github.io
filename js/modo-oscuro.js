document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('cambiar-modo');

    // Verifica el modo actual almacenado en las cookies
    const cookies = document.cookie;
    const isModoOscuro = cookies.includes('modoOscuro=activado');

    // Aplica el modo actual
    setMode(isModoOscuro);

    // Escucha los clics en el botón para alternar modos
    toggleButton.addEventListener('click', () => {
        const currentMode = document.cookie.includes('modoOscuro=activado');
        setMode(!currentMode);
    });

    function setMode(estaOscuro) {
        if (estaOscuro) {
            document.body.classList.add('modo-oscuro');
            document.cookie = 'modoOscuro=activado; expires=Fri, 31 Dec 9999 23:59:59 GMT';
        } else {
            document.body.classList.remove('modo-oscuro');
            document.cookie = 'modoOscuro=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
    }
});
