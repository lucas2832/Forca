let palavra = "";
let pOculta = [];
let erros = 0;
document.querySelector('#letra').disabled = true;
document.querySelector('#botao').disabled = true;
const caveira = [
    document.querySelector(".cabeca"),
    document.querySelector(".costelas"),
    document.querySelector(".braco-direito"),
    document.querySelector(".braco-esquerdo"),
    document.querySelector(".perna-direita"),
    document.querySelector(".perna-esquerda")
];

function salvar() {
    palavra = document.querySelector('#palavra').value.toLowerCase();

    if (palavra.trim() === "") {
        alert("Por favor, insira uma palavra válida!");
        return;
    }

    const div = document.getElementById('escolha');
    div.innerHTML = "Vamos começar!!!";
    pOculta = Array(palavra.length).fill("_ ");

    let p = document.getElementById('palavraOculta');
    p.innerHTML = pOculta.join(" ");

    document.querySelector('#escolhaletra').style.opacity = 100;
    document.querySelector('#letra').disabled = false;
    document.querySelector('#botao').disabled = false;
}

function verificar() {
    let letra = document.querySelector('#letra');
    let l = letra.value.toLowerCase();
    letra.value = "";
    let encontrado = false;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === l) {
            encontrado = true;
            pOculta[i] = l;
        }
    }

    let p = document.getElementById('palavraOculta');
    p.innerHTML = pOculta.join(" ");

    if (!encontrado) {
        if (erros < caveira.length) {
            caveira[erros].classList.remove("parte");
            erros++;
        }

        if (erros === caveira.length) {
            p.innerHTML = palavra;
            finalizarJogo("Você perdeu!!");
        }
    } else if (pOculta.join("") === palavra) {
        finalizarJogo("Você venceu!!!");
    }
}

function finalizarJogo(mensagem) {
    document.getElementById('escolha').innerHTML = mensagem;

    document.querySelector('#letra').disabled = true;
    document.querySelector('#botao').disabled = true;
}