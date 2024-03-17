// INTERRUPTOR DE MODO OSCURO
document.addEventListener('DOMContentLoaded', () => {
  const interruptorModo = document.getElementById('interruptor-modo');

  // Verifica el modo actual almacenado en localStorage
  const isModoOscuro = localStorage.getItem('modoOscuro') === 'activado';

  // Aplica el modo actual
  setMode(isModoOscuro);

  // Establece el estado inicial del interruptor
  interruptorModo.checked = isModoOscuro;

  // Escucha los cambios en el interruptor para alternar modos
  if (interruptorModo) {
      interruptorModo.addEventListener('change', () => {
          setMode(interruptorModo.checked);
      });
  }

  function setMode(estaOscuro) {
      if (estaOscuro) {
          document.body.classList.add('modo-oscuro');
          localStorage.setItem('modoOscuro', 'activado');
      } else {
          document.body.classList.remove('modo-oscuro');
          localStorage.removeItem('modoOscuro');
      }

      // No es necesario llamar a updateToggleButton aquí ya que el estado del interruptor refleja el modo actual
  }
});


// INTERRUPTOR DE SONIDO DE LA APP
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