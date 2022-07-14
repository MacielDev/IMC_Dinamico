
/*
calculaIMC : FUNÇÕESÇÃO RESPONSÁVEL POR REALIZAR O CÁLCULO DO IMC DE CADA PACIENTE. RECEBE COMO PARÂMETROS DOIS VALORES DO TIPO NUMBER (PESO E ALTURA). SEU RETORNO É O IMC CALCULADO COM UMA APROXIMAÇÃO DE DUAS CASAS DECIMAIS.
*/
function calculaIMC(peso,altura){

    const pesoValido = peso > 0 && peso < 300;
    const alturaValida = altura > 0 && altura < 3.00;

    if( pesoValido && alturaValida){
        const imc = (peso / (altura * altura)).toFixed(2);;   
        return imc;
    }else{
        if(!pesoValido){
            return 'peso inválido!';
        }
        return 'altura inválida!';
    }
}


 
 








