var entrada = document.querySelector(".entrada");
entrada.disabled = true; // DESABILITA O INPUT COM A CLASS "ENTRADA"
var tabuleiro1 = document.querySelector(".tabuleiro1");
var tabuleiro2 = document.querySelector(".tabuleiro2");
// FUNÇÃO PARA INICIAR O JOGO
function start(){
    // RESETA AS VARIÁVEIS
    entrada.disabled = false; // HABILITA O INPUT COM A CLASS "ENTRADA"
    erros = 0;
    acertos = 0;
    i = Math.floor(Math.random() * palavras.length);
    caracteres = [];
    linhas = document.querySelector(".linhas");
    // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS REFERENTES AO INICIO DO JOGO
    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";
    mostraErros.innerHTML = "";
    mensagem.innerHTML = "";
    novo.innerHTML = "";
    tabuleiro1.innerHTML = `<canvas class="forca" width="400" height="400"></canvas>`;
    
    tabuleiro2.innerHTML += `<p class="linhas"></p>`
    novo.innerHTML = '<button class="botao botao1" onclick="start()">Novo jogo</button>';
    novo.innerHTML += '<button class="botao botao2" onclick="cancelar()">Desistir</button>';
    // CHAMA AS FUNÇÕES "SORTEIA" E "DESENHAFORCA" QUE ESTÃO NO ARQUIVO "PRINCIPAL.JS"
    sorteia();
    desenhaForca();

}

