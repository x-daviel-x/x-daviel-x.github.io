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
        question: "¿Cuál es el nombre japonés de Ash Ketchum en Pokémon?",
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
        question: "¿Cómo se llama en la versión japonesa la escuela a la que va Ozora Tsubasa en Supercampeones?",
        options: ["Toho", "Shutetsu", "Nankatsu", "Yamamoto"],
        correctAnswer: 3
    },
    {
        question: "¿Qué deporte juega Sakuragi en Slam Dunk?",
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
        question: "¿Quién resolvió el Rompecabezas del Milenio en Yu-Gi-Oh!?",
        options: ["Joey Wheeler", "Bakura", "Seto Kaiba", "Yugi Muto"],
        correctAnswer: 4
    },
    {
        question: "¿Qué serie de anime cuenta la historia de la organización contra el terrorismo cibernético Sección de Seguridad Pública 9?",
        options: ["Darker than Black", "Ghost in the Shell", "Neon Genesis Evangelion", "Paranoia Agent"],
        correctAnswer: 2
    },
    {
        question: "¿Cuántas esferas del dragón hay en Dragon Ball?",
        options: ["Ocho", "Seis", "Cinco", "Siete"],
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
        question: "¿Quién es miembro de una raza guerrera extraterrestre llamada Saiyajin en Dragon Ball?",
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
        question: "¿Con quién se casó Vegeta en Dragon Ball?",
        options: ["Milk", "Bulma", "Videl", "Launch"],
        correctAnswer: 2
    },
    {
        question: "¿Quién es un genio detective de fama mundial amante de los dulces y los misterios en Death Note?",
        options: ["Pikachu", "Light Yagami", "Kira", "L"],
        correctAnswer: 4
    },
    {
        question: "¿Dónde tuvo lugar la primera transformación de Super Saiyajin por parte de Goku en Dragon Ball Z?",
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
    {
        question: "¿Cuál es el nombre de  un shinigami en Death Note?",
        options: ["Ryuk", "Shinji", "Light", "L"],
        correctAnswer: 1
    },
    {
        question: "En Naruto, ¿qué tipo de técnica es el Rasengan?",
        options: ["Genjutsu", "Taijutsu", "Ninjutsu", "Kenjutsu"],
        correctAnswer: 3
    },
    {
        question: "¿Quién es un demonio cruel y maligno en Inuyasha?",
        options: ["Zorro", "Dragón", "Gato", "Naraku"],
        correctAnswer: 4
    },
    {
        question: "En One Piece, ¿cuál es el objetivo principal de Monkey D. Luffy?",
        options: ["Encontrar a su padre", "Convertirse en el luchador más fuerte", "Convertirse en el Rey de los Piratas y encontrar el One Piece", "Rescatar a su hermano"],
        correctAnswer: 3
    },
    {
        question: "¿Cuál es el título de Fullmetal Alchemist en japonés?",
        options: ["Fullmetal Alchemist", "Hagane no Renkinjutsushi", "Elric Brothers", "Alquimia Pura"],
        correctAnswer: 2
    },
    {
        question: "¿En qué serie de anime la protagonista es una cazadora de cartas mágicas?",
        options: ["Bleach", "Sakura Card Captor", "Ataque a los titanes", "Dragon Ball Z Kai"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es la profesión de Koro-sensei en Assassination Classroom?",
        options: ["Profesor", "Médico", "Cazador de recompensas", "Chef"],
        correctAnswer: 1
    },
    {
        question: "¿Qué poder especial tiene Mob en Mob Psycho 100?",
        options: ["Telequinesis", "Control del tiempo", "Transformación", "Invisibilidad"],
        correctAnswer: 1
    },
    {
        question: "¿Qué tipo de criaturas son los Hollows en Bleach?",
        options: ["Demonios", "Espíritus", "Zombis", "Almas corrompidas"],
        correctAnswer: 4
    },
    {
        question: "¿Cuál es el título de Ataque a los titanes en japonés?",
        options: ["Shingeki no Kyojin", "Titans vs. Humanity", "Eren's Revenge", "The Wall"],
        correctAnswer: 1
    },
    {
        question: "¿Quién es el famoso espadachín en One Piece con una espada en cada mano?",
        options: ["Zoro", "Luffy", "Sanji", "Nami"],
        correctAnswer: 1
    },
    {
        question: "¿En qué serie de anime los personajes son atrapados en un videojuego de supervivencia?",
        options: ["Log Horizon", "No Game No Life", "Sword Art Online", "Overlord"],
        correctAnswer: 3
    },
    {
        question: "¿Cuál es el nombre del hermano de Edward Elric en Fullmetal Alchemist?",
        options: ["Roy", "Alphonse", "Scar", "Ling"],
        correctAnswer: 2
    },
    {
        question: "¿Qué significa Naruto en japonés?",
        options: ["Demonio", "Ninja", "Remolino", "Ramen"],
        correctAnswer: 3
    },
    {
        question: "¿Cuál es el apodo del personaje principal en One Punch Man?",
        options: ["El mago", "El héroe calvo", "El nija", "El pervertido"],
        correctAnswer: 2
    },
        {
        question: "¿Qué tipo de arma utiliza Yoko Littner en Gurren Lagann?",
        options: ["Katana", "Pistola", "Rifle de francotirador", "Espada láser"],
        correctAnswer: 3
    },
    {
        question: "¿Cómo se llama la organización secreta que protege la Tierra de los alienígenas en Gintama?",
        options: ["Shinsengumi", "Yorozuya", "Amanto", "Shogunato"],
        correctAnswer: 2
    },
    {
        question: "¿En qué serie de anime los personajes juegan al Mahjong y desafían a los dioses?",
        options: ["Saki", "Death Parade", "Kaiji", "Kakegurui"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el título del pirata más fuerte en One Piece?",
        options: ["Emperador pirata", "Capitán pirata", "Rey pirata", "Almirante pirata"],
        correctAnswer: 3
    },
    {
        question: "¿Quién es conocido como el Pirata del Sombrero de Paja en One Piece?",
        options: ["Roronoa Zoro", "Monkey D. Luffy", "Sanji Vinsmoke", "Nico Robin"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál criatura es el compañero de Ash Ketchum en Pokémon?",
        options: ["Charizard", "Pikachu", "Bulbasaur", "Squirtle"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el nombre del legendario shinobi conocido como El relámpago amarillo de Konoha en Naruto?",
        options: ["A (Raikage)", "Tobirama Senju", "Might Guy", "Minato Namikaze"],
        correctAnswer: 4
    },
    {
        question: "¿Cuál es el nombre del protagonista en Akira?",
        options: ["Shōtarō Kaneda", "Tetsuo Shima", "El coronel (Taisa)", "Miyako"],
        correctAnswer: 1
    },
    {
        question: "¿Qué personaje en Neon Genesis Evangelion es conocido como El segundo niño?",
        options: ["Rei Ayanami", "Shinji Ikari", "Asuka Langley Soryu", "Kaworu Nagisa"],
        correctAnswer: 3
    },
    {
        question: "¿En Cowboy Bebop, qué instrumento musical toca Faye Valentine?",
        options: ["Trompeta", "Guitarra", "Arpa", "Armonio"],
        correctAnswer: 4
    },
    {
        question: "¿Cuál es el nombre del protagonista en Cowboy Bebop?",
        options: ["Spike Spiegel", "Jet Black", "Laughing Bull", "Edward Wong Hau Pepelu Tivrusky IV"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el nombre del protagonista en Black Clover?",
        options: ["Asta", "Yuno", "Noelle", "Mimosa"],
        correctAnswer: 1
    },
    {
        question: "En Hunter x Hunter, ¿cuál es el nombre del examinador principal del Examen de Cazador?",
        options: [" Hisoka Morow", "Ging Freecss", "Isaac Netero", "Leorio Paradinight"],
        correctAnswer: 3
    },
    {
        question: "¿Qué serie de anime sigue las aventuras de un joven cazador de demonios llamado Tanjiro Kamado?",
        options: ["One Piece", "Kimetsu no Yaiba (Demon Slayer)", "My Hero Academia", "Boruto: Naruto Next Generations"],
        correctAnswer: 2
    },
    {
        question: "¿Cuál es el nombre del protagonista en Bleach?",
        options: [" Ichigo Kurosaki", "Rukia Kuchiki", "Uryu Ishida", "Orihime Inoue"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el título del arco en Ataque a los titanes donde se revela la verdad detrás de los titanes?",
        options: ["Arco de Shiganshina", "Arco de Trost", "Arco de Levi", "Arco de Reiner"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es el nombre del demonio que posee el libro Grimorio de Asta en Black Clover?",
        options: ["Diablo", "Zagred", "Liebe", "Lilith"],
        correctAnswer: 3
    },
    {
        question: "¿Cuál es el nombre del protagonista en My Hero Academia?",
        options: ["Shoto Todoroki", "All Might", "Izuku Midoriya", "Katsuki Bakugo"],
        correctAnswer: 3
    },
    {
        question: "¿Cuál es el nombre de la institución de élite donde estudian los héroes en My Hero Academia?",
        options: ["Academia U.A.", "Instituto Yuuei", "Instituto Musutafu", "Instituto Heroico"],
        correctAnswer: 1
    },
    {
        question: "En Kimetsu no Yaiba (Demon Slayer), ¿cuál es la respiración utilizada por Tanjiro Kamado?",
        options: ["Respiración del Rayo", "Respiración del Agua", "Respiración del Sol", "Respiración del Viento"],
        correctAnswer: 3
    },
    {
        question: "En Naruto, ¿cuál es el título del arco  donde Sasuke se une a Orochimaru?",
        options: ["Arco de los Exámenes Chūnin", "Arco del Regreso de Itachi", "Arco de la Aldea de la Arena", "Arco de la Búsqueda de Sasuke"],
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
    
    // Restablecer estilos de los botones al mostrar la siguiente pregunta
    optionButtons.forEach((button) => {
        button.classList.remove("correcto", "incorrecto");
        button.disabled = false;
    });

    const h2Elements = document.querySelectorAll('.h2');
    h2Elements.forEach((element) => {
        element.classList.remove('correcto', 'incorrecto');
    });

    const BarraP = document.querySelectorAll('.progreso');
    BarraP.forEach((element) => {
        element.classList.remove('correcto', 'incorrecto');
    });


    if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;

        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].textContent = question.options[i];
        }

        startCountdown();
    } else {
        showFinalMessage();
    }
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
    message.classList.add("incorrecto");
    progressBar.classList.add("incorrecto");

    disableOptions();

    setTimeout(() => {
        message.textContent = "";
        showNextQuestion();
    }, 1000);
}

// Función para verificar si la opción es corrrecta o incorrecta
function checkAnswer(selectedIndex) {
    clearInterval(countdownTimer); // Detener la cuenta regresiva

    if (currentQuestionIndex >= maxQuestions) {
        return; // Evita que se sigan procesando respuestas
    }

    const question = questions[currentQuestionIndex];
    const selectedButton = optionButtons[selectedIndex - 1];

    if (selectedIndex === question.correctAnswer) {
        score++;
        message.textContent = "✔";
        correctSound.play(); // Reproduce el sonido de respuesta correcta
        selectedButton.classList.add("correcto");
        message.classList.add("correcto");
        progressBar.classList.add("correcto");
    } else {
        message.textContent = "✖";
        incorrectSound.play(); // Reproduce el sonido de respuesta incorrecta
        selectedButton.classList.add("incorrecto");
        message.classList.add("incorrecto");
        progressBar.classList.add("incorrecto");
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

// Función para mostrar el mensaje final
function showFinalMessage() {
    questionText.textContent = "Tu puntaje final ha sido " + score + "/10 ⭐";
    message.textContent = "";
    timeDisplay.style.display = "none";
    document.getElementById("restartButton").style.display = "block";

    removeButtons(); // Elimina los botones de opción
}

startQuiz();