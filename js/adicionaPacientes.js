
/**
 * INSERINDO NOVOS PACIENTES 
 */

 const botaoAcionar = document.querySelector('#adicionar-paciente');
 botaoAcionar.addEventListener('click', (event)=>{
 
     /**EVITANDO O COMPORTAMENTO PADRÃO DE UM BOTÃO DE SUBMIT
      *  DE UM FORMULARIO (LIMPAR CAMPOS, ENVIAR DADOS E RECARREGAR PÁGINA*/
     event.preventDefault();
 
     const formulario = document.querySelector('#form-adiciona')
     /**
      * EXTRAINDO OS DADOS DO PACIENTE DO FORMULÁRIO
      */
    
     const paciente = obtemInformacoesFormulario(formulario);
     

 
     /** CRIANDO ELENTOS HTML ATRAVÉS DA FUNÇÃO 'CREATE ELEMENT */
    
    const pacienteTR = montaTR(paciente);
      
     
 
     const tabela = document.querySelector('#tabela-pacientes')
     //  criando <tr>
     tabela.appendChild(pacienteTR);

     formulario.reset();


 });


 function obtemInformacoesFormulario(formulario){
    const paciente ={
        nome: formulario.nome.value,
        peso: Number(formulario.peso.value),
        altura: Number(formulario.altura.value),
        gordura: formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value,formulario.altura.value)
    }
    return paciente;
}

function montaTR(paciente){
    
    const pacienteTR = document.createElement('tr');
    pacienteTR.classList.add('paciente');
    pacienteTR.classList.add('imcValido');
   
    pacienteTR.appendChild(montaTD(paciente.nome,"info-nome"));
    pacienteTR.appendChild(montaTD(paciente.peso,"info-peso"));
    pacienteTR.appendChild(montaTD(paciente.altura,"info-altura"));
    pacienteTR.appendChild(montaTD(paciente.gordura,"info-gordura"));
    pacienteTR.appendChild(montaTD(paciente.imc,"info-imc"));

    return pacienteTR;
}

function montaTD(dado,classe){
    const td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}
 