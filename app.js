let numerosSorteados = [];
// let quantidadeDeNumeros = 0;
// let numeroInicial = 0;
// let numeroFinal = 0;

function entrada_de_dados() {
    quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    numeroInicial = parseInt(document.getElementById('de').value);
    numeroFinal = parseInt(document.getElementById('ate').value);
    console.log(quantidadeDeNumeros, numeroInicial, numeroFinal);
    if(quantidadeDeNumeros <= 0 ){
        alert('Digite uma quantidade de números maior que zero!');
        reiniciar();
        return;
    } else if (numeroInicial > numeroFinal) {
        alert('O número inicial deve ser menor que o número final!');
        reiniciar();
        return;
    } else if (quantidadeDeNumeros > (numeroFinal - numeroInicial + 1)) {
        alert('A quantidade de números a serem sorteados deve ser menor ou igual a quantidade de números disponíveis!');
        reiniciar();
        return;
    } else if(!quantidadeDeNumeros  || !numeroInicial  || !numeroFinal ) {
        alert('Preencha todos os campos corretamente!');
        reiniciar();
        return;
    } else {
        return quantidadeDeNumeros, numeroInicial, numeroFinal;
    }
    
}

function sortearNumeros(quantidadeDeNumeros, numeroInicial, numeroFinal) {
    numerosSorteados = [];
    for (let i = 0 ; i < quantidadeDeNumeros ; i++) {
        let numero = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
        while (numerosSorteados.includes(numero)) {
            numero = Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
        }
        console.log(numero);
        numerosSorteados.push(numero);
    }
    return numerosSorteados
}

function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function habilitaStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}
    
function desabilitaStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao')) {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function sortear() {
    entrada_de_dados(); //return quantidadeDeNumeros, numeroInicial, numeroFinal;
    sortearNumeros(quantidadeDeNumeros, numeroInicial, numeroFinal); //return numerosSorteados
    exibirTextoNaTela('resultado', `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`);
    habilitaStatusBotao();
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';           
    document.getElementById('ate').value = '';

}

function reiniciar() {
    limparCampo();
    numerosSorteados = [];
    exibirTextoNaTela('resultado', `<label class="texto__paragrafo">Números sorteados:  nenhum até agora. </label>`);
    desabilitaStatusBotao();
}