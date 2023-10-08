const questionText = document.getElementById("questionText");
const optionButtons = document.querySelectorAll(".boton");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("message");
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");

let currentQuestionIndex = -1; 
let score = 0;
const maxQuestions = 10; // Límite de preguntas
const questionTime = 10; // Tiempo por pregunta en segundos
let countdownTimer;
let questions = [
    {
        question: "Selecciona la imagen de Afro Samurai.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icon.png" },
            { text: "Demon Slayer", imagePath: "../../archivo/colecciones/demon slayer/icon.png" },
            { text: "Demon Slayer", imagePath: "../../archivo/colecciones/demon slayer/animes/demon slayer/icon.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icon.png" },
        ],
        correctAnswer: 1
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

        for (let i = 0; i < optionButtons.length; i++) {
            // Crea un elemento de imagen
            const img = document.createElement("img");
            // Establece el atributo 'src' de la imagen concatenando la ruta base con el nombre de la opción
            img.src = question.options[i].imagePath;
            // Agrega la imagen al botón
            optionButtons[i].innerHTML = "";
            optionButtons[i].appendChild(img);
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

        if (currentQuestionIndex === 1 && timeLeft === 10) {
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
    } else {
        message.textContent = "Incorrecta";
        incorrectSound.play(); // Reproduce el sonido de respuesta incorrecta
    }

    scoreDisplay.textContent = score + " ⭐";
    disableOptions();

    setTimeout(() => {
        message.textContent = "";
        showNextQuestion();
    }, 1000);
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
