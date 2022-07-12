const pacientes = pegaPacientes();
pacientes.forEach((paciente)=>{

    // ACESSANDO OS DADOS DE CADA PACIENTE
    const peso = pegaPeso(paciente);
    const altura = pegaAltura(paciente);
    const imcTabela = pegaIMC(paciente);

    // CÁLCULO DO IMC DE CADA PACIENTE
    const resultadoImc = calculaIMC(peso,altura);

    // ATUALIZAÇÃO DO IMC DE CADA PACIENTE
    exibeResultadoIMC(imcTabela,resultadoImc,paciente);

    
})	

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












