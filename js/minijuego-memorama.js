document.addEventListener('DOMContentLoaded', () => {
  const images = [
    '../../archivo/colecciones/dragon ball/icono.webp',
    '../../archivo/colecciones/evangelion/icono.webp',
    '../../archivo/colecciones/fullmetal alchemist/icono.webp',
    '../../archivo/colecciones/ghost in the shell/icono.webp',
    '../../archivo/colecciones/hunter x hunter/icono.webp',
    '../../archivo/colecciones/kimetsu no yaiba/icono.webp',
    '../../archivo/colecciones/los siete pecados capitales/icono.webp',
    '../../archivo/colecciones/my hero academia/icono.webp',
    '../../archivo/colecciones/naruto/icono.webp',
    '../../archivo/colecciones/one piece/icono.webp',
    '../../archivo/colecciones/pokemon/icono.webp',

    '../../archivo/animes/afro samurai/icono.webp',
    '../../archivo/animes/akame ga kill!/icono.webp',
    '../../archivo/animes/akatsuki no yona/icono.webp',
    '../../archivo/animes/anohana/icono.webp',
    '../../archivo/animes/assassination classroom/icono.webp',
    '../../archivo/animes/ataque a los titanes/icono.webp',
    '../../archivo/animes/baccano!/icono.webp',
    '../../archivo/animes/baki/icono.webp',
    '../../archivo/animes/bakugan battle brawlers/icono.webp',
    '../../archivo/animes/banana fish/icono.webp',
    '../../archivo/animes/beastars/icono.webp',
    '../../archivo/animes/berserk/icono.webp',
    '../../archivo/animes/black clover/icono.webp',
    '../../archivo/animes/cardcaptor sakura/icono.webp',
    '../../archivo/animes/cells at work!/icono.webp',
    '../../archivo/animes/chainsaw man/icono.webp',
    '../../archivo/animes/code geass/icono.webp',
    '../../archivo/animes/cowboy bebop/icono.webp',
    '../../archivo/animes/darling in the franxx/icono.webp',
    '../../archivo/animes/darwins game/icono.webp',
    '../../archivo/animes/death note/icono.webp',
    '../../archivo/animes/detective conan/icono.webp',
    '../../archivo/animes/diamond no ace/icono.webp',
    '../../archivo/animes/digimon adventure/icono.webp',
    '../../archivo/animes/dr. stone/icono.webp',
    '../../archivo/animes/espiritu de lucha/icono.webp',
    '../../archivo/animes/fairy tail/icono.webp',
    '../../archivo/animes/fire force/icono.webp',
  ];

  const cantidadMinima = 3;
  const cantidadMaxima = 5;
  const cantidadBanco = images.length;
  const cantidadAMostrar = Math.min(Math.max(getRandomNumber(cantidadMinima, cantidadMaxima) * 2, cantidadMinima * 2), cantidadBanco);
  const cards = getShuffledSubset(images, cantidadAMostrar);
  const duplicatedCards = [...cards, ...cards];

  const initialImagePath = 'fondo.webp';

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
