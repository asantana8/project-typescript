let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(_soma: number) {
    if (campoSaldo) {
        saldoTotal += _soma
        campoSaldo.innerHTML = saldoTotal.toString()
        limparCampoSaldo();
    }
}

function limparCampoSaldo() {
    soma.value = "";
}

function limparSaldo(){
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

botaoAtualizar?.addEventListener('click', function () {
    return somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});