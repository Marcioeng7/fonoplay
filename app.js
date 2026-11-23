let fonemaAtual = '';
let listaAtual = [];
let indiceAtual = 0;
let acertosSessao = 0;
let puladasSessao = 0;
let palavrasPuladas = [];
let tentativasSessao = 0;
let estrelasTotais = parseInt(localStorage.getItem('fonoplay_estrelas')) || 0;

document.getElementById('total-estrelas').innerText = estrelasTotais;

function iniciarTreino(fonema) {
    fonemaAtual = fonema;
    listaAtual = bancoExercicios[fonema];
    indiceAtual = 0;
    acertosSessao = 0;
    puladasSessao = 0;
    palavrasPuladas = [];
    tentativasSessao = 0;

    alternarTela('tela-jogo');
    carregarCarta();
}

function carregarCarta() {
    const item = listaAtual[indiceAtual];
    document.getElementById('progresso-texto').innerText = `Palavra ${indiceAtual + 1} de ${listaAtual.length}`;
    document.getElementById('carta-emoji').innerText = item.emoji;
    document.getElementById('carta-palavra').innerText = item.palavra;
}

function falarPalavra() {
    const palavra = listaAtual[indiceAtual].palavra.toLowerCase();
    const fala = new SpeechSynthesisUtterance(palavra);
    fala.lang = 'pt-BR';
    fala.rate = 0.85;
    window.speechSynthesis.speak(fala);
}

function avancarPalavra() {
    indiceAtual++;
    if (indiceAtual < listaAtual.length) {
        carregarCarta();
    } else {
        mostrarRelatorio();
    }
}

function registrarResposta(status) {
    tentativasSessao++;
    const palavraAtual = listaAtual[indiceAtual].palavra;

    if (status === 'acertou') {
        acertosSessao++;
        estrelasTotais++;
        localStorage.setItem('fonoplay_estrelas', estrelasTotais);
        document.getElementById('total-estrelas').innerText = estrelasTotais;
        avancarPalavra();
    } else if (status === 'pular') {
        puladasSessao++;
        palavrasPuladas.push(palavraAtual);
        avancarPalavra();
    } else if (status === 'repetir') {
        falarPalavra();
    }
}

function mostrarRelatorio() {
    alternarTela('tela-fim');
    const dataHoje = new Date().toLocaleDateString('pt-BR');
    const listaPuladasTexto = palavrasPuladas.length > 0 ? palavrasPuladas.join(', ') : 'Nenhuma (concluiu todas!)';

    document.getElementById('texto-relatorio').innerHTML = `
        <strong>📅 Data do treino:</strong> ${dataHoje}<br>
        <strong>🔤 Fonema trabalhado:</strong> Grupo "${fonemaAtual}"<br>
        <strong>✅ Concluídas com acerto:</strong> ${acertosSessao} de ${listaAtual.length}<br>
        <strong>⏭️ Puladas:</strong> ${puladasSessao}<br>
        <strong>📌 Palavras para reforçar:</strong> ${listaPuladasTexto}<br>
        <strong>⭐ Estrelas acumuladas:</strong> ${estrelasTotais}
    `;
}

function voltarMenu() {
    alternarTela('tela-menu');
}

function zerarProgresso() {
    if (confirm('Deseja zerar o placar de estrelas?')) {
        estrelasTotais = 0;
        localStorage.setItem('fonoplay_estrelas', 0);
        document.getElementById('total-estrelas').innerText = 0;
    }
}

function alternarTela(idTela) {
    document.getElementById('tela-menu').classList.add('oculto');
    document.getElementById('tela-jogo').classList.add('oculto');
    document.getElementById('tela-fim').classList.add('oculto');
    document.getElementById(idTela).classList.remove('oculto');
}
