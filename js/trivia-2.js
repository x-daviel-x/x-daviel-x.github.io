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
                question: "¿Cuál es el apellido de Edward en Fullmetal Alchemist?",
                options: ["Elmac", "Elrond", "Elric", "Edmond"],
                correctAnswer: 3
            },
            {
                question: "¿Cuál es el EVA que pilotea Shinji en Neon Genesis Evangelion?",
                options: ["Unidad 00", "Unidad 05", "Unidad 02", "Unidad 01"],
                correctAnswer: 4
            },
            {
                question: "¿Qué busca Inuyasha?",
                options: ["Una espada", "Una persona", "Una joya", "Un libro"],
                correctAnswer: 3
            },
            {
                question: "¿Cuál es el verdadero nombre de Kira en Death Note?",
                options: ["L", "Light Yagami", "Ryuk Yagami", "Misa Amane"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál es el nombre japonés de Ash Ketchum?",
                options: ["Satoshi", "Shinji", "Yuji", "Aoi"],
                correctAnswer: 1
            },
            {
                question: "¿Cuál es el apellido de Sakura en Sakura Card Captor?",
                options: ["Uzumaki", "Lee", "Sakomoto", "Kinomoto"],
                correctAnswer: 4
            },
            {
                question: "¿Quién fue maestro de Naruto?",
                options: ["Kakashi Hatake", "Zabuza Momochi", "Sakura Haruno", "Orochimaru"],
                correctAnswer: 1
            },
            {
                question: "¿Cómo se llama en la versión japonesa la escuela a la que va Ozora Tsubasa?",
                options: ["Toho", "Shutetsu", "Nankatsu", "Yamamoto"],
                correctAnswer: 3
            },
            {
                question: "¿Qué deporte juega Sakuragi?",
                options: ["Rugby", "Baloncesto", "Beisbol", "Voleibol"],
                correctAnswer: 2
            },
            {
                question: "¿Cuál de estos no es un villano de Dragon Ball Z?",
                options: ["Krilin", "Cell", "Freezer", "Majin Buu"],
                correctAnswer: 1
            },
            {
                question: "¿Qué Pokémon tiene bolsas de almacenamiento de electricidad en sus mejillas?",
                options: ["Gengar", "Jigglypuff", "Pikachu", "Squirtle"],
                correctAnswer: 3
            },
            {
                question: "¿Quién resolvió el Rompecabezas del Milenio?",
                options: ["Joey Wheeler", "Bakura", "Seto Kaiba", "Yugi Muto"],
                correctAnswer: 4
            },
            {
                question: "¿Qué serie de anime cuenta la historia de la organización contra el terrorismo cibernético Sección de Seguridad Pública 9?",
                options: ["Darker than Black", "Ghost in the Shell", "Neon Genesis Evangelion", "Paranoia Agent"],
                correctAnswer: 2
            },
            {
                question: "¿Cuántas esferas del dragón hay?",
                options: ["8", "6", "5", "7"],
                correctAnswer: 4
            },
            {
                question: "¿Qué serie de anime gira en torno a los hermanos Elric?",
                options: ["Demon Slayer", "Fullmetal Alchemist", "Crows", "Berserk"],
                correctAnswer: 2
            },
            {
                question: "¿Qué personaje de Cowboy Bebop es un Pembroke Welsh Corgi modificado genéticamente con inteligencia similar a la humana?",
                options: ["Spike", "Vicious", "Jet", "Ein"],
                correctAnswer: 4
            },
            {
                question: "¿Quién es miembro de una raza guerrera extraterrestre llamada Saiyajin?",
                options: ["Ichigo", "Cell", "Goku", "Naruto"],
                correctAnswer: 3
            },
            {
                question: "¿Quién es el protagonista principal de la serie de anime Pokémon?",
                options: ["Ash", "Pikachu", "Misty", "Brock"],
                correctAnswer: 1
            },
            {
                question: "¿Cuál es el nombre de la protagonista la cual en su anime tiene que conseguir reunir la Cartas Clow?",
                options: ["Tomoyo", "Sakura", "Shina", "Kazumi"],
                correctAnswer: 2
            },
            {
                question: "Un príncipe marginado se hace cargo de la revolución controlando la mente de los demás. ¿Quién es él?",
                options: ["Levi Ackerman", "Lelouch vi Britannia", "Monkey D. Luffy", "Suzaku Kururugi"],
                correctAnswer: 2
            },
            {
                question: "¿Con quién se casó Vegeta?",
                options: ["Milk", "Bulma", "Videl", "Launch"],
                correctAnswer: 2
            },
            {
                question: "¿Quién es un genio detective de fama mundial amante de los dulces y los misterios?",
                options: ["Pikachu", "Light Yagami", "Kira", "L"],
                correctAnswer: 4
            },
            {
                question: "¿Dónde tuvo lugar la primera transformación de Super Saiyajin por parte de Goku?",
                options: ["Corporación Cápsula", "Planeta Namek", "Palacio del Gran Kaio", "Kamehouse"],
                correctAnswer: 2
            },
            {
                question: "¿Quién fue el primer personaje de Dragon Ball Z que logró el Super Saiyajin 2?",
                options: ["Goku", "Gohan", "Vegeta", "Trunks"],
                correctAnswer: 2
            },
            {
                question: "¿Quién es conocido como el One Punch Man?",
                options: ["Genos", "Garou", "Fubuki", "Saitama"],
                correctAnswer: 4
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
            questionText.textContent = "Tu puntaje puntaje final ha sido de " + score + "/10 ⭐";
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