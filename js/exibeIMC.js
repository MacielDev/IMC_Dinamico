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
