const questionText = document.getElementById("questionText");
const optionButtons = document.querySelectorAll(".boton");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("message");
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");
const questionImage = document.getElementById("questionImage");

let currentQuestionIndex = -1;
let score = 0;
const maxQuestions = 10; // Límite de preguntas
const questionTime = 10; // Tiempo por pregunta en segundos
let countdownTimer;
let questions = [
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Afro Samurai", "Black Clover ", "Baki", "Fullmetal Alchemist"],
    correctAnswer: 1,
    image: "../../archivo/animes/afro samurai/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Black Clover", "Baki", "Fullmetal Alchemist", "Ataque a los titanes"],
    correctAnswer: 1,
    image: "../../archivo/animes/black clover/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Baki", "Fullmetal Alchemist", "Ataque a los titanes", "Hunter x Hunter"],
    correctAnswer: 1,
    image: "../../archivo/animes/baki/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Fullmetal Alchemist", "Ataque a los titanes", "Hunter x Hunter", "My Hero Academia"],
    correctAnswer: 1,
    image: "../../archivo/colecciones/fullmetal alchemist/animes/fullmetal alchemist/logo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Hunter x Hunter", "Ataque a los Titanes", "My Hero Academia", "JoJo's Bizarre Adventure"],
    correctAnswer: 2,
    image: "../../archivo/animes/ataque a los titanes/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["My Hero Academia", "Hunter x Hunter", "JoJo's Bizarre Adventure", "Sámurai X"],
    correctAnswer: 2,
    image: "../../archivo/colecciones/hunter x hunter/animes/hunter x hunter (1999)/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["JoJo's Bizarre Adventure", "My Hero Academia", "Sámurai X", "Code Geass"],
    correctAnswer: 2,
    image: "../../archivo/colecciones/my hero academia/animes/my hero academia/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Sámurai X", "JoJo's Bizarre Adventure", "Code Geass", "One Piece"],
    correctAnswer: 2,
    image: "../../archivo/animes/jojo's bizarre adventure/logo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["One Piece", "Code Geass", "Sámurai X", "Naruto"],
    correctAnswer: 3,
    image: "../../archivo/animes/samurai x/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Naruto", "One Piece", "Code Geass", "Death Note"],
    correctAnswer: 3,
    image: "../../archivo/animes/code geass/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Death Note", "Naruto", "One Piece", "One Punch Man"],
    correctAnswer: 3,
    image: "../../archivo/colecciones/one piece/animes/one piece/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["One Punch Man", "Death Note", "Naruto", "Neon Genesis Evangelion"],
    correctAnswer: 3,
    image: "../../archivo/colecciones/naruto/animes/naruto/logo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Dragon Ball", "Neon Genesis Evangelion", "One Punch Man", "Death Note"],
    correctAnswer: 4,
    image: "../../archivo/animes/death note/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kimetsu no Yaiba", "Dragon Ball", "Neon Genesis Evangelion", "One Punch Man"],
    correctAnswer: 4,
    image: "../../archivo/animes/one punch-man/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Sailor Moon ", "Kimetsu no Yaiba", "Dragon Ball", "Neon Genesis Evangelion"],
    correctAnswer: 4,
    image: "../../archivo/colecciones/evangelion/animes/neon genesis evangelion/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Digimon Adventure", "Sailor Moon ", "Kimetsu no Yaiba", "Dragon Ball"],
    correctAnswer: 4,
    image: "../../archivo/colecciones/dragon ball/animes/dragon ball/logo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kimetsu no Yaiba", "Sailor Moon", "Digimon Adventure", "Akame ga Kill!"],
    correctAnswer: 1,
    image: "../../archivo/colecciones/kimetsu no yaiba/animes/kimetsu no yaiba/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Sailor Moon", "Digimon Adventure", "Akame ga Kill!", "Hellsing"],
    correctAnswer: 1,
    image: "../../archivo/animes/sailor moon/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Digimon Adventure", "Akame ga Kill!", "Hellsing", "Pokémon"],
    correctAnswer: 1,
    image: "../../archivo/animes/digimon adventure/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Akame ga Kill!", "Hellsing", "Pokémon", "Banana Fish"],
    correctAnswer: 1,
    image: "../../archivo/animes/akame ga kill!/logo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Pokémon", "Hellsing", "Banana Fish", "El viaje de Chihiro"],
    correctAnswer: 2,
    image: "../../archivo/animes/hellsing/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Banana Fish", "Pokémon", "El viaje de Chihiro", "Detective Conan"],
    correctAnswer: 2,
    image: "../../archivo/colecciones/pokemon/animes/pokemon/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["El viaje de Chihiro", "Banana Fish", "Detective Conan", "Chainsaw Man"],
    correctAnswer: 2,
    image: "../../archivo/animes/banana fish/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Detective Conan", "El viaje de Chihiro", "Chainsaw Man", "Diamond no Ace"],
    correctAnswer: 2,
    image: "imagenes/chihiro ogino.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Diamond No Ace", "Chainsaw Man", "Detective Conan", "Baccano!"],
    correctAnswer: 3,
    image: "../../archivo/animes/detective conan/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Baccano!", "Diamond No Ace", "Chainsaw Man", "Berserk"],
    correctAnswer: 3,
    image: "../../archivo/animes/chainsaw man/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Berserk", "Baccano!", "Diamond No Ace", "Bleach"],
    correctAnswer: 3,
    image: "../../archivo/animes/diamond no ace/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Bleach", "Berserk", "Baccano!", "Inuyasha"],
    correctAnswer: 3,
    image: "../../archivo/animes/baccano!/logo.webp"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Assassination Classroom", "Inuaysha", "Bleach", "Berserk"],
    correctAnswer: 4,
    image: "../../archivo/animes/berserk/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Soul Eater", "Assassination Classroom", "Inuaysha", "Bleach"],
    correctAnswer: 4,
    image: "../../archivo/animes/bleach/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Anohana", "Soul Eater", "Assassination Classroom", "Inuaysha"],
    correctAnswer: 4,
    image: "../../archivo/animes/inuyasha/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Fairy Tail", "Anohana", "Soul Eater", "Assassination Classroom"],
    correctAnswer: 4,
    image: "../../archivo/animes/assassination classroom/logo.webp"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Soul Eater", "Anohana", "Fairy Tail", "Sakura Card Captor"],
    correctAnswer: 1,
    image: "../../archivo/animes/soul eater/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Anohana", "Fairy Tail", "Sakura Card Captor", "Jujutsu Kaisen"],
    correctAnswer: 1,
    image: "../../archivo/animes/anohana/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Fairy Tail", "Sakura Card Captor", "Jujutsu Kaisen", "Dr. Stone"],
    correctAnswer: 1,
    image: "../../archivo/animes/fairy tail/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Sakura Card Captor", "Jujutsu Kaisen", "Dr. Stone", "Fire Force"],
    correctAnswer: 1,
    image: "../../archivo/animes/cardcaptor sakura/logo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Dr. Stone", "Jujutsu Kaisen", "Fire Force", "Akira"],
    correctAnswer: 2,
    image: "../../archivo/animes/jujutsu kaisen/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Fire Force", "Dr. Stone", "Akira", "Haikyuu!!"],
    correctAnswer: 2,
    image: "../../archivo/animes/dr. stone/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Akira", "Fire Force", "Haikyuu!!", "Tengen Toppa Gurren Lagann"],
    correctAnswer: 2,
    image: "../../archivo/animes/fire force/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Haikyuu!!", "Akira", "Tengen Toppa Gurren Lagann", "Cowboy Bebop"],
    correctAnswer: 2,
    image: "imagenes/shotaro kaneda.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Cowboy Bebop", "Tengen Toppa Gurren Lagann", "Haikyuu!!", "Tokyo Revengers"],
    correctAnswer: 3,
    image: "../../archivo/animes/haikyu!!/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Tokyo Revengers", "Cowboy Bebop", "Tengen Toppa Gurren Lagann", "Mi vecino Totoro"],
    correctAnswer: 3,
    image: "../../archivo/animes/gurren lagann/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Mi vecino Totoro", "Tokyo Revengers", "Cowboy Bebop", "Akatsuki no Yona"],
    correctAnswer: 3,
    image: "../../archivo/animes/cowboy bebop/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Akatsuki no Yona", "Mi vecino Totoro", "Tokyo Revengers", "Yu-Gi-Oh!"],
    correctAnswer: 3,
    image: "../../archivo/animes/tokyo revengers/logo.webp"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kakegurui", "Yu-Gi-Oh!", "Akatsuki no Yona", "Mi vecino Totoro"],
    correctAnswer: 4,
    image: "imagenes/totoro.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yū Yū Hakusho", "Kakegurui", "Yu-Gi-Oh!", "Akatsuki no Yona"],
    correctAnswer: 4,
    image: "../../archivo/animes/akatsuki no yona/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["DARLING in the FRANXX", "Yū Yū Hakusho", "Kakegurui", "Yu-Gi-Oh!"],
    correctAnswer: 4,
    image: "../../archivo/animes/yu-gi-oh!/logo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Los Siete Pecados Capitales", "DARLING in the FRANXX", "Yū Yū Hakusho", "Kakegurui"],
    correctAnswer: 4,
    image: "../../archivo/animes/kakegurui/logo.webp"
  },



];

function startQuiz() {
    score = 0;
    shuffleArray(questions);
    currentQuestionIndex = -1;
    showNextQuestion();
}







function showNextQuestion() {
  currentQuestionIndex++;

  // Restablecer estilos de los botones al mostrar la siguiente pregunta
  optionButtons.forEach((button) => {
      button.classList.remove("correcto", "incorrecto");
      button.disabled = false;
  });

  if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;

    // Actualiza la etiqueta de imagen con la ruta de la imagen de la pregunta actual
    questionImage.src = question.image;

    // Reinicia el estilo de la imagen
    questionImage.style.filter = "drop-shadow(0px 0px 3px gray) blur(3px)";

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = question.options[i];
        optionButtons[i].disabled = false;
    }

    startCountdown();
  } else {
    showFinalMessage();
  }
}

function handleTimeout() {
  clearInterval(countdownTimer); // Detener la cuenta regresiva

  if (currentQuestionIndex >= maxQuestions) {
      return; // Evita que se sigan procesando respuestas después de las preguntas programadas
  }

  // Marcar la respuesta como incorrecta y pasar a la siguiente pregunta.
  const question = questions[currentQuestionIndex];
  const selectedButton = optionButtons[question.correctAnswer - 1];

  message.textContent = "✖";
  incorrectSound.play(); // Reproduce el sonido de respuesta incorrecta
  selectedButton.classList.add("incorrecto");

  disableOptions();

  setTimeout(() => {
      message.textContent = "";
      showNextQuestion();
  }, 1000);
}


function startCountdown() {
  let timeLeft = questionTime;
  timeDisplay.textContent = ` ${timeLeft}`;

  // Añadido para calcular y actualizar el progreso de la barra
  const progress = ((currentQuestionIndex + 1) / maxQuestions) * 100;
  progressBar.style.width = progress + "%";

  countdownTimer = setInterval(() => {
      if (timeLeft <= 0) {
          handleTimeout();
      } else {
          timeDisplay.textContent = ` ${timeLeft}`;
      }
      timeLeft--;

      if (currentQuestionIndex === 0 && timeLeft === (questionTime - 15)) {
          // Si es la primera pregunta y el tiempo se agota, reproduce el sonido de respuesta incorrecta.
          incorrectSound.play();
      }
  }, 1000);
}


function checkAnswer(selectedIndex) {
    clearInterval(countdownTimer); // Detener la cuenta regresiva

    if (currentQuestionIndex >= maxQuestions) {
        return; // Evita que se sigan procesando respuestas después de las preguntas
    }

    const question = questions[currentQuestionIndex];
    const selectedButton = optionButtons[selectedIndex - 1];

    if (selectedIndex === question.correctAnswer) {
        score++;
        message.textContent = "✔";
        correctSound.play(); // Reproduce el sonido de respuesta correcta
        selectedButton.classList.add("correcto");
        questionImage.style.filter = "drop-shadow(0px 0px 3px gray) brightness(100%)"; // Aplica el filtro de brillo

        setTimeout(() => {
            // Después de 3 segundos, restablece el estilo de la imagen y muestra la siguiente pregunta.
            questionImage.style.filter = "drop-shadow(0px 0px 3px gray) brightness(100%)";
            message.textContent = "";
            showNextQuestion();
        }, 1000);

    } else {
        message.textContent = "✖";
        incorrectSound.play(); // Reproduce el sonido de respuesta incorrecta
        selectedButton.classList.add("incorrecto");
        
        setTimeout(() => {
            message.textContent = "";
            showNextQuestion();
        }, 1000);
    }

    scoreDisplay.textContent = score + " ⭐";
    disableOptions();

}

function disableOptions() {
    optionButtons.forEach((button) => {
        button.disabled = true;
    });
}

// Función para mezclar aleatoriamente un array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Función para eliminar los botones de opción
function removeButtons() {
  optionButtons.forEach((button) => {
      button.style.display = "none";
  });
}

// Reemplaza la función showFinalMessage() actual con esta versión modificada
function showFinalMessage() {
  questionText.textContent = "Tu puntaje final ha sido " + score + "/10 ⭐";
  message.textContent = "";
  timeDisplay.style.display = "none";
  scoreDisplay.style.display = "none";
  document.getElementById("restartButton").style.display = "block";
  
  // Oculta la imagen al mostrar el mensaje final
  questionImage.style.display = "none";

    // Oculta los botones de opción al final
  removeButtons();
}




startQuiz();