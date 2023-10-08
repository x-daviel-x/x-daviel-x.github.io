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
                question: "❝¡No te rindas antes de intentarlo! Eso no es la forma en que soy! ¡Yo no retrocedo ni un solo paso!❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Goku / Dragon Ball", "Naruto / Naruto", "Monkey D. Luffy / One Piece", "Ichigo Kurosaki / Bleach"],
                correctAnswer: 3
            },

            {
                question: "❝Si no puedes encontrar un camino, créalo tú mismo.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Light Yagami / Death Note", "Senku Ishigami / Dr. Stone", "Gon Freecss / Hunter x Hunter", "Saitama / One Punch Man"],
                correctAnswer: 4
            },
            {
                question: "❝La única vez que un hombre puede ser valiente es cuando tiene miedo.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Eren Yeager / Ataque a los titanes", "Edward Elric / Fullmetal Alchemist", "Simon / Gurren Lagann", "Roy Mustang / Fullmetal Alchemist"],
                correctAnswer: 3
            },


            {
                question: "❝La justicia prevalecerá siempre que alguien esté dispuesto a sacrificar algo por ella.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Roronoa Zoro / One Piece", "Shinichi Kudo / Detective Conan", "Lelouch Lamperouge / Code Geass", "Gon Freecss / Hunter x Hunter"],
                correctAnswer: 1
            },
            {
                question: "❝En el ajedrez, es el jugador, no el rey, quien queda atrapado en una esquina.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Vegeta / Dragon Ball Z", "Spike Spiegel / Cowboy Bebop", "Kenshin Himura / Rurouni Kenshin", "Light Yagami / Death Note"],
                correctAnswer: 4
            },
            {
                question: "❝No te preocupes por lo que no puedes hacer. Preocúpate por lo que puedes hacer.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Naruto Uzumaki / Naruto", "Goku / Dragon Ball Z", "Edward Elric / Fullmetal Alchemist", "Sasuke Uchiha / Naruto"],
                correctAnswer: 1
            },
            {
                question: "❝Nunca mires hacia atrás. Si lo haces, puedes ver a tus enemigos.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Monkey D. Luffy / One Piece", "Eren Yeager / Ataque a los titanes", "Alucard / Hellsing", "Gintoki Sakata / Gintama"],
                correctAnswer: 2
            },
            {
                question: "❝Un hombre se vuelve más fuerte solo cuando se da cuenta de que es débil.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Izuku Midoriya / My Hero Academia", "Shinji Ikari / Neon Genesis Evangelion", "Tanjiro Kamado / Demon Slayer", "Koyomi Araragi / Bakemonogatari"],
                correctAnswer: 1
            },
            {
                question: "❝No juzgues a cada día por la cosecha que recoges, sino por las semillas que plantas.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Kaori Miyazono / Your Lie in April", "Goku / Dragon Ball Z", "Kenshin Himura / Rurouni Kenshin", "Spike Spiegel / Cowboy Bebop"],
                correctAnswer: 3
            },
            {
                question: "❝Un corazón solitario es un infierno.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Guts / Berserk", "Kurisu Makise / Steins;Gate", "Light Yagami / Death Note", "Lelouch Lamperouge / Code Geass"],
                correctAnswer: 0
            },
            {
                question: "❝La venganza es un plato que se sirve frío.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Roy Mustang / Fullmetal Alchemist", "Mugen / Samurai Champloo", "Holo / Spice and Wolf", "Vegeta / Dragon Ball Z"],
                correctAnswer: 1
            },
            {
                question: "❝Las cicatrices nos recuerdan de dónde venimos. Nos cuentan hacia dónde vamos.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Scar / Fullmetal Alchemist: Brotherhood", "Rin Tohsaka / Fate/stay night", "Gon Freecss / Hunter x Hunter", "Saitama / One Punch Man"],
                correctAnswer: 0
            },
            {
                question: "❝Nada es más fácil que perderse en el mundo y nada es más difícil que encontrarse a uno mismo.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Sakura Kinomoto / Cardcaptor Sakura", "Kaneki Ken / Tokyo Ghoul", "Eren Yeager / Attack on Titan", "Ginko / Mushishi"],
                correctAnswer: 3
            },
            {
                question: "❝La victoria sonríe a los que sufren más.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Kirei Kotomine / Fate/Zero", "Saber / Fate/stay night", "Simon / Gurren Lagann", "Spike Spiegel / Cowboy Bebop"],
                correctAnswer: 2
            },
            {
                question: "❝No importa cuántos tesoros busques, no hay un tesoro mayor que las personas.❞ - ¿Quién dijo esta frase y en qué serie?",
                options: ["Monkey D. Luffy / One Piece", "Sasuke Uchiha / Naruto", "Yusuke Urameshi / Yu Yu Hakusho", "Alucard / Hellsing"],
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