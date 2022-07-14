/**
 * INSERINDO NOVOS PACIENTES 
 */
 const botaoAcionar = document.querySelector('#adicionar-paciente');
 botaoAcionar.addEventListener('click', (event)=>{
     event.preventDefault();
     const formulario = document.querySelector('#form-adiciona')
     const paciente = obtemInformacoesFormulario(formulario);
     adicionaPaciente(formulario,paciente);
 });

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
