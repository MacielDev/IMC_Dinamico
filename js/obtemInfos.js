/*
FUNÇÕES RESPONSÁVEIS POR ACESSAR OS DADOS (NOME, PESO, ALTURA E IMC) 
DE CADA PACIENTE.
IMPORTANTE: AS FUNÇÕES pegaPeso e pegaAltura JÁ REALIZAM O CASTING DE STRING PARA NUMBER.
*/ 

function pegaPacientes (){
    return document.querySelectorAll('.paciente')
}

function pegaPacientes (){
    return document.querySelectorAll('.paciente')
}


function pegaPeso(paciente){
    const peso = paciente.querySelector('.info-peso').textContent;
    const pesoNumerico = Number(peso)
    return pesoNumerico;
}

function pegaAltura(paciente){
    const altura = paciente.querySelector('.info-altura').textContent;
    const alturaNumerica = Number(altura);
    return alturaNumerica;
}

function pegaIMC(paciente){
    imc = paciente.querySelector('.info-imc');
    return imc;
}
