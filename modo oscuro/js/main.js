document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('cambiar-modo');

    // Verifica el modo actual almacenado en el localStorage
    const isModoOscuro = localStorage.getItem('modoOscuro') === 'activado';

    // Aplica el modo actual
    setMode(isModoOscuro);

    // Escucha los clics en el botón para alternar modos
    toggleButton.addEventListener('click', () => {
        const currentMode = localStorage.getItem('modoOscuro');
        if (currentMode === 'activado') {
            setMode(false);
        } else {
            setMode(true);
        }
    });
    
    function setMode(estaOscuro) {
        if (estaOscuro) {
            document.body.classList.add('modo-oscuro');
            localStorage.setItem('modoOscuro', 'activado');
        } else {
            document.body.classList.remove('modo-oscuro');
            localStorage.setItem('modoOscuro', null);
        }
    }
});