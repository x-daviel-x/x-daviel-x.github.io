// MODO OSCURO
document.addEventListener('DOMContentLoaded', () => {
    const interruptorModo = document.getElementById('interruptor-modo');
    // Verificar y aplicar el modo oscuro al cargar
    setModoOscuro(localStorage.getItem('modoOscuro') === 'activado');

    // Establecer el estado inicial de los interruptores
    interruptorModo.checked = localStorage.getItem('modoOscuro') === 'activado';
    // Escuchar cambios en el interruptor de modo oscuro
    interruptorModo.addEventListener('change', () => {
        setModoOscuro(interruptorModo.checked);
    });

    function setModoOscuro(estaOscuro) {
        if (estaOscuro) {
            document.body.classList.add('modo-oscuro');
            localStorage.setItem('modoOscuro', 'activado');
        } else {
            document.body.classList.remove('modo-oscuro');
            localStorage.removeItem('modoOscuro');
        }
    }
});



// SONIDO DE LA APP
document.addEventListener('DOMContentLoaded', () => {
    const interruptorSonido = document.getElementById('interruptor-sonido');
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');

    // Verifica el estado actual almacenado en localStorage
    const isSonidoActivado = localStorage.getItem('sonidoActivado') === 'activado';

    // Aplica el estado actual
    setSonido(isSonidoActivado);

    // Establece el estado inicial del interruptor
    interruptorSonido.checked = isSonidoActivado;

    // Escucha los cambios en el interruptor para alternar modos
    if (interruptorSonido) {
        interruptorSonido.addEventListener('change', () => {
            setSonido(interruptorSonido.checked);
        });
    }

    function setSonido(estaActivado) {
        if (estaActivado) {
            correctSound.muted = false;
            incorrectSound.muted = false;
            localStorage.setItem('sonidoActivado', 'activado');
        } else {
            correctSound.muted = true;
            incorrectSound.muted = true;
            localStorage.removeItem('sonidoActivado');
        }
    }
});










// INTERRUPTORES DE PREFERENCIAS
// Función para obtener el valor del atributo "cd" del elemento con id "nombre"
function getPageCd() {
    var cdElement = document.getElementById('nombre');
    if (cdElement) {
        return cdElement.getAttribute('cd');
    }
    return null;
}

// Función para obtener la clave única para localStorage usando el valor de "cd"
function getLocalStorageKey() {
    var cd = getPageCd();
    if (cd) {
        return 'preferencia_' + cd;
    }
    return null;
}

// Función para obtener la preferencia almacenada en localStorage
function getStoredPreference() {
    var localStorageKey = getLocalStorageKey();
    if (localStorageKey) {
        return localStorage.getItem(localStorageKey);
    }
    return null;
}

// Función para guardar la preferencia del usuario en localStorage
function savePreference(selectedContent) {
    var localStorageKey = getLocalStorageKey();
    if (localStorageKey) {
        localStorage.setItem(localStorageKey, selectedContent);
    }
}

// Función para aplicar la preferencia guardada al cargar la página
function applyStoredPreference() {
    var storedPreference = getStoredPreference();
    if (storedPreference) {
        toggleContent(storedPreference);
        updateSwitchStyles(storedPreference);
    }
}

// Guardar la preferencia solo para los interruptores "COLECCIONES, ANIMES & PELÍCULAS" y "ANIMES & PELÍCULAS"
function toggleContent(selectedContent) {
    var coleccionesSection = document.getElementById('coleccionesSection');
    var animesSection = document.getElementById('animesSection');
    var peliculasSection = document.getElementById('peliculasSection');
    var fichaTecnicaSection = document.getElementById('fichaTecnicaSection');
    var datosCuriososSection = document.getElementById('datosCuriososSection');
    var aniSection = document.getElementById('aniSection');
    var peliSection = document.getElementById('peliSection');
    var inicioSection = document.getElementById('inicioSection');
    var busquedaSection = document.getElementById('busquedaSection');

    if (selectedContent === 'colecciones') {
        coleccionesSection.style.display = 'block';
        animesSection.style.display = 'none';
        peliculasSection.style.display = 'none';
    } else if (selectedContent === 'animes') {
        coleccionesSection.style.display = 'none';
        animesSection.style.display = 'block';
        peliculasSection.style.display = 'none';
    } else if (selectedContent === 'peliculas') {
        coleccionesSection.style.display = 'none';
        animesSection.style.display = 'none';
        peliculasSection.style.display = 'block';
    } else if (selectedContent === 'Ani') {
        aniSection.style.display = 'block';
        peliSection.style.display = 'none';
    } else if (selectedContent === 'Peli') {
        aniSection.style.display = 'none';
        peliSection.style.display = 'block';
    } else if (selectedContent === 'fichaTecnica') {
        fichaTecnicaSection.style.display = 'block';
        datosCuriososSection.style.display = 'none';
    } else if (selectedContent === 'datosCuriosos') {
        fichaTecnicaSection.style.display = 'none';
        datosCuriososSection.style.display = 'block';
    } else if (selectedContent === 'Inicio') {
        inicioSection.style.display = 'block';
        busquedaSection.style.display = 'none';
    } else if (selectedContent === 'Busqueda') {
        inicioSection.style.display = 'none';
        busquedaSection.style.display = 'block';
    }

    // Guardar la preferencia del usuario solo para los interruptores "COLECCIONES, ANIMES & PELÍCULAS" y "ANIMES & PELÍCULAS"
    if (selectedContent === 'colecciones' || selectedContent === 'animes' || selectedContent === 'peliculas' ||
        selectedContent === 'Ani' || selectedContent === 'Peli') {
        savePreference(selectedContent);
    }
}

// Función para actualizar los estilos de los interruptores
function updateSwitchStyles(selectedContent) {
    var btnColecciones = document.getElementById('btnColecciones');
    var btnAnimes = document.getElementById('btnAnimes');
    var btnPeliculas = document.getElementById('btnPeliculas');
    var btnAni = document.getElementById('btnAni');
    var btnPeli = document.getElementById('btnPeli');

    if (selectedContent === 'colecciones' || selectedContent === 'animes' || selectedContent === 'peliculas') {
        btnColecciones.checked = selectedContent === 'colecciones';
        btnAnimes.checked = selectedContent === 'animes';
        btnPeliculas.checked = selectedContent === 'peliculas';
    } else if (selectedContent === 'Ani' || selectedContent === 'Peli') {
        btnAni.checked = selectedContent === 'Ani';
        btnPeli.checked = selectedContent === 'Peli';
    }
}

// Aplicar la preferencia guardada al cargar la página
applyStoredPreference();