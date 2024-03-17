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
const maxQuestions = 2; // Límite de preguntas
const questionTime = 15; // Tiempo por pregunta en segundos
let countdownTimer;
let questions = [
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Afro / Afro Samurai", "Asta / Black Clover ", "Baki Hanma / Baki", "Edward Elric / Fullmetal Alchemist"],
    correctAnswer: 1,
    image: "imagenes/afro.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Asta / Black Clover", "Baki Hanma / Baki", "Edward Elric / Fullmetal Alchemist", "Eren Yeager / Ataque a los titanes"],
    correctAnswer: 1,
    image: "imagenes/asta.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Baki Hanma / Baki", "Edward Elric / Fullmetal Alchemist", "Eren Yeager / Ataque a los titanes", "Gon Freecss / Hunter x Hunter"],
    correctAnswer: 1,
    image: "imagenes/baki hanma.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Edward Elric / Fullmetal Alchemist", "Eren Yeager / Ataque a los titanes", "Gon Freecss / Hunter x Hunter", "Izuku Midoriya / My Hero Academia"],
    correctAnswer: 1,
    image: "imagenes/edward elric.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Gon Freecss / Hunter x Hunter", "Eren Yeager / Ataque a los Titanes", "Izuku Midoriya / My Hero Academia", "Jotaro Kujo / JoJo's Bizarre Adventure"],
    correctAnswer: 2,
    image: "imagenes/eren yeager.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Izuku Midoriya / My Hero Academia", "Gon Freecss / Hunter x Hunter", "Jotaro Kujo / JoJo's Bizarre Adventure", "Kenshin Himura / Sámurai X"],
    correctAnswer: 2,
    image: "imagenes/gon freecss.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Jotaro Kujo / JoJo's Bizarre Adventure", "Izuku Midoriya / My Hero Academia", "Kenshin Himura / Sámurai X", "Lelouch Lamperouge / Code Geass"],
    correctAnswer: 2,
    image: "imagenes/izuku midoriya.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kenshin Himura / Sámurai X", "Jotaro Kujo / JoJo's Bizarre Adventure", "Lelouch Lamperouge / Code Geass", "Monkey D. Luffy / One Piece"],
    correctAnswer: 2,
    image: "imagenes/jotaro kujo.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Monkey D. Luffy / One Piece", "Lelouch Lamperouge / Code Geass", "Kenshin Himura / Sámurai X", "Naruto Uzumaki / Naruto Shippuden"],
    correctAnswer: 3,
    image: "imagenes/kenshin himura.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Naruto Uzumaki / Naruto Shippuden", "Monkey D. Luffy / One Piece", "Lelouch Lamperouge / Code Geass", "Ryuk / Death Note"],
    correctAnswer: 3,
    image: "imagenes/lelouch lamperouge.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ryuk / Death Note", "Naruto Uzumaki / Naruto Shippuden", "Monkey D. Luffy / One Piece", "Saitama / One Punch Man"],
    correctAnswer: 3,
    image: "imagenes/monkey d. luffy.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Saitama / One Punch Man", "Ryuk / Death Note", "Naruto Uzumaki /  Naruto Shippuden", "Shinji Ikari / Neon Genesis Evangelion"],
    correctAnswer: 3,
    image: "imagenes/naruto uzumaki 2.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Son Goku / Dragon Ball", "Shinji Ikari / Neon Genesis Evangelion", "Saitama / One Punch Man", "Ryuk / Death Note"],
    correctAnswer: 4,
    image: "imagenes/ryuk.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Tanjiro Kamado / Kimetsu no Yaiba", "Son Goku / Dragon Ball", "Shinji Ikari / Neon Genesis Evangelion", "Saitama / One Punch Man"],
    correctAnswer: 4,
    image: "imagenes/saitama.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Usagi Tsukino / Sailor Moon ", "Tanjiro Kamado / Kimetsu no Yaiba", "Son Goku / Dragon Ball", "Shinji Ikari / Neon Genesis Evangelion"],
    correctAnswer: 4,
    image: "imagenes/shinji ikari.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Agumon / Digimon", "Usagi Tsukino / Sailor Moon ", "Tanjiro Kamado / Kimetsu no Yaiba", "Son Goku / Dragon Ball"],
    correctAnswer: 4,
    image: "imagenes/son goku.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Tanjiro Kamado / Demon Slayer", "Usagi Tsukino / Sailor Moon", "Agumon / Digimon", "Akame / Akame ga Kill!"],
    correctAnswer: 1,
    image: "imagenes/tanjiro kamado.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Usagi Tsukino / Sailor Moon", "Agumon / Digimon", "Akame / Akame ga Kill!", "Alucard / Hellsing"],
    correctAnswer: 1,
    image: "imagenes/usagi tsukino.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Agumon / Digimon", "Akame / Akame ga Kill!", "Alucard / Hellsing", "Ash Ketchum / Pokémon"],
    correctAnswer: 1,
    image: "imagenes/agumon.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Akame / Akame ga Kill!", "Alucard / Hellsing", "Ash Ketchum / Pokémon", "Ash Lynx / Banana Fish"],
    correctAnswer: 1,
    image: "imagenes/akame.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ash Ketchum / Pokémon", "Alucard / Hellsing", "Ash Lynx / Banana Fish", "Chihiro Ogino / El viaje de Chihiro"],
    correctAnswer: 2,
    image: "imagenes/alucard.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ash Lynx / Banana Fish", "Ash Ketchum / Pokémon", "Chihiro Ogino / El viaje de Chihiro", "Conan Edogawa / Detective Conan"],
    correctAnswer: 2,
    image: "imagenes/ash ketchum.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Chihiro Ogino / El viaje de Chihiro", "Ash Lynx / Banana Fish", "Conan Edogawa / Detective Conan", "Denji / Chainsaw Man"],
    correctAnswer: 2,
    image: "imagenes/ash lynx.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Conan Edogawa / Detective Conan", "Chihiro Ogino / El viaje de Chihiro", "Denji / Chainsaw Man", "Eijun Sawamura / Diamond no Ace"],
    correctAnswer: 2,
    image: "imagenes/chihiro ogino.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Eijun Sawamura / Diamond No Ace", "Denji / Chainsaw Man", "Conan Edogawa / Detective Conan", "Firo Prochainezo / Baccano!"],
    correctAnswer: 3,
    image: "imagenes/conan edogawa.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Firo Prochainezo / Baccano!", "Eijun Sawamura / Diamond No Ace", "Denji / Chainsaw Man", "Guts / Berserk"],
    correctAnswer: 3,
    image: "imagenes/denji.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Guts / Berserk", "Firo Prochainezo / Baccano!", "Eijun Sawamura / Diamond No Ace", "Ichigo Kurosaki / Bleach"],
    correctAnswer: 3,
    image: "imagenes/eijun sawamura.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ichigo Kurosaki / Bleach", "Guts / Berserk", "Firo Prochainezo / Baccano!", "Inuyasha / Inuyasha"],
    correctAnswer: 3,
    image: "imagenes/firo prochainezo.webp"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Korosensei / Assassination Classroom", "Inuyasha / Inuaysha", "Ichigo Kurasaki / Bleach", "Guts / Berserk"],
    correctAnswer: 4,
    image: "imagenes/guts.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Maka Albarn / Soul Eater", "Korosensei / Assassination Classroom", "Inuyasha / Inuaysha", "Ichigo Kurasaki / Bleach"],
    correctAnswer: 4,
    image: "imagenes/ichigo kurosaki.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meiko Honma / Anohana", "Maka Albarn / Soul Eater", "Korosensei / Assassination Classroom", "Inuyasha / Inuaysha"],
    correctAnswer: 4,
    image: "imagenes/inuyasha.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Natsu Dragneel / Fairy Tail", "Meiko Honma / Anohana", "Maka Albarn / Soul Eater", "Korosensei / Assassination Classroom"],
    correctAnswer: 4,
    image: "imagenes/korosensei.webp"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Maka Albarn / Soul Eater", "Meiko Honma / Anohana", "Natsu Dragneel / Fairy Tail", "Sakura Kinomoto / Sakura Card Captor"],
    correctAnswer: 1,
    image: "imagenes/maka albarn.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meiko Honma / Anohana", "Natsu Dragneel / Fairy Tail", "Sakura Kinomoto / Sakura Card Captor", "Satoru Gojo / Jujutsu Kaisen"],
    correctAnswer: 1,
    image: "imagenes/meiko honma.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Natsu Dragneel / Fairy Tail", "Sakura Kinomoto / Sakura Card Captor", "Satoru Gojo / Jujutsu Kaisen", "Senku Ishigami / Dr. Stone"],
    correctAnswer: 1,
    image: "imagenes/natsu dragneel.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Sakura Kinomoto / Sakura Card Captor", "Satoru Gojo / Jujutsu Kaisen", "Senku Ishigami / Dr. Stone", "Shinra Kusakabe / Fire Force"],
    correctAnswer: 1,
    image: "imagenes/sakura kinomoto.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Senku Ishigami / Dr. Stone", "Satoru Gojo / Jujutsu Kaisen", "Shinra Kusakabe / Fire Force", "Shotaro Kaneda / Akira"],
    correctAnswer: 2,
    image: "imagenes/satoru gojo.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shinra Kusakabe / Fire Force", "Senku Ishigami / Dr. Stone", "Shotaro Kaneda / Akira", "Shoyo Hinata / Haikyuu!!"],
    correctAnswer: 2,
    image: "imagenes/senku ishigami.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shotaro Kaneda / Akira", "Shinra Kusakabe / Fire Force", "Shoyo Hinata  / Haikyuu!!", "Simon / Tengen Toppa Gurren Lagann"],
    correctAnswer: 2,
    image: "imagenes/shinra kusakabe.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shoyo Hinata / Haikyuu!!", "Shotaro Kaneda / Akira", "Simon / Tengen Toppa Gurren Lagann", "Spike Spiegel / Cowboy Bebop"],
    correctAnswer: 2,
    image: "imagenes/shotaro kaneda.webp"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Spike Spiegel / Cowboy Bebop", "Simon / Tengen Toppa Gurren Lagann", "Shoyo Hinata / Haikyuu!!", "Takashi Mitsuya / Tokyo Revengers"],
    correctAnswer: 3,
    image: "imagenes/shoyo hinata.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Takashi Mitsuya / Tokyo Revengers", "Spike Spiegel / Cowboy Bebop", "Simon / Tengen Toppa Gurren Lagann", "Totoro /  Mi vecino Totoro"],
    correctAnswer: 3,
    image: "imagenes/simon.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Totoro / Mi vecino Totoro", "Takashi Mitsuya / Tokyo Revengers", "Spike Spiegel / Cowboy Bebop", "Yona / Akatsuki no Yona"],
    correctAnswer: 3,
    image: "imagenes/spike spiegel.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yona / Akatsuki no Yona", "Totoro / Mi vecino Totoro", "Takashi Mitsuya / Tokyo Revengers", "Yugi Muto / Yu-Gi-Oh!"],
    correctAnswer: 3,
    image: "imagenes/takashi mitsuya.webp"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yumeko Jabami / Kakegurui", "Yugi Muto / Yu-Gi-Oh!", "Yona / Akatsuki no Yona", "Totoro / Mi vecino Totoro"],
    correctAnswer: 4,
    image: "imagenes/totoro.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yusuke Urameshi / Yū Yū Hakusho", "Yumeko Jabami / Kakegurui", "Yugi Muto / Yu-Gi-Oh!", "Yona / Akatsuki no Yona"],
    correctAnswer: 4,
    image: "imagenes/yona.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Zero Two / DARLING in the FRANXX", "Yusuke Urameshi / Yū Yū Hakusho", "Yumeko Jabami / Kakegurui", "Yugi Muto / Yu-Gi-Oh!"],
    correctAnswer: 4,
    image: "imagenes/yugi muto.webp"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meliodas / Los Siete Pecados Capitales", "Zero Two / DARLING in the FRANXX", "Yusuke Urameshi / Yū Yū Hakusho", "Yumeko Jabami / Kakegurui"],
    correctAnswer: 4,
    image: "imagenes/yumeko jabami.webp"
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
    questionImage.style.filter = "brightness(20%)";

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
        return; // Evita que se sigan procesando respuestas después de las 3 preguntas
    }

    const question = questions[currentQuestionIndex];
    const selectedButton = optionButtons[selectedIndex - 1];

    if (selectedIndex === question.correctAnswer) {
        score++;
        message.textContent = "✔";
        correctSound.play(); // Reproduce el sonido de respuesta correcta
        selectedButton.classList.add("correcto");
        questionImage.style.filter = "brightness(100%)"; // Aplica el filtro de brillo

        setTimeout(() => {
            // Después de 3 segundos, restablece el estilo de la imagen y muestra la siguiente pregunta.
            questionImage.style.filter = "brightness(100%)";
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