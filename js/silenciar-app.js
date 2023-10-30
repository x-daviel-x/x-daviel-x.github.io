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
    muteButton.textContent = 'Activar Sonido';
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
      muteButton.textContent = 'Activar Sonido';
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
