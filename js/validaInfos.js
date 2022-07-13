/*
validaPeso : FUNÇÃO RESPONSÁVEL POR VALIDAR O PESO DE CADA PACIENTE. RECEBE COMO PARÂMETRO UM VALOR DO TIPO NUMBER (PESO). SEU RETORNO É UM VALOR BOOLEANO.

validaAltura: FUNÇÃO RESPONSÁVEL POR VALIDAR A ALTURA DE CADA PACIENTE. RECEBE COMO PARÂMETRO UM VALOR DO TIPO NUMBER (ALTURA). SEU RETORNO É UM VALOR BOOLEANO.

validaCadastroPaciente: FUÇÃO RESPONSÁVEL POR VALIDAR O CADASTRO DE NOVOS PACIENTES MEDIANTE A VALIDAÇÃO DA ALTURA E O PESO INFORMADO. RECEBE COMO PARÂMETROS UM
 PACIENTE E O FORMULÁRIO CONTENDO AS INFORMAÇÕES DO PACIENTE.
 
*/


function validaPeso(paciente){
    if(paciente.peso <=0 || paciente.peso>=300){
        return false
    }
    return true;
}

function validaAltura(paciente) {
    if(paciente.altura <=0 || paciente.altura >=3.00){
        return false;
    }
    return true
}


function validaCadastroPaciente(formulario,paciente){

    const spanErro  = document.querySelector('#dadosIncorretos');
    const pesoValido = validaPeso(paciente);
    const alturaValida = validaAltura(paciente);

    if(!pesoValido || !alturaValida ){
        if(!pesoValido){
            exibeErroPeso(formulario,paciente);
            return false;
            
        }else{
            exibeErroAltura(formulario,paciente);
            return false;
        }
    }else{
        naoExibeErros(formulario, spanErro)
        return true;

    }
}

/**FUNÇÕES RESPONSÁVEIS PELA INTERAÇÃO COM OS USUÁRIOS E EXIBIR/OCULTAR OS ERROS */

function exibeErroPeso(formulario,paciente){
 
    const spanErro  = document.querySelector('#dadosIncorretos');
    formulario.peso.classList.add('imcInvalido');

    spanErro.classList.remove('naoMostraSpanErros');
    spanErro.classList.add('mostraSpanErros');
    spanErro.textContent = `O peso ${paciente.peso} KG informado é inválido. Informe um valor maior que zero e menor que trezentos Kg`;
}
function exibeErroAltura(formulario,paciente){
 
    const spanErro  = document.querySelector('#dadosIncorretos');
    formulario.altura.classList.add('imcInvalido');
    
    spanErro.classList.remove('naoMostraSpanErros');
    spanErro.classList.add('mostraSpanErros');
    spanErro.textContent = `A altura ${paciente.altura} metros informada é inválida. Informe um valor maior que zero e menor que três metros`;
}

function naoExibeErros(formulario, spanErro){
    spanErro.classList.add('naoMostraSpanErros');
        formulario.peso.classList.remove('imcInvalido');
}