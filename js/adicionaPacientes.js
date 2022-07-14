function adicionaPaciente(formulario,paciente){
    const erros = validaCadastroPaciente(paciente);
    if(!erros.length == 0){
        exibeMensagensErros(erros);
        return;
    }else{
        const tabela = document.querySelector('#tabela-pacientes');
        const pacienteTR = montaTR(paciente);
        tabela.appendChild(pacienteTR);

        exibeMensagemSucesso('inserindo','inserindoComSucesso')
        

        setTimeout(()=>{
            exibeMensagemSucesso('inserindoComSucesso','inserindo')
        },2000);

        //apaga mensagens de erro
        const spanErro = document.querySelector('#falhaCadastro');
        spanErro.classList.add('naoMostraSpanErros');
        //apaga formulário
        formulario.reset();
    }  
}


 
