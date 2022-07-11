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
    exibeResultadoIMC(imcTabela,resultadoImc,paciente);

    
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
validaPeso : FUNÇÃO RESPONSÁVEL POR VALIDAR O PESO DE CADA PACIENTE. RECEBE COMO PARÂMETRO UM VALOR DO TIPO NUMBER (PESO). SEU RETORNO É UM VALOR BOOLEANO.

validaAltura: FUNÇÃO RESPONSÁVEL POR VALIDAR A ALTURA DE CADA PACIENTE. RECEBE COMO PARÂMETRO UM VALOR DO TIPO NUMBER (ALTURA). SEU RETORNO É UM VALOR BOOLEANO.
*/
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

/*
exibeResultadoIMC : FUNÇÃO RESPONSÁVEL POR ATUALIZAR O IMC DE CADA PACIENTE. RECEBE COMO PARÂMETROS DOIS VALORES DO TIPO STRING (IMC E RESULTADO DO CÁLCULO DO IMC).
*/
function exibeResultadoIMC (imc,resultadoImc,paciente){
    imc.textContent = resultadoImc;
    alteraCorResultadoIMC (imc,paciente);
}

function alteraCorResultadoIMC (imc,paciente) {
    if(imc.textContent == 'peso inválido!' || imc.textContent == 'altura inválida!'){
        paciente.classList.remove('imcValido');
        paciente.classList.add('imcInvalido');
    }
}

/**
 * INSERINDO NOVOS PACIENTES 
 */

const formulario = document.querySelector('#form-adiciona');
formulario.addEventListener('click', (event)=>{

    /**EVITANDO O COMPORTAMENTO PADRÃO DE UM BOTÃO DE SUBMIT
     *  DE UM FORMULARIO (LIMPAR CAMPOS, ENVIAR DADOS E RECARREGAR PÁGINA*/
    event.preventDefault();

    /**ACESSANDO OS DADOS DO FORMUÁRIO ATRAVÉS DO ATRIBBUTO 'NAME' DAS TAGS 
     * 'INPUTS'
     */

    const nome = formulario.nome.value;
    const peso = formulario.peso.value;
    const altura = formulario.altura.value;
    const gordura = formulario.gordura.value;

    console.log(nome,peso,altura,gordura);

    /** CRIANDO ELENTOS HTML ATRAVÉS DA FUNÇÃO 'CREATE ELEMENT */

     const tabela = document.querySelector('#tabela-pacientes')
    //  criando <tr>
     const pacienteTR = document.createElement('tr');

    // Criando as <td> para os dados do novo paciente
    const nomeTD = document.createElement('td');
    const pesoTD = document.createElement('td');
    const alturaTD = document.createElement('td');
    const gorduraTD = document.createElement('td');

    // Caregando os dados nas <td> 
    nomeTD.textContent = nome;
    pesoTD.textContent = peso;
    alturaTD.textContent = altura;
    gorduraTD.textContent = gordura;

    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);

    tabela.appendChild(pacienteTR);

})












