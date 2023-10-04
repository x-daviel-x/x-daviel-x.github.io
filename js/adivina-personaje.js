const questionText = document.getElementById("questionText");
const optionButtons = document.querySelectorAll(".boton");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("message");
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");
const questionImage = document.getElementById("questionImage"); // Elemento de imagen

let currentQuestionIndex = -1;
let score = 0;
const maxQuestions = 10; // Límite de preguntas
const questionTime = 15; // Tiempo por pregunta en segundos
let countdownTimer;
let questions = [
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Naruto Uzumaki / Naruto Shippuden", "Edward Elric / Fullmetal Alchemist", "Alucard / Hellsing", "Meliodas / Los Siete Pecados Capitales"],
    correctAnswer: 1,
    image: "imagenes/naruto uzumaki 2.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Afro / Afro Samurai", "Eren Yeager / Ataque a los Titanes", "Monkey D. Luffy / One Piece", "Baki / Baki"],
    correctAnswer: 2,
    image: "imagenes/eren yeager.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Light Yagami / Death Note", "Denji / Chainsaw Man", "Asta / Black Clover", "Shinichi Kudo / Detective Conan"],
    correctAnswer: 3,
    image: "imagenes/asta.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Jotaro Kujo / JoJo's Bizarre Adventure", "Gon Freecss / Hunter x Hunter", "Izuku Midoriya / My Hero Academia", "Son Goku / Dragon Ball"],
    correctAnswer: 4,
    image: "imagenes/son goku.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Monkey D. Luffy / One Piece", "Kenshin Himura / Rurouni Kenshin", "Lelouch / Code Geass", "Edward Elric / Fullmetal Alchemist"],
    correctAnswer: 1,
    image: "imagenes/monkey d. luffy.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ryuk / Death Note", "Saitama / One Punch Man", "Shinji Ikari / Neon Genesis Evangelion", "Tanjiro Kamado / Demon Slayer"],
    correctAnswer: 2,
    image: "imagenes/saitama.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shinji Ikari / Neon Genesis Evangelion", "Usagi Tsukino / Sailor Moon", "Gon Freecss / Hunter x Hunter", "Edward Elric / Fullmetal Alchemist"],
    correctAnswer: 3,
    image: "imagenes/gon freecss.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Lelouch / Code Geass", "Kenshin Himura / Rurouni Kenshin", "Izuku Midoriya / My Hero Academia", "Usagi Tsukino / Sailor Moon"],
    correctAnswer: 4,
    image: "imagenes/usagi tsukino.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Tanjiro Kamado / Demon Slayer", "Light Yagami / Death Note", "Denji / Chainsaw Man", "Saitama / One Punch Man"],
    correctAnswer: 1,
    image: "imagenes/tanjiro kamado.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Edward Elric / Fullmetal Alchemist","Afro / Afro Samurai", "Ryuk / Death Note", "Goku / Dragon Ball"],
    correctAnswer: 2,
    image: "imagenes/afro.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meliodas / Los Siete Pecados Capitales", "Jotaro Kujo / JoJo's Bizarre Adventure", "Izuku Midoriya / My Hero Academia", "Light Yagami / Death Note"],
    correctAnswer: 3,
    image: "imagenes/izuku midoriya.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kenshin Himura / Rurouni Kenshin", "Lelouch / Code Geass", "Ryuk / Death Note", "Shinji Ikari / Neon Genesis Evangelion"],
    correctAnswer: 4,
    image: "imagenes/shinji ikari.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kenshin Himura / Rurouni Kenshin", "Goku / Dragon Ball", "Tanjiro Kamado / Demon Slayer", "Meliodas / Los Siete Pecados Capitales"],
    correctAnswer: 1,
    image: "imagenes/kenshin himura.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Izuku Midoriya / My Hero Academia", "Lelouch Lamperouge / Code Geass", "Jotaro Kujo / JoJo's Bizarre Adventure", "Alucard / Hellsing"],
    correctAnswer: 2,
    image: "imagenes/lelouch lamperouge.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Izuku Midoriya / My Hero Academia", "Lelouch / Code Geass", "Baki Hanma / Baki", "Alucard / Hellsing"],
    correctAnswer: 3,
    image: "imagenes/baki hanma.png"
  },

  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Izuku Midoriya / My Hero Academia", "Lelouch / Code Geass", "Jotaro Kujo / JoJo's Bizarre Adventure", "Edward Elric / Fullmetal Alchemist"],
    correctAnswer: 4,
    image: "imagenes/edward elric.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Jotaro Kujo / JoJo's Bizarre Adventures", "Lelouch / Code Geass", "Nobita Nobi / Doraemon", "Alucard / Hellsing"],
    correctAnswer: 1,
    image: "imagenes/jotaro kujo.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Jotaro / JoJo's Bizarre Adventures", "Ryuk / Death Note", "Jotaro Kujo / JoJo's Bizarre Adventure", "Alucard / Hellsing"],
    correctAnswer: 2,
    image: "imagenes/ryuk.png"
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

    if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;

        // Actualiza la etiqueta de imagen con la ruta de la imagen de la pregunta actual
        questionImage.src = question.image;

        // Reinicia el estilo de la imagen
        questionImage.style.filter = "brightness(0%)";

        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].textContent = question.options[i];
            optionButtons[i].disabled = false;
        }

        startCountdown();
    } else {
        showFinalMessage();
    }
}

function startCountdown() {
    let timeLeft = questionTime;
    timeDisplay.textContent = `⏱️ ${timeLeft} segundos`;
    countdownTimer = setInterval(() => {
        if (timeLeft <= 0) {
            // Si el tiempo se agota, marcar la respuesta como incorrecta y pasar a la siguiente pregunta.
            checkAnswer(-1);
        } else {
            timeDisplay.textContent = `⏱️ ${timeLeft} segundos`;
        }
        timeLeft--;

        if (currentQuestionIndex === 1 && timeLeft === 15) {
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
    if (selectedIndex === question.correctAnswer) {
        score++;
        message.textContent = "Correcta";
        correctSound.play(); // Reproduce el sonido de respuesta correcta
        questionImage.style.filter = "brightness(100%)"; // Aplica el filtro de brillo

        setTimeout(() => {
            // Después de 3 segundos, restablece el estilo de la imagen y muestra la siguiente pregunta.
            questionImage.style.filter = "brightness(100%)";
            message.textContent = "";
            showNextQuestion();
        }, 1000);
    } else {
        message.textContent = "Incorrecta";
        incorrectSound.play(); // Reproduce el sonido de respuesta incorrecta

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

// Reemplaza la función showFinalMessage() actual con esta versión modificada
function showFinalMessage() {
    questionText.textContent = "Tu puntaje final es: " + score + " ⭐";
    message.textContent = "";
    timeDisplay.style.display = "none"; // Oculta el texto del tiempo restante
    scoreDisplay.style.display = "none"; // Oculta el puntaje (⭐)
    document.getElementById("restartButton").style.display = "block"; // Muestra el botón de reinicio
    removeButtons(); // Elimina los botones de opción

    // Oculta la imagen al mostrar el mensaje final
    questionImage.style.display = "none";
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

startQuiz();
