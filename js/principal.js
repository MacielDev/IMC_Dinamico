// ACESSANDO ALTURA E PESO
const pacientes = document.querySelectorAll('.paciente');
pacientes.forEach((paciente)=>{

    // ACESSANDO OS DADOS DE CADA PACIENTE
    const nome = paciente.querySelector('.info-nome');
    const peso = pegaPeso(paciente);
    const altura = pegaAltura(paciente);
    const imcTabela = pegaIMC(paciente);

    // CÁLCULO DO IMC DE CADA PACIENTE
    const resultadoImc = calculaIMC(peso,altura);

    // ATUALIZAÇÃO DO IMC DE CADA PACIENTE
    exibeResultadoIMC(imcTabela,resultadoImc);

    
})	


/*
FUNÇÕES RESPONSÁVEIS POR ACESSAR OS DASDOS (NOME, PESO, ALTURA E IMC) 
DE CADA PACIENTE.
IMPORTANTE: AS FUNÇÕES pegaPeso e pegaAltura JÁ REALIZAM O CASTING DE STRING PARA NUMBER.
*/ 

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

/*
calculaIMC : FUNÇÕESÇÃO RESPONSÁVEL POR REALIZAR O CÁLCULO DO IMC DE CADA PACIENTE. RECEBE COMO PARÂMETROS DOIS VALORES DO TIPO NUMBER (PESO E ALTURA). SEU RETORNO É O IMC CALCULADO COM UMA APROXIMAÇÃO DE DUAS CASAS DECIMAIS.
*/
function calculaIMC(peso,altura){
    
    const pesoValido = validaPeso(peso);
    const alturaValida = validaAltura(altura);

    if( pesoValido && alturaValida){
        const imc = (peso / (altura * altura)).toFixed(2);;   
        return imc;
    } else{
        if(!pesoValido){
            return 'peso inválido!';
        }
        return 'altura inválida!';
    }
}

function exibeResultadoIMC (imc,resultadoImc){
    imc.textContent = resultadoImc;
}

function validaPeso(peso){
    if(peso <=0 || peso>=300){
        return false
    }
    return true;
}

function validaAltura(altura) {
    if(altura <=0 || altura >=3.00){
        return false;
    }
    return true
}







