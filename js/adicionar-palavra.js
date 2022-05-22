// CRIA O TEXTAREA PARA O JOGADOR ADICIONAR NOVA PALAVRA AO JOGO
function criaCampo() {
    // APAGA OS CONTEÚDOS E ADICIONA OS NOVOS 
    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";

    tabuleiro1.innerHTML = '<textarea maxlength="8" name="" id="campo" placeholder="Digite uma palavra ou frase"></textarea>';
    tabuleiro2.innerHTML += '<div class="aviso"><img src="img/icone.png" alt="icone de informação" width="12px" height="12px"><p>Max. de 8 letras.</p></div>';
    tabuleiro2.innerHTML += '<div class="opcoes"><button class="botao botao1" onclick="adicionaPalavra()">Salvar e começar</button><button class="botao botao2" onclick="cancelar()">Cancelar</button></div>';
    
}
// CANCELA E ATUALIZA A PÁGINA
function cancelar() {
    location.reload();
}
// ADICIONA NOVA PALAVRA AO ARRAY "PALAVRAS" QUE ESTÁ NO "PRINCIPAL.JS"
function adicionaPalavra() {
    
    var campo = document.querySelector("#campo");
    // EXIBE ALERTA SE O TEXTAREA ESTIVER VAZIO AO CLICAR NO BOTÃO "SALVAR E COMEÇAR"
    if(campo.value.length == 0) {
        alert("Adicione uma palavra ou clique em cancelar");
        campo.focus();
    } else {
        // ADICIONA A NOVA PALAVRA AO JOGO
        palavras.push(campo.value.toLowerCase());
        start();
    }
    console.log(palavras);
    
    
}

