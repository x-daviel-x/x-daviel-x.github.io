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
const questionTime = 15000; // Tiempo por pregunta en segundos
let countdownTimer;
let questions = [
    {
        question: "Selecciona la imagen de Kimetsu no Yaiba.",
        options: [
            { text: "Kimetsu no Yaiba", imagePath: "../../archivo/colecciones/kimetsu no yaiba/icono.webp" },
            { text: "Dragon Ball", imagePath: "../../archivo/colecciones/dragon ball/icono.webp" },
            { text: "Evangelion", imagePath: "../../archivo/colecciones/evangelion/icono.webp" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Dragon Ball.",
        options: [
            { text: "Dragon Ball", imagePath: "../../archivo/colecciones/dragon ball/icono.webp" },
            { text: "Evangelion", imagePath: "../../archivo/colecciones/evangelion/icono.webp" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.webp" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Neon Genesis Evangelion.",
        options: [
            { text: "Evangelion", imagePath: "../../archivo/colecciones/evangelion/icono.webp" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.webp" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.webp" },
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Fullmetal Alchemist.",
        options: [
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.webp" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.webp" },
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.webp" },
            { text: "Los siete pecados capitales", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.webp" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Ghost in the Shell.",
        options: [
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.webp" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.webp" },
            { text: "Los siete pecados capitales", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.webp" },
            { text: "My hero academia", imagePath: "../../archivo/colecciones/my hero academia/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Hunter x Hunter.",
        options: [
            { text: "Los siete pecados capitales", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.webp" },
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.webp" },
            { text: "My Hero Academia", imagePath: "../../archivo/colecciones/my hero academia/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Los siete pecados capitales.",
        options: [
            { text: "My Hero Academia", imagePath: "../../archivo/colecciones/my hero academia/icono.webp" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de My Hero Academia.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.webp" },
            { text: "My Hero Academia", imagePath: "../../archivo/colecciones/my hero academia/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.webp" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de Naruto.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de One Piece.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Pokemon.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/assassination classroom/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Afro Samurai.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/assassination classroom/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/ataque a los titanes/icono.webp" },
        ],
        correctAnswer: 3
    },



    {
        question: "Selecciona la imagen de Anohana.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/baki/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/ataque a los titanes/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/assassination classroom/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Assassination Classroom.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/banana fish/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/baki/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/ataque a los titanes/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/assassination classroom/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Ataque a los titanes.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/beastars/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/banana fish/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/baki/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/ataque a los titanes/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Baki.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/berserk/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/beastars/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/banana fish/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/baki/icono.webp" },
        ],
        correctAnswer: 4
    },



    {
        question: "Selecciona la imagen de Banana Fish.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/banana fish/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/beastars/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/berserk/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/black clover/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Beastars.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/beastars/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/berserk/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/black clover/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/bleach/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Berserk.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/berserk/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/black clover/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/bleach/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/cardcaptor sakura/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Black Clover.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/black clover/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/bleach/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cardcaptor sakura/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/cells at work!/icono.webp" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Bleach.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/cardcaptor sakura/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/bleach/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/cells at work!/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/chainsaw man/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Cardcaptor Sakura.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cells at work!/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/cardcaptor sakura/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/chainsaw man/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/code geass/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Cells at Work!.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/chainsaw man/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cells at work!/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/code geass/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/cowboy bebop/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Chainsaw Man.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/code geass/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/chainsaw man/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cowboy bebop/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/darwins game/icono.webp" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de Code Geass.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/darwins game/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/cowboy bebop/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/code geass/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/death note/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Cowboy Bebop.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/death note/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/darwins game/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/cowboy bebop/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Darwin's game.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/death note/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/darwins game/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/dr. stone/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Death Note.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/dr. stone/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/death note/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/fire force/icono.webp" },
        ],
        correctAnswer: 3
    },



    {
        question: "Selecciona la imagen de Digimon Adventure.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/haikyu!!/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/fire force/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/dr. stone/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Dr. Stone.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/inuyasha/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/haikyu!!/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/fire force/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/dr. stone/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Fire Force.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/jujutsu kaisen/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/inuyasha/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/haikyu!!/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/fire force/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Haikyu!!.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/kakegurui/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/jujutsu kaisen/icono.webp" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/inuyasha/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/haikyu!!/icono.webp" },
        ],
        correctAnswer: 4
    },



    {
        question: "Selecciona la imagen de Inuyasha.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/inuyasha/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/jujutsu kaisen/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/kakegurui/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Jujutsu Kaisen.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/jujutsu kaisen/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/kakegurui/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/mob psycho 100/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Kakegurui.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/kakegurui/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/mob psycho 100/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/owari no seraph/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Los Caballeros del Zodiaco.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/mob psycho 100/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/owari no seraph/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/sailor moon/icono.webp" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Mob Psycho 100.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/owari no seraph/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/mob psycho 100/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/sailor moon/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/slam dunk/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Owari no Seraph.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/sailor moon/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/owari no seraph/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/slam dunk/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/super campeones/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Sailor Moon.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/slam dunk/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/sailor moon/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/super campeones/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/tokyo ghoul/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Slam Dunk.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/super campeones/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/slam dunk/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/tokyo ghoul/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/tokyo revengers/icono.webp" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de Super Campeones.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/tokyo revengers/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/tokyo ghoul/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/super campeones/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/yu-gi-oh!/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Tokyo Ghoul.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/yu-gi-oh!/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/tokyo revengers/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/tokyo ghoul/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/akame ga kill!/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Tokyo Revengers.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/akame ga kill!/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/yu-gi-oh!/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/tokyo revengers/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/akatsuki no yona/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Yu-Gi-Oh!.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/akatsuki no yona/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/akame ga kill!/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/yu-gi-oh!/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/baccano!/icono.webp" },
        ],
        correctAnswer: 3
    },



    {
        question: "Selecciona la imagen de Akame ga Kill!.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/baccano!/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/akatsuki no yona/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/akame ga kill!/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Akatsuki no Yona.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/darling in the franxx/icono.webp" },
            { text: "Pokemon", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/baccano!/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/akatsuki no yona/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Baccano!.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/detective conan/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/darling in the franxx/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/baccano!/icono.webp" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Bakugan Battle Brawlers.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/diamond no ace/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/detective conan/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/darling in the franxx/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.webp" },
        ],
        correctAnswer: 4
    },



    {
        question: "Selecciona la imagen de DARLING in the FRANXX.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/darling in the franxx/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/detective conan/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/diamond no ace/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Detective Conan.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/detective conan/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/diamond no ace/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/fairy tail/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Diamond no Ace.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/animes/diamond no ace/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/fairy tail/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/gurren lagann/icono.webp" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Espíritu de lucha.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/fairy tail/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/gurren lagann/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/hellsing/icono.webp" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Fairy Tail.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/gurren lagann/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/fairy tail/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/hellsing/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Gurren Lagan.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/hellsing/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/gurren lagann/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Hellsing.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/hellsing/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/kill la kill/icono.webp" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Himouto! Umaru-chan.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/kill la kill/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/kyoko suiri/icono.webp" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de JoJo's Bizarre Adventure.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/kyoko suiri/icono.webp" },
            { text: "One Piece", imagePath: "../../archivo/animes/kill la kill/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/mirai nikki/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Kill la Kill.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/mirai nikki/icono.webp" },
            { text: "Naruto", imagePath: "../../archivo/animes/kyoko suiri/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/kill la kill/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/one punch-man/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Kyoko Suiri.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/animes/one punch-man/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/mirai nikki/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/kyoko suiri/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/parasyte the maxim/icono.webp" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Mirai Nikki.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/parasyte the maxim/icono.webp" },
            { text: "Anohana", imagePath: "../../archivo/animes/one punch-man/icono.webp" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/mirai nikki/icono.webp" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/preparatoria de  los muertos/icono.webp" },
        ],
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
    questionText.textContent = "Tu puntaje final ha sido " + score + " ⭐";
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
