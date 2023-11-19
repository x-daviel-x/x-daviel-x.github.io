document.addEventListener('DOMContentLoaded', () => {
  const images = [
    '../../archivo/animes/afro samurai/icono.png',
    '../../archivo/animes/akame ga kill!/icono.png',
    '../../archivo/animes/akatsuki no yona/icono.png',
    '../../archivo/animes/anohana/icono.png',
    '../../archivo/animes/assassination classroom/icono.png',
    '../../archivo/animes/ataque a los titanes/icono.png',
    '../../archivo/animes/baccano!/icono.png',
    '../../archivo/animes/baki/icono.png',
    '../../archivo/animes/bakugan battle brawlers/icono.png',
    '../../archivo/animes/banana fish/icono.png',
    '../../archivo/animes/beastars/icono.png',
    '../../archivo/animes/berserk/icono.png',
    '../../archivo/animes/black clover/icono.png',
    '../../archivo/animes/cardcaptor sakura/icono.png',
    '../../archivo/animes/cells at work!/icono.png',
    '../../archivo/animes/chainsaw man/icono.png',
    '../../archivo/animes/code geass/icono.png',
    '../../archivo/animes/cowboy bebop/icono.png',
    '../../archivo/animes/darling in the franxx/icono.png',
    '../../archivo/animes/darwins game/icono.png',
    '../../archivo/animes/death note/icono.png',
    '../../archivo/animes/detective conan/icono.png',
    '../../archivo/animes/diamond no ace/icono.png',
    '../../archivo/animes/digimon adventure/icono.png',
    '../../archivo/animes/dr. stone/icono.png',
    '../../archivo/animes/espiritu de lucha/icono.png',
    '../../archivo/animes/fairy tail/icono.png',
    '../../archivo/animes/fire force/icono.png',
    // ... Agrega más rutas de imágenes según sea necesario
  ];


  const cantidadMinima = 3;
  const cantidadMaxima = 5;
  const cantidadBanco = images.length;
  const cantidadAMostrar = Math.min(Math.max(getRandomNumber(cantidadMinima, cantidadMaxima) * 2, cantidadMinima * 2), cantidadBanco);
  const cards = getShuffledSubset(images, cantidadAMostrar);
  const duplicatedCards = [...cards, ...cards];

  const initialImagePath = 'fondo.png';

  const memoryGame = document.querySelector('.memory-game');
  let flippedCards = [];
  let matchedCards = [];

  let timer; // Variable para almacenar el temporizador

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getShuffledSubset(array, subsetSize) {
    const shuffledArray = shuffle(array);
    return shuffledArray.slice(0, subsetSize);
  }

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function imgOnError(img) {
    img.src = errorImage;
  }

  function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
      this.classList.add('flipped');
      flippedCards.push(this);

      const img = this.querySelector('img');
      img.src = this.dataset.image;
      img.alt = '';

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.image === card2.dataset.image) {
      card1.classList.add('matched');
      card2.classList.add('matched');
      checkWin();
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.querySelector('img').src = initialImagePath;
        card2.querySelector('img').src = initialImagePath;
      }, 500);
    }

    flippedCards = [];
  }

  function checkWin() {
    const allCards = document.querySelectorAll('.card');
    matchedCards = document.querySelectorAll('.matched');

    if (matchedCards.length === allCards.length) {
      clearTimeout(timer); 
      showMessage('¡Ganaste!');
      correctSound.play(); // Reproduce el sonido de respuesta correcta
      document.getElementById("restartButton").style.display = "block"; // Muestra el botón de reinicio
    }
  }

  function showMessage(message) {
    const mensajeVictoriaElement = document.getElementById('mensajeVictoria');
    mensajeVictoriaElement.textContent = message;
    // Deshabilita los eventos de clic en las tarjetas para evitar la manipulación del juego.
    document.querySelectorAll('.card').forEach(card => card.removeEventListener('click', flipCard));
  }

  function createBoard() {
    const shuffledCards = shuffle(duplicatedCards);
    shuffledCards.forEach((image, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.image = image;
      cardElement.dataset.index = index;

      cardElement.addEventListener('click', flipCard);

      const img = document.createElement('img');
      img.src = initialImagePath;
      img.alt = 'Cover Image';

      img.addEventListener('error', () => {
        imgOnError(img);
      });

      cardElement.appendChild(img);

      memoryGame.appendChild(cardElement);
    });

    // Obtiene el elemento HTML para el temporizador
    const tiempoRestanteElement = document.getElementById('tiempoRestante');

    let tiempoRestante = 99;
    timer = setInterval(() => {
      document.getElementById('tiempoRestante').textContent = `⏱️: ${tiempoRestante} segundos`;

      if (tiempoRestante === 0) {
        clearInterval(timer);
        showMessage('¡Has perdido!');
        // Deshabilita los eventos de clic en las tarjetas después de mostrar el mensaje de pérdida.
        document.querySelectorAll('.card').forEach(card => card.removeEventListener('click', flipCard));
        incorrectSound.play(); // Reproduce el sonido de respuesta incorrecta
        document.getElementById("restartButton").style.display = "block"; // Muestra el botón de reinicio
      } else {
        tiempoRestante--;
      }
    }, 1000);
  }


  createBoard();
});
