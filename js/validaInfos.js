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
