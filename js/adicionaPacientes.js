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