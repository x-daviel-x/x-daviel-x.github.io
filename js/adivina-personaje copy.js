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
    options: ["Afro / Afro Samurai", "Asta / Black Clover ", "Baki Hanma / Baki", "Edward Elric / Fullmetal Alchemist"],
    correctAnswer: 1,
    image: "imagenes/afro.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Asta / Black Clover", "Baki Hanma / Baki", "Edward Elric / Fullmetal Alchemist", "Eren Yeager / Ataque a los titanes"],
    correctAnswer: 1,
    image: "imagenes/asta.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Baki Hanma / Baki", "Edward Elric / Fullmetal Alchemist", "Eren Yeager / Ataque a los titanes", "Gon Freecss / Hunter x Hunter"],
    correctAnswer: 1,
    image: "imagenes/baki hanma.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Edward Elric / Fullmetal Alchemist", "Eren Yeager / Ataque a los titanes", "Gon Freecss / Hunter x Hunter", "Izuku Midoriya / My Hero Academia"],
    correctAnswer: 1,
    image: "imagenes/edward elric.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Gon Freecss / Hunter x Hunter", "Eren Yeager / Ataque a los Titanes", "Izuku Midoriya / My Hero Academia", "Jotaro Kujo / JoJo's Bizarre Adventure"],
    correctAnswer: 2,
    image: "imagenes/eren yeager.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Izuku Midoriya / My Hero Academia", "Gon Freecss / Hunter x Hunter", "Jotaro Kujo / JoJo's Bizarre Adventure", "Kenshin Himura / Sámurai X"],
    correctAnswer: 2,
    image: "imagenes/gon freecss.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Jotaro Kujo / JoJo's Bizarre Adventure", "Izuku Midoriya / My Hero Academia", "Kenshin Himura / Sámurai X", "Lelouch Lamperouge / Code Geass"],
    correctAnswer: 2,
    image: "imagenes/izuku midoriya.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Kenshin Himura / Sámurai X", "Jotaro Kujo / JoJo's Bizarre Adventure", "Lelouch Lamperouge / Code Geass", "Monkey D. Luffy / One Piece"],
    correctAnswer: 2,
    image: "imagenes/jotaro kujo.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Monkey D. Luffy / One Piece", "Lelouch Lamperouge / Code Geass", "Kenshin Himura / Sámurai X", "Naruto Uzumaki / Naruto Shippuden"],
    correctAnswer: 3,
    image: "imagenes/kenshin himura.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Naruto Uzumaki / Naruto Shippuden", "Monkey D. Luffy / One Piece", "Lelouch Lamperouge / Code Geass", "Ryuk / Death Note"],
    correctAnswer: 3,
    image: "imagenes/lelouch lamperouge.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ryuk / Death Note", "Naruto Uzumaki / Naruto Shippuden", "Monkey D. Luffy / One Piece", "Saitama / One Punch Man"],
    correctAnswer: 3,
    image: "imagenes/monkey d. luffy.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Saitama / One Punch Man", "Ryuk / Death Note", "Naruto Uzumaki /  Naruto Shippuden", "Shinji Ikari / Neon Genesis Evangelion"],
    correctAnswer: 3,
    image: "imagenes/naruto uzumaki 2.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Son Goku / Dragon Ball", "Shinji Ikari / Neon Genesis Evangelion", "Saitama / One Punch Man", "Ryuk / Death Note"],
    correctAnswer: 4,
    image: "imagenes/ryuk.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Tanjiro Kamado / Kimetsu no Yaiba", "Son Goku / Dragon Ball", "Shinji Ikari / Neon Genesis Evangelion", "Saitama / One Punch Man"],
    correctAnswer: 4,
    image: "imagenes/saitama.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Usagi Tsukino / Sailor Moon ", "Tanjiro Kamado / Kimetsu no Yaiba", "Son Goku / Dragon Ball", "Shinji Ikari / Neon Genesis Evangelion"],
    correctAnswer: 4,
    image: "imagenes/shinji ikari.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Agumon / Digimon", "Usagi Tsukino / Sailor Moon ", "Tanjiro Kamado / Kimetsu no Yaiba", "Son Goku / Dragon Ball"],
    correctAnswer: 4,
    image: "imagenes/son goku.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Tanjiro Kamado / Demon Slayer", "Usagi Tsukino / Sailor Moon", "Agumon / Digimon", "Akame / Akame ga Kill!"],
    correctAnswer: 1,
    image: "imagenes/tanjiro kamado.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Usagi Tsukino / Sailor Moon", "Agumon / Digimon", "Akame / Akame ga Kill!", "Alucard / Hellsing"],
    correctAnswer: 1,
    image: "imagenes/usagi tsukino.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Agumon / Digimon", "Akame / Akame ga Kill!", "Alucard / Hellsing", "Ash Ketchum / Pokémon"],
    correctAnswer: 1,
    image: "imagenes/agumon.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Akame / Akame ga Kill!", "Alucard / Hellsing", "Ash Ketchum / Pokémon", "Ash Lynx / Banana Fish"],
    correctAnswer: 1,
    image: "imagenes/akame.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ash Ketchum / Pokémon", "Alucard / Hellsing", "Ash Lynx / Banana Fish", "Chihiro Ogino / El viaje de Chihiro"],
    correctAnswer: 2,
    image: "imagenes/alucard.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ash Lynx / Banana Fish", "Ash Ketchum / Pokémon", "Chihiro Ogino / El viaje de Chihiro", "Conan Edogawa / Detective Conan"],
    correctAnswer: 2,
    image: "imagenes/ash ketchum.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Chihiro Ogino / El viaje de Chihiro", "Ash Lynx / Banana Fish", "Conan Edogawa / Detective Conan", "Denji / Chainsaw Man"],
    correctAnswer: 2,
    image: "imagenes/ash lynx.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Conan Edogawa / Detective Conan", "Chihiro Ogino / El viaje de Chihiro", "Denji / Chainsaw Man", "Eijun Sawamura / Diamond no Ace"],
    correctAnswer: 2,
    image: "imagenes/chihiro ogino.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Eijun Sawamura / Diamond No Ace", "Denji / Chainsaw Man", "Conan Edogawa / Detective Conan", "Firo Prochainezo / Baccano!"],
    correctAnswer: 3,
    image: "imagenes/conan edogawa.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Firo Prochainezo / Baccano!", "Eijun Sawamura / Diamond No Ace", "Denji / Chainsaw Man", "Guts / Berserk"],
    correctAnswer: 3,
    image: "imagenes/denji.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Guts / Berserk", "Firo Prochainezo / Baccano!", "Eijun Sawamura / Diamond No Ace", "Ichigo Kurosaki / Bleach"],
    correctAnswer: 3,
    image: "imagenes/eijun sawamura.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Ichigo Kurosaki / Bleach", "Guts / Berserk", "Firo Prochainezo / Baccano!", "Inuyasha / Inuyasha"],
    correctAnswer: 3,
    image: "imagenes/firo prochainezo.png"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Korosensei / Assassination Classroom", "Inuyasha / Inuaysha", "Ichigo Kurasaki / Bleach", "Guts / Berserk"],
    correctAnswer: 4,
    image: "imagenes/guts.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Maka Albarn / Soul Eater", "Korosensei / Assassination Classroom", "Inuyasha / Inuaysha", "Ichigo Kurasaki / Bleach"],
    correctAnswer: 4,
    image: "imagenes/ichigo kurosaki.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meiko Honma / Anohana", "Maka Albarn / Soul Eater", "Korosensei / Assassination Classroom", "Inuyasha / Inuaysha"],
    correctAnswer: 4,
    image: "imagenes/inuyasha.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Natsu Dragneel / Fairy Tail", "Meiko Honma / Anohana", "Maka Albarn / Soul Eater", "Korosensei / Assassination Classroom"],
    correctAnswer: 4,
    image: "imagenes/korosensei.png"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Maka Albarn / Soul Eater", "Meiko Honma / Anohana", "Natsu Dragneel / Fairy Tail", "Sakura Kinomoto / Sakura Card Captor"],
    correctAnswer: 1,
    image: "imagenes/maka albarn.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meiko Honma / Anohana", "Natsu Dragneel / Fairy Tail", "Sakura Kinomoto / Sakura Card Captor", "Satoru Gojo / Jujutsu Kaisen"],
    correctAnswer: 1,
    image: "imagenes/meiko honma.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Natsu Dragneel / Fairy Tail", "Sakura Kinomoto / Sakura Card Captor", "Satoru Gojo / Jujutsu Kaisen", "Senku Ishigami / Dr. Stone"],
    correctAnswer: 1,
    image: "imagenes/natsu dragneel.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Sakura Kinomoto / Sakura Card Captor", "Satoru Gojo / Jujutsu Kaisen", "Senku Ishigami / Dr. Stone", "Shinra Kusakabe / Fire Force"],
    correctAnswer: 1,
    image: "imagenes/sakura kinomoto.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Senku Ishigami / Dr. Stone", "Satoru Gojo / Jujutsu Kaisen", "Shinra Kusakabe / Fire Force", "Shotaro Kaneda / Akira"],
    correctAnswer: 2,
    image: "imagenes/satoru gojo.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shinra Kusakabe / Fire Force", "Senku Ishigami / Dr. Stone", "Shotaro Kaneda / Akira", "Shoyo Hinata / Haikyuu!!"],
    correctAnswer: 2,
    image: "imagenes/senku ishigami.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shotaro Kaneda / Akira", "Shinra Kusakabe / Fire Force", "Shoyo Hinata  / Haikyuu!!", "Simon / Tengen Toppa Gurren Lagann"],
    correctAnswer: 2,
    image: "imagenes/shinra kusakabe.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Shoyo Hinata / Haikyuu!!", "Shotaro Kaneda / Akira", "Simon / Tengen Toppa Gurren Lagann", "Spike Spiegel / Cowboy Bebop"],
    correctAnswer: 2,
    image: "imagenes/shotaro kaneda.png"
  },



  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Spike Spiegel / Cowboy Bebop", "Simon / Tengen Toppa Gurren Lagann", "Shoyo Hinata / Haikyuu!!", "Takashi Mitsuya / Tokyo Revengers"],
    correctAnswer: 3,
    image: "imagenes/shoyo hinata.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Takashi Mitsuya / Tokyo Revengers", "Spike Spiegel / Cowboy Bebop", "Simon / Tengen Toppa Gurren Lagann", "Totoro /  Mi vecino Totoro"],
    correctAnswer: 3,
    image: "imagenes/simon.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Totoro / Mi vecino Totoro", "Takashi Mitsuya / Tokyo Revengers", "Spike Spiegel / Cowboy Bebop", "Yona / Akatsuki no Yona"],
    correctAnswer: 3,
    image: "imagenes/spike spiegel.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yona / Akatsuki no Yona", "Totoro / Mi vecino Totoro", "Takashi Mitsuya / Tokyo Revengers", "Yugi Muto / Yu-Gi-Oh!"],
    correctAnswer: 3,
    image: "imagenes/takashi mitsuya.png"
  },




  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yumeko Jabami / Kakegurui", "Yugi Muto / Yu-Gi-Oh!", "Yona / Akatsuki no Yona", "Totoro / Mi vecino Totoro"],
    correctAnswer: 4,
    image: "imagenes/totoro.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Yusuke Urameshi / Yū Yū Hakusho", "Yumeko Jabami / Kakegurui", "Yugi Muto / Yu-Gi-Oh!", "Yona / Akatsuki no Yona"],
    correctAnswer: 4,
    image: "imagenes/yona.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Zero Two / DARLING in the FRANXX", "Yusuke Urameshi / Yū Yū Hakusho", "Yumeko Jabami / Kakegurui", "Yugi Muto / Yu-Gi-Oh!"],
    correctAnswer: 4,
    image: "imagenes/yugi muto.png"
  },
  {
    question: "¿De quién es esta silueta y a qué serie pertenece?",
    options: ["Meliodas / Los Siete Pecados Capitales", "Zero Two / DARLING in the FRANXX", "Yusuke Urameshi / Yū Yū Hakusho", "Yumeko Jabami / Kakegurui"],
    correctAnswer: 4,
    image: "imagenes/yumeko jabami.png"
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
    questionText.textContent = "Tu puntaje ha sido de " + score + "/10 ⭐";
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