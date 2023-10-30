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
            { text: "Kimetsu no Yaiba", imagePath: "../../archivo/colecciones/kimetsu no yaiba/icono.png" },
            { text: "Dragon Ball", imagePath: "../../archivo/colecciones/dragon ball/icono.png" },
            { text: "Evangelion", imagePath: "../../archivo/colecciones/evangelion/icono.png" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Dragon Ball.",
        options: [
            { text: "Dragon Ball", imagePath: "../../archivo/colecciones/dragon ball/icono.png" },
            { text: "Evangelion", imagePath: "../../archivo/colecciones/evangelion/icono.png" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.png" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Neon Genesis Evangelion.",
        options: [
            { text: "Evangelion", imagePath: "../../archivo/colecciones/evangelion/icono.png" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.png" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.png" },
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Fullmetal Alchemist.",
        options: [
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/fullmetal alchemist/icono.png" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.png" },
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.png" },
            { text: "Los siete pecados capitales", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.png" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Ghost in the Shell.",
        options: [
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.png" },
            { text: "Ghost in the Shell", imagePath: "../../archivo/colecciones/ghost in the shell/icono.png" },
            { text: "Los siete pecados capitales", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.png" },
            { text: "My hero academia", imagePath: "../../archivo/colecciones/my hero academia/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Hunter x Hunter.",
        options: [
            { text: "Los siete pecados capitales", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.png" },
            { text: "Hunter x Hunter", imagePath: "../../archivo/colecciones/hunter x hunter/icono.png" },
            { text: "My Hero Academia", imagePath: "../../archivo/colecciones/my hero academia/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Los siete pecados capitales.",
        options: [
            { text: "My Hero Academia", imagePath: "../../archivo/colecciones/my hero academia/icono.png" },
            { text: "Fullmetal Alchemist", imagePath: "../../archivo/colecciones/los siete pecados capitales/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de My Hero Academia.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.png" },
            { text: "My Hero Academia", imagePath: "../../archivo/colecciones/my hero academia/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.png" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de Naruto.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/colecciones/naruto/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de One Piece.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/colecciones/one piece/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Pokemon.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/colecciones/pokemon/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/assassination classroom/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Afro Samurai.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/assassination classroom/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/afro samurai/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/ataque a los titanes/icono.png" },
        ],
        correctAnswer: 3
    },



    {
        question: "Selecciona la imagen de Anohana.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/baki/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/ataque a los titanes/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/assassination classroom/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/anohana/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Assassination Classroom.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/banana fish/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/baki/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/ataque a los titanes/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/assassination classroom/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Ataque a los titanes.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/beastars/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/banana fish/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/baki/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/ataque a los titanes/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Baki.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/berserk/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/beastars/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/banana fish/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/baki/icono.png" },
        ],
        correctAnswer: 4
    },



    {
        question: "Selecciona la imagen de Banana Fish.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/banana fish/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/beastars/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/berserk/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/black clover/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Beastars.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/beastars/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/berserk/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/black clover/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/bleach/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Berserk.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/berserk/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/black clover/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/bleach/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/cardcaptor sakura/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Black Clover.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/black clover/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/bleach/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cardcaptor sakura/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/cells at work!/icono.png" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Bleach.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/cardcaptor sakura/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/bleach/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/cells at work!/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/chainsaw man/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Cardcaptor Sakura.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cells at work!/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/cardcaptor sakura/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/chainsaw man/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/code geass/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Cells at Work!.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/chainsaw man/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cells at work!/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/code geass/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/cowboy bebop/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Chainsaw Man.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/code geass/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/chainsaw man/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/cowboy bebop/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/darwin's game/icono.png" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de Code Geass.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/darwin's game/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/cowboy bebop/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/code geass/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/death note/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Cowboy Bebop.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/death note/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/darwin's game/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/cowboy bebop/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Darwin's game.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/death note/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/darwin's game/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/dr. stone/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Death Note.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/dr. stone/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/death note/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/fire force/icono.png" },
        ],
        correctAnswer: 3
    },



    {
        question: "Selecciona la imagen de Digimon Adventure.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/haikyu!!/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/fire force/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/dr. stone/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/digimon adventure/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Dr. Stone.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/inuyasha/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/haikyu!!/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/fire force/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/dr. stone/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Fire Force.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/jujutsu kaisen/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/inuyasha/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/haikyu!!/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/fire force/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Haikyu!!.",
        options: [
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/kakegurui/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/jujutsu kaisen/icono.png" },
            { text: "Afro Samurai", imagePath: "../../archivo/animes/inuyasha/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/haikyu!!/icono.png" },
        ],
        correctAnswer: 4
    },



    {
        question: "Selecciona la imagen de Inuyasha.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/inuyasha/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/jujutsu kaisen/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/kakegurui/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Jujutsu Kaisen.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/jujutsu kaisen/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/kakegurui/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/mob psycho 100/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Kakegurui.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/kakegurui/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/mob psycho 100/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/owari no seraph/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Los Caballeros del Zodiaco.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/los caballeros del zodiaco/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/mob psycho 100/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/owari no seraph/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/sailor moon/icono.png" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Mob Psycho 100.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/owari no seraph/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/mob psycho 100/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/sailor moon/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/slam dunk/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Owari no Seraph.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/sailor moon/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/owari no seraph/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/slam dunk/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/super campeones/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Sailor Moon.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/slam dunk/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/sailor moon/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/super campeones/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/tokyo ghoul/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Slam Dunk.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/super campeones/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/slam dunk/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/tokyo ghoul/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/tokyo revengers/icono.png" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de Super Campeones.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/tokyo revengers/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/tokyo ghoul/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/super campeones/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/yu-gi-oh!/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Tokyo Ghoul.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/yu-gi-oh!/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/tokyo revengers/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/tokyo ghoul/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/akame ga kill!/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Tokyo Revengers.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/akame ga kill!/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/yu-gi-oh!/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/tokyo revengers/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/akatsuki no yona/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Yu-Gi-Oh!.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/akatsuki no yona/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/akame ga kill!/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/yu-gi-oh!/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/baccano!/icono.png" },
        ],
        correctAnswer: 3
    },



    {
        question: "Selecciona la imagen de Akame ga Kill!.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/baccano!/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/akatsuki no yona/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/akame ga kill!/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Akatsuki no Yona.",
        options: [
            { text: "Afro Samurai", imagePath: "../../archivo/animes/darling in the franxx/icono.png" },
            { text: "Pokemon", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/baccano!/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/akatsuki no yona/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Baccano!.",
        options: [
            { text: "Pokemon", imagePath: "../../archivo/animes/detective conan/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/darling in the franxx/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/baccano!/icono.png" },
        ],
        correctAnswer: 4
    },
    {
        question: "Selecciona la imagen de Bakugan Battle Brawlers.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/diamond no ace/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/detective conan/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/darling in the franxx/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/bakugan battle brawlers/icono.png" },
        ],
        correctAnswer: 4
    },



    {
        question: "Selecciona la imagen de DARLING in the FRANXX.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/darling in the franxx/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/detective conan/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/diamond no ace/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Detective Conan.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/detective conan/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/diamond no ace/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/fairy tail/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Diamond no Ace.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/animes/diamond no ace/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/fairy tail/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/gurren lagann/icono.png" },
        ],
        correctAnswer: 1
    },
    {
        question: "Selecciona la imagen de Espíritu de lucha.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/espiritu de lucha/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/fairy tail/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/gurren lagann/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/hellsing/icono.png" },
        ],
        correctAnswer: 1
    },



    {
        question: "Selecciona la imagen de Fairy Tail.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/gurren lagann/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/fairy tail/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/hellsing/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Gurren Lagan.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/hellsing/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/gurren lagann/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Hellsing.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/hellsing/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/kill la kill/icono.png" },
        ],
        correctAnswer: 2
    },
    {
        question: "Selecciona la imagen de Himouto! Umaru-chan.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/himouto! umaru-chan/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/kill la kill/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/kyoko suiri/icono.png" },
        ],
        correctAnswer: 2
    },



    {
        question: "Selecciona la imagen de JoJo's Bizarre Adventure.",
        options: [
            { text: "Banana Fish", imagePath: "../../archivo/animes/kyoko suiri/icono.png" },
            { text: "One Piece", imagePath: "../../archivo/animes/kill la kill/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/jojo's bizarre adventure/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/mirai nikki/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Kill la Kill.",
        options: [
            { text: "One Piece", imagePath: "../../archivo/animes/mirai nikki/icono.png" },
            { text: "Naruto", imagePath: "../../archivo/animes/kyoko suiri/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/kill la kill/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/one punch-man/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Kyoko Suiri.",
        options: [
            { text: "Naruto", imagePath: "../../archivo/animes/one punch-man/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/mirai nikki/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/kyoko suiri/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/parasyte the maxim/icono.png" },
        ],
        correctAnswer: 3
    },
    {
        question: "Selecciona la imagen de Mirai Nikki.",
        options: [
            { text: "Anohana", imagePath: "../../archivo/animes/parasyte the maxim/icono.png" },
            { text: "Anohana", imagePath: "../../archivo/animes/one punch-man/icono.png" },
            { text: "Assassination Classroom", imagePath: "../../archivo/animes/mirai nikki/icono.png" },
            { text: "Ataque a los titanes", imagePath: "../../archivo/animes/preparatoria de  los muertos/icono.png" },
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
