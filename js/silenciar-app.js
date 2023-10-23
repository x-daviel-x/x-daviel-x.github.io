document.addEventListener('DOMContentLoaded', () => {
  const muteButton = document.getElementById('muteButton');
  const correctSound = document.getElementById('correctSound');
  const incorrectSound = document.getElementById('incorrectSound');

  // Verifica si el usuario ha configurado previamente el sonido en una cookie
  const soundEnabled = Cookies.get('soundEnabled');
  
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
          Cookies.set('soundEnabled', 'true', { expires: 365, path: '/' });
      } else {
          // Desactiva el sonido y almacena la configuración en una cookie
          correctSound.muted = true;
          incorrectSound.muted = true;
          muteButton.textContent = 'Activar Sonido';
          Cookies.set('soundEnabled', 'false', { expires: 365, path: '/' });
      }
  });
});
