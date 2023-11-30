// MODO OSCURO
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('cambiar-modo');

  // Verifica el modo actual almacenado en las cookies
  const cookies = document.cookie;
  const isModoOscuro = cookies.includes('modoOscuro=activado');

  // Aplica el modo actual
  setMode(isModoOscuro);

  // Escucha los clics en el botón para alternar modos
  if (toggleButton) {
      toggleButton.addEventListener('click', () => {
          const currentMode = document.cookie.includes('modoOscuro=activado');
          setMode(!currentMode);
          updateToggleButton(currentMode); // Llama a esta función para actualizar el texto del botón
      });
  }

  function setMode(estaOscuro) {
      if (estaOscuro) {
          document.body.classList.add('modo-oscuro');
          document.cookie = 'modoOscuro=activado; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'; // Path establecido en la raíz
      } else {
          document.body.classList.remove('modo-oscuro');
          document.cookie = 'modoOscuro=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // Path establecido en la raíz
      }
  }

  // Función para actualizar el texto del botón
  function updateToggleButton(isModoOscuro) {
      const toggleButton = document.getElementById('cambiar-modo');
      if (toggleButton) {
          if (isModoOscuro) {
              toggleButton.textContent = 'Activar';
          } else {
              toggleButton.textContent = 'Desactivar';
          }
      }
  }
});



// SONIDO DE LA APP
document.addEventListener('DOMContentLoaded', () => {
    const muteButton = document.getElementById('muteButton');
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');
  
    // Verifica si el usuario ha configurado previamente el sonido en una cookie
    const soundEnabled = getCookie('soundEnabled');
  
    if (soundEnabled === undefined || soundEnabled === 'true') {
      // Habilita el sonido por defecto si no hay configuración previa
      correctSound.muted = false;
      incorrectSound.muted = false;
      muteButton.textContent = 'Silenciar';
    } else {
      // Desactiva el sonido por defecto si la configuración indica que esté desactivado
      correctSound.muted = true;
      incorrectSound.muted = true;
      muteButton.textContent = 'Activar';
    }
  
    muteButton.addEventListener('click', () => {
      if (correctSound.muted) {
        // Activa el sonido y almacena la configuración en una cookie
        correctSound.muted = false;
        incorrectSound.muted = false;
        muteButton.textContent = 'Silenciar';
        setCookie('soundEnabled', 'true', 365); // 365 días de expiración
      } else {
        // Desactiva el sonido y almacena la configuración en una cookie
        correctSound.muted = true;
        incorrectSound.muted = true;
        muteButton.textContent = 'Activar';
        setCookie('soundEnabled', 'false', 365); // 365 días de expiración
      }
    });
  });
  
  // Función para obtener el valor de una cookie
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  
  // Función para establecer una cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }  


  
// ENVÍO DE NOTIFICACIONES