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
        const questionTime = 15; // Tiempo por pregunta en segundos
        let countdownTimer;
        let questions = [
            {
                question: `❝¡No te rindas antes de intentarlo! Eso no es la forma en que soy!
                ¡Yo no retrocedo ni un solo paso!❞ - ¿Quién dijo esta frase y en qué serie?`,
                options: ["Goku / Dragon Ball", "Naruto / Naruto", "Monkey D. Luffy / One Piece", "Ichigo Kurosaki / Bleach"],
                correctAnswer: 3
            },

            {
                question: "❝Si no puedes encontrar un camino, créalo tú mismo.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Light Yagami - Death Note", "Senku Ishigami - Dr. Stone", "Gon Freecss - Hunter x Hunter", "Saitama - One Punch Man"],
                correctAnswer: 4
            },
            {
                question: "❝La única vez que un hombre puede ser valiente es cuando tiene miedo.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Eren Yeager - Ataque a los titanes", "Edward Elric - Fullmetal Alchemist", "Simon - Gurren Lagann", "Roy Mustang - Fullmetal Alchemist"],
                correctAnswer: 3
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