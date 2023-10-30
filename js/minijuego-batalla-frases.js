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
const questionTime = 20000; // Tiempo por pregunta en segundos
let countdownTimer;
let questions = [
    {
        frase: "«¡No te rindas antes de intentarlo! Eso no es la forma en que soy!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Goku / Dragon Ball", "Naruto / Naruto", "Monkey D. Luffy / One Piece", "Ichigo Kurosaki / Bleach"],
        respuestaCorrecta: 3
    },

    {
        frase: "«Cada vez que reímos, cada vez que lloramos, estamos absorbiendo la humedad del aire y los recuerdos.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Sakata Gintoki / Gintama.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },

    {
        frase: "«Dibuja un círculo, esa es la primera ley de la alquimia. En el corazón de la alquimia creas, solo una cosa de un cuerpo completo. No existe la creación ni la vida sin sacrificio.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Edward Elric / Fullmetal Alchemist", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Si estás dispuesto a vivir en un mundo sin luz, ¡eso es tu elección! Como mago, ¡nunca lo haré!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Laxus Dreyar / Fairy Tail", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«El mundo está lleno de cosas que nunca experimentarás. ¡Ve y encuéntralas!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Giovanni / Re:Zero", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Cuando te encuentres en un punto sin retorno, prepárate para enfrentar la derrota. Tú eres débil, por lo que los débiles no tienen derecho a soñar.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Johan Liebert / Monster", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Voy a conseguir el trabajo porque puedo hacerlo. Lo obtendré por mi propia habilidad.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Roronoa Zoro / One Piece.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Un lugar donde alguien aún piensa en ti es un lugar al que puedes volver.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Jiraiya / Naruto.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«No necesitamos una razón para ayudar a alguien»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Zoro Roronoa / One Piece.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Cada pelea es una historia, y en cada historia hay un ganador y un perdedor.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Ippo Makunouchi / Espíritu de Lucha", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«No me importa quién esté escuchando. ¡No me importa si soy el héroe o el villano! Si el mundo me dice que soy un criminal, entonces eso es lo que soy»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Lelouch vi Britannia / Code Geass.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Soy un luchador, no un asesino!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Son Gohan / Dragon Ball Z", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Yo soy el alma de mi espada.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: [" Ichigo Kurosaki / Bleach", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Si no puedes encontrar un camino, créalo tú mismo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Senku Ishigami / Dr. Stone", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Amo la paz más que la justicia.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Kenshin Himura / Rurouni Kenshin", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Soy la capitana de la Cuarta División. Aquellos a quienes curo, nunca vuelven a pelear. Si luchas contra mí, no es una curación, sino una sentencia de muerte.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Retsu Unohana / Bleach", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Las flores florecen y se marchitan. Las estrellas brillan, incluso entonces, se estrellan. La Tierra gira, aún entonces se enfría. Todo cambia. Así es como funciona el mundo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Jaden Yuki/ Yu-Gi-Oh! GX", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Gomu Gomu no Pistol!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Monkey D. Luffy / One Piece.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«La determinación de un puñetazo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Saitama / One Punch Man", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Mis amigos son mi poder.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Naruto Uzumaki / Naruto", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡No necesitas una razón para ayudar a alguien!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Monkey D. Luffy / One Piece", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Un corazón es algo que uno debe ganar!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Naruto Uzumaki / Naruto", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡No eres débil! ¡Tienes amigos!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: [" Gon Freecss / Hunter x Hunter", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Las flores florecen y se marchitan. Las estrellas brillan, incluso entonces, se estrellan. La Tierra gira, aún entonces se enfría. Todo cambia. Así es como funciona el mundo!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Yusei Fudo - Yu-Gi-Oh!", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Es hora de la cacería!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Inuyasha, Inuyasha", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡La determinación de un puñetazo!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Saitama / One Punch Man", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Luchar por alguien que amas no es una debilidad, es valentía»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Erza Scarlet / Fairy Tail.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Soy el que aplasta a los dioses!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: [" Shaka de Virgo / Los Caballeros del Zodiaco", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡No importa lo que diga, ¡esto no es una máscara! ¡La quemé cuando luché para rescatar a mi hermano! ¡Y cuando luché contra ti, ¡ya no quedaba nada!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Uryu Ishida / Bleach", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Me quedaré solo con mi espada, en esta soledad que no se puede hablar con palabras!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Himura Kenshin / Rurouni Kenshin", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Estoy solo! Desde el principio, no he tenido a nadie más que a mí. ¡Voy a vivir hasta que sea el rey de los piratas!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Monkey D. Luffy / One Piece", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Si alguien te trata como un muñeco, debes ser un muñeco! »",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Yoshikage Kira / JoJo's Bizarre Adventure", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«¡Soy el amo del tiempo y el espacio, el regidor del destino! ¡La omnipotencia es mi divisa!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Lelouch vi Britannia / Code Geass", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    
    {
        frase: "«¡El poder sin límites me hace fuerte!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Yami Yugi / Yu-Gi-Oh!", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«¡Que alguien me diga que no puedo hacer algo, es como ponerme a prueba!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Edward Elric, Fullmetal Alchemist", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«¡Ni una palabra más! ¡Cuida de aquellos que siguen a tu lado, cuídalos como líder! ¡Y no olvides proteger a todos los que te importan!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Simon / Tengen Toppa Gurren Lagann.", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«¡Debo proteger mi hogar, incluso si soy un lobo solitario!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Roronoa Zoro / One Piece", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«¡Soy el alma de mi espada!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Ichigo Kurosaki / Bleach", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«¡El mejor guerrero no es el que siempre triunfa, sino el que vuelve sin miedo a la batalla!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Jaden Yuki / Yu-Gi-Oh!", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    {
        frase: "«Eres un ser increíble, diste lo mejor de ti y por eso te admiro. Pasaste por varias transformaciones, fuiste tan poderoso que todos nosotros te odiamos.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Son Goku / Dragon Ball Z", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«No vivas con falsedades ni miedos, porque terminarás odiándote a ti mismo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Naruto Uzumaki / Naruto", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },    
    {
        frase: "«¿No es asombroso el cielo? No importa cuantas veces lo mires, nunca es el mismo dos veces. Este cielo de ahora solo existe en este instante.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Hitsugaya Toushiro / Bleach", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    {
        frase: "«¿No es asombroso el cielo? No importa cuantas veces lo mires, nunca es el mismo dos veces. Este cielo de ahora solo existe en este instante.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Hitsugaya Toushiro / Bleach", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Levántate y camina hacia adelante, tienes las piernas para hacerlo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Edward Elric / Fullmetal Alchemist", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«No importa cuán capacitado que estés, tú solo no puedes cambiar el mundo. Pero eso es lo maravilloso del mundo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["L / Death Note", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Había una mujer, fue la primera vez que encontré a alguien que estuviera verdaderamente vivo. Al menos, eso fue lo que pensé. Ella era... la parte de mí que perdí en algún lugar del camino, la parte que faltaba, la que deseaba.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Spike / Cowboy Bebop", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Si la felicidad tuviera una forma, tendría forma de cristal, porque puede estar a tu alrededor sin que la notes. Pero si cambias de perspectiva, puede reflejar una luz capaz de iluminarlo todo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Lelouch vi Britannia / Code Geass", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Nadie puede entender perfectamente a otra persona, ya es bastante difícil entenderse a uno mismo, tal vez por eso la vida es tan interesante.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Ryoji Kaji / Neon Genesis Evangelion", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Si no tienes recuerdos felices, nunca es tarde para comenzar a construirlos.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Dr. Tenma / Monster", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«La gente necesita el miedo para poder sobrevivir. Lo experimentamos, y así podemos hacernos más fuertes.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Maka / Soul Eater", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Escucha bien Simon, y no lo olvides. Cree en ti mismo. No en el mí que cree en ti. Ni en el tú que cree en mí. ¡Cree en el tú... que cree en ti mismo!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Kamina / Tengen Toppa Gurren Lagann", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«En ese momento queríamos crecer para hacer lo que quisiéramos. Pero si lo pienso, jamás volveremos a ser tan libres como entonces.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Anaru / Anohana", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«No se necesitan razones particulares para ayudar a alguien.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Aioria de Leo / Los Caballeros del Zodiaco", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Puedes morir en cualquier momento, pero vivir requiere de valentía.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Kenshin Himura / Sámurai X", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Desde que nacimos... Todos nosotros... ¡Somos libres! No importa que tan fuertes sean quienes nos lo impidan...¡Lucha! ¡Si es por eso, no me importa morir! ¡No importa lo terrible que sea este mundo!... ¡No importa que tan cruel sea! ¡¡Lucha!!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Eren Jagger / Ataque a los titanes", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«La estupidez es mucho más fascinante que la inteligencia. La inteligencia tiene límites, la estupidez no.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Killua / Hunter x Hunter", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Si este es el peor día de tu vida, entonces debes saber que mañana será mejor»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Marco Ikusaba / Mirai Nikki", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Se que no puedo quererte de la forma en que tu quieres, pero yo te voy a querer de la mejor forma que sé.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Inuyasha / Inuyasha", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Confía en tus impulsos, y ni siquiera tus propios pensamientos podrán traicionarte.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Shuichi / Yu Yu Hakusho", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Recuerda, en nuestra vida nosotros no somos lectores, sino escritores.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Gintoki / Gintama", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Rendirse es lo que destruye a la gente, cuando te niegas con todo tu corazón a rendirte entonces trasciendes tu humanidad, incluso ante la muerte nunca te rindas.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Alucard / Hellsing", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Lo importante no es lo que los demás piensen de ti, sino cómo te sientes por ellos.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Meliodas / Los siete pecados capitales", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Los árboles gritan de dolor al morir, pero tú no puedes oírlos.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["San / Princesa Mononoke", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Las cuerdas representan el flujo en si mismo. Las cuerdas se tuercen, se tambalean, se desenredan, se conectan de nuevo. Eso es el tiempo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Taki Tachinaba / Your Name", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Llave que guardas los poderes de la oscuridad, revélame la naturaleza de tu verdadero ser, te lo ordeno por el rango que me ha sido otorgado. ¡Libérate!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Sakura / Sakura Cardcaptor", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Las palabras son como armas, si las usas de la manera equivocada, se convertirán en feas armas.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Conan Edogawa / Detective Conan", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Comienza a temblar Freezer, porque estoy a punto de ser el Super Saiyan que tanto has temido.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Son Goku / Dragon Ball Z", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«La venganza sólo engendra venganza, y el sentimiento de victoria desaparece rápidamente. Como un copo de nieve en la palma de su mano.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Conan Edogawa / Detective Conan", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Cuando un humano tiene que cuidar a alguien, sus poderes incrementan. Tengo lo necesario para vencerte, ¡todo gracias a mi madre humana!»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Inuyasha / Inuyasha", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Ni realmente un demonio, ni realmente humano. No soy ninguno de ellos. Eso es todo. No tenía un lugar para mí, así que tuve que encontrar uno por mi cuenta.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Inuyasha / Inuyasha", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
    },
    
    {
        frase: "«Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo.»",
        pregunta: "<br>¿Quién dijo esta frase y en qué serie?",
        opciones: ["Son Goku / Dragon Ball", "Producción2 / Producción2", "Producción3 / Producción3", "Personaje4 / Producción4"],
        respuestaCorrecta: 1
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
        const pregunta = questions[currentQuestionIndex];
        questionText.innerHTML = pregunta.frase + pregunta.pregunta;

        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].textContent = pregunta.opciones[i];
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

    const pregunta = questions[currentQuestionIndex];
    if (selectedIndex === pregunta.respuestaCorrecta) {
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
    questionText.innerHTML = "Tu puntaje final ha sido " + score + " ⭐";
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