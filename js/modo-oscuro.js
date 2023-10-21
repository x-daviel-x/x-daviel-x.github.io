document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('cambiar-modo');

    // Verifica el modo actual almacenado en una cookie
    const isModoOscuro = getCookie('modoOscuro') === 'activado';

    // Aplica el modo actual
    setMode(isModoOscuro);

    // Escucha los clics en el botón para alternar modos
    toggleButton.addEventListener('click', () => {
        const currentMode = getCookie('modoOscuro');
        if (currentMode === 'activado') {
            setMode(false);
        } else {
            setMode(true);
        }
    });

    function setMode(estaOscuro) {
        if (estaOscuro) {
            document.body.classList.add('modo-oscuro');
            setCookie('modoOscuro', 'activado', 365); // Establece una cookie con una duración de 365 días
        } else {
            document.body.classList.remove('modo-oscuro');
            deleteCookie('modoOscuro');
        }
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // Función para eliminar una cookie
    function deleteCookie(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
});
