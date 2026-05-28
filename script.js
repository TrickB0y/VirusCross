// palavras possiveis e suas explicacoes
const possibleWords = [
    "VIRUS",
    "IMUNIZACAO",
    "RECOMBINACAO"
];

const possibleWordsExplanations = [
    "Agente infeccioso microscópico incapaz de se reproduzir fora da célula hospedeira",
    "Processo que estimula a produção de anticorpos, como ocorre após vacinação",
    "Segmento do genoma viral capaz de sofrer alterações, gerando variabilidade genética"
];

// funcoes seletoras da palavara
function selectRandomWord() {
    return possibleWords[(Math.floor(Math.random() * 1000000) % possibleWords.length)];
}

function findWordExplanation(word) {
    return possibleWordsExplanations[possibleWords.indexOf(word)];
}

//setup do jogo
let attemptWord = selectRandomWord();
let attemptExplanation = findWordExplanation(attemptWord);

let explanationDocBox = document.getElementById("wordExplanation");

explanationDocBox.textContent = "Dica: " + attemptExplanation;


let attemptDocBox = document.getElementById("currentAttempt");


// area de gameplay
//
//
//
let letras = [];
let acertos = 0;
let erros = 0;

function digitado(code) {
    if (code === "Backspace") {
        let letra = letras.pop()
        if(letra) {
            letra.remove();
        }
    }
    if (code === "Enter") {
        testWord()
    }
    if (code === "KeyA") {
        // Lógica para a tecla A
        let letra = document.createElement("div");
        letra.textContent = "A";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }   
    if (code === "KeyB") {
        // Lógica para a tecla B
        let letra = document.createElement("div");
        letra.textContent = "B";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyC") {
        // Lógica para a tecla C
        let letra = document.createElement("div");
        letra.textContent = "C";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyD") {
        // Lógica para a tecla D
        let letra = document.createElement("div");
        letra.textContent = "D";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyE") {
        // Lógica para a tecla E
        let letra = document.createElement("div");
        letra.textContent = "E";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyF") {
        // Lógica para a tecla F
        let letra = document.createElement("div");
        letra.textContent = "F";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyG") {
        // Lógica para a tecla G
        let letra = document.createElement("div");
        letra.textContent = "G";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyH") {
        // Lógica para a tecla H
        let letra = document.createElement("div");
        letra.textContent = "H";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyI") {
        // Lógica para a tecla I
        let letra = document.createElement("div");
        letra.textContent = "I";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyJ") {
        // Lógica para a tecla J
        let letra = document.createElement("div");
        letra.textContent = "J";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyK") {
        // Lógica para a tecla K
        let letra = document.createElement("div");
        letra.textContent = "K";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyL") {
        // Lógica para a tecla L
        let letra = document.createElement("div");
        letra.textContent = "L";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyM") {
        // Lógica para a tecla M
        let letra = document.createElement("div");
        letra.textContent = "M";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyN") {
        // Lógica para a tecla N
        let letra = document.createElement("div");
        letra.textContent = "N";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyO") {
        // Lógica para a tecla O
        let letra = document.createElement("div");
        letra.textContent = "O";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyP") {
        // Lógica para a tecla P
        let letra = document.createElement("div");
        letra.textContent = "P";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyQ") {
        // Lógica para a tecla Q
        let letra = document.createElement("div");
        letra.textContent = "Q";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyR") {
        // Lógica para a tecla R
        let letra = document.createElement("div");
        letra.textContent = "R";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyS") {
        // Lógica para a tecla S
        let letra = document.createElement("div");
        letra.textContent = "S";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyT") {
        // Lógica para a tecla T
        let letra = document.createElement("div");
        letra.textContent = "T";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyU") {
        // Lógica para a tecla U
        let letra = document.createElement("div");
        letra.textContent = "U";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyV") {
        // Lógica para a tecla V
        let letra = document.createElement("div");
        letra.textContent = "V";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyW") {
        // Lógica para a tecla W
        let letra = document.createElement("div");
        letra.textContent = "W";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyX") {
        // Lógica para a tecla X
        let letra = document.createElement("div");
        letra.textContent = "X";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyY") {
        // Lógica para a tecla Y
        let letra = document.createElement("div");
        letra.textContent = "Y";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
    if (code === "KeyZ") {
        // Lógica para a tecla Z
        let letra = document.createElement("div");
        letra.textContent = "Z";
        attemptDocBox.appendChild(letra);

        letras.push(letra);
    }
}

document.addEventListener("keydown", (event) => {
    const tecla = event.key;
    const codigo = event.code;

    console.log(`Tecla: ${tecla} | Code: ${codigo}`)
    digitado(codigo);
});

//funcao que compara a palavra pra saber se o usuario acertou
function testWord() {

    let word = "";

    for (let letra of letras) {
        word += letra.textContent;
    }

    if (word.toUpperCase() == attemptWord.toUpperCase()) {
        const corOriginal = getComputedStyle(document.body).backgroundColor;

        document.body.style.backgroundColor = "#118d11"

        acertos++;
        document.getElementById("acertos").textContent = `Acertos: ${acertos}`;

        for(let i = letras.length; i > 0; i--) {
            let letraAtual = letras.pop()
            if(letraAtual) {
                letraAtual.remove();
            }
        }
        attemptWord = selectRandomWord();
        attemptExplanation = findWordExplanation(attemptWord);
        explanationDocBox.textContent = "Dica: " + attemptExplanation;
        setTimeout(() => {
            document.body.style.backgroundColor = corOriginal;
            }, 500
        );
    }
    else {
        const corOriginal = getComputedStyle(document.body).backgroundColor;
        
        document.body.style.backgroundColor = "#d33939"

        erros++;
        document.getElementById("erros").textContent = `Erros: ${erros}`
        setTimeout(() => {
            document.body.style.backgroundColor = corOriginal;
            }, 500
        );
    }
}
