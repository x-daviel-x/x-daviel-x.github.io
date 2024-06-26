document.addEventListener('DOMContentLoaded', function() {
  const board = document.getElementById('tic-tac-toe-board');
  const resultDisplay = document.getElementById('result');
  const resetButton = document.getElementById('reset-button');
  const characterMessage = document.getElementById('character-message');
  const characterImage = document.getElementById('character-image');
  
  let machinePlaying = false; // Variable de estado para controlar si la máquina está jugando

  // NARUTO UZUMAKI
  const narutoTurnSounds = [
    new Audio('naruto/naruto-turno-1.mp3'),
    new Audio('naruto/naruto-turno-2.mp3'),
    new Audio('naruto/naruto-turno-3.mp3'),
  ];
  const narutoWinSounds = [
    new Audio('naruto/naruto-victoria-1.mp3'),
  ];
  const narutoLoseSounds = [
    new Audio('naruto/naruto-derrota-1.mp3'),
  ];

  // SASUKE UCHIHA
  const sasukeTurnSounds = [
    new Audio('sasuke/sasuke-turno-1.mp3'),
    new Audio('sasuke/sasuke-turno-2.mp3'),
    new Audio('sasuke/sasuke-turno-3.mp3'),
  ];
  const sasukeWinSounds = [
    new Audio('sasuke/sasuke-victoria-1.mp3'),
    new Audio('sasuke/sasuke-victoria-2.mp3'),
  ];
  const sasukeLoseSounds = [
    new Audio('sasuke/sasuke-derrota-1.mp3'),
  ];

  // SON GOKU
  const gokuTurnSounds = [
    new Audio('goku/goku-turno-1.mp3'),
    new Audio('goku/goku-turno-2.mp3'),
    new Audio('goku/goku-turno-3.mp3'),
  ];
  const gokuWinSounds = [
    new Audio('goku/goku-victoria-1.mp3'),
    new Audio('goku/goku-victoria-2.mp3'),
    new Audio('goku/goku-victoria-3.mp3'),
  ];
  const gokuLoseSounds = [
    new Audio('goku/goku-derrota-1.mp3'),
    new Audio('goku/goku-derrota-2.mp3'),
    new Audio('goku/goku-derrota-3.mp3'),
  ];

  // PRÍNCIPE VEGETA
  const vegetaTurnSounds = [
    new Audio('vegeta/vegeta-turno-1.mp3'),
  ];
  const vegetaWinSounds = [
    new Audio('vegeta/vegeta-victoria-1.mp3'),
    new Audio('vegeta/vegeta-victoria-2.mp3'),
  ];
  const vegetaLoseSounds = [
    new Audio('vegeta/vegeta-derrota-1.mp3'),
    new Audio('vegeta/vegeta-derrota-2.mp3'),
  ];

  // FREEZER
  const freezerTurnSounds = [
    new Audio('freezer/freezer-turno-1.mp3'),
    new Audio('freezer/freezer-turno-2.mp3'),
    new Audio('freezer/freezer-turno-3.mp3'),
  ];
  const freezerWinSounds = [
    new Audio('freezer/freezer-victoria-1.mp3'),
    new Audio('freezer/freezer-victoria-2.mp3'),
  ];
  const freezerLoseSounds = [
    new Audio('freezer/freezer-derrota-1.mp3'),
    new Audio('freezer/freezer-derrota-2.mp3'),
  ];

  // EDWARD ELRIC
  const edwardTurnSounds = [
    new Audio('edward/edward-turno-1.mp3'),
    new Audio('edward/edward-turno-2.mp3'),
    new Audio('edward/edward-turno-3.mp3'),
  ];
  const edwardWinSounds = [
    new Audio('edward/edward-victoria-1.mp3'),
    new Audio('edward/edward-victoria-2.mp3'),
    new Audio('edward/edward-victoria-3.mp3'),
  ];
  const edwardLoseSounds = [
    new Audio('edward/edward-derrota-1.mp3'),
    new Audio('edward/edward-derrota-2.mp3'),
    new Audio('edward/edward-derrota-3.mp3'),
  ];

  // Characters array
  const characters = [
    { name: 'Naruto Uzumaki', image: 'naruto/naruto.png', turno: narutoTurnSounds, victoria: narutoWinSounds, perdida: narutoLoseSounds },
    { name: 'Sasuke Uchiha', image: 'sasuke/sasuke.png', turno: sasukeTurnSounds, victoria: sasukeWinSounds, perdida: sasukeLoseSounds },
    { name: 'Son Goku', image: 'goku/goku.webp', turno: gokuTurnSounds, victoria: gokuWinSounds, perdida: gokuLoseSounds },
    { name: 'Príncipe Vegeta', image: 'vegeta/vegeta.png', turno: vegetaTurnSounds, victoria: vegetaWinSounds, perdida: vegetaLoseSounds },
    { name: 'Freezer', image: 'freezer/freezer.png', turno: freezerTurnSounds, victoria: freezerWinSounds, perdida: freezerLoseSounds },
    { name: 'Edward Elric', image: 'edward/edward.png', turno: edwardTurnSounds, victoria: edwardWinSounds, perdida: edwardLoseSounds },
  ];

  const currentCharacter = characters[Math.floor(Math.random() * characters.length)];

  characterMessage.textContent = `${currentCharacter.name}`;
  characterImage.src = `${currentCharacter.image}`;
  characterImage.alt = currentCharacter.name;

  let currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
  let cells = Array.from({ length: 9 }, () => null);
  let gameEnded = false;








  

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    if (cells.every(cell => cell !== null)) {
      return 'draw';
    }

    return null;
  }

  function handleCellClick(index) {
    if (gameEnded || cells[index] !== null || (machinePlaying && currentPlayer === 'O')) return; // Permitir al jugador hacer clic solo si no está jugando la máquina

    cells[index] = currentPlayer;
    render();

    const winner = checkWinner();
    if (winner) {
      if (winner === 'draw') {
        resultDisplay.textContent = `Ha sido un empate.`;
      } else {
        resultDisplay.textContent = winner === 'O' ? `¡${currentCharacter.name} ha ganado!` : `¡Le has ganado a ${currentCharacter.name}!`;
        playOutcomeSound(currentCharacter, winner === 'O' ? 'victoria' : 'perdida');
      }
      gameEnded = true;
      document.querySelector('.overlay').style.display = 'flex';
      resetButton.style.display = 'block';
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      if (currentPlayer === 'O') {
        playTurnSound(currentCharacter);
        machinePlaying = true; // La máquina está jugando, así que establecemos la variable de estado en true
        setTimeout(machineMove, 800);
      }
    }
  }

  function machineMove() {
    if (gameEnded) return;
    let emptyCells = cells.map((value, index) => value === null ? index : null).filter(val => val !== null);
    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let selectedCellIndex = emptyCells[randomIndex];
    cells[selectedCellIndex] = 'O';
    currentPlayer = 'X';
    render();

    const winner = checkWinner();
    if (winner) {
      if (winner === 'draw') {
        resultDisplay.textContent = `Ha sido un empate.`;
      } else {
        resultDisplay.textContent = winner === 'O' ? `¡${currentCharacter.name} ha ganado!` : `¡Le has ganado a ${currentCharacter.name}!`;
        playOutcomeSound(currentCharacter, winner === 'O' ? 'victoria' : 'perdida');
      }
      gameEnded = true;
      document.querySelector('.overlay').style.display = 'flex';
      resetButton.style.display = 'block';
    }
    
    machinePlaying = false; // La máquina ha terminado su turno, así que establecemos la variable de estado en false
  }

  function playTurnSound(character) {
    if (localStorage.getItem('sonidoActivado') === 'activado') {
        const randomTurnSound = character.turno[Math.floor(Math.random() * character.turno.length)];
        randomTurnSound.play();
    }
  }


  function playOutcomeSound(character, outcome) {
    if (localStorage.getItem('sonidoActivado') === 'activado') {
        const randomOutcomeSound = character[outcome][Math.floor(Math.random() * character[outcome].length)];
        randomOutcomeSound.play();
    }
  }

  function resetGame() {
    window.location.reload();
  }

function render() {
  board.innerHTML = '';
  cells.forEach((value, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (value === 'X') {
      cell.innerHTML = '<i class="fa-solid fa-xmark-large"></i>';
    } else if (value === 'O') {
      cell.innerHTML = '<i class="fa-solid fa-o"></i>';
    }
    cell.addEventListener('click', () => handleCellClick(index));
    board.appendChild(cell);

    // Agregar la clase 'show' después de un pequeño retraso para activar la animación
    setTimeout(() => {
      cell.querySelector('i').classList.add('show');
    }, 200);
  });
}

  render();

  if (currentPlayer === 'O') {
    playTurnSound(currentCharacter);
    machinePlaying = true; // La máquina está jugando, así que establecemos la variable de estado en true
    setTimeout(machineMove, 800);
  }

  resetButton.addEventListener('click', resetGame);
});