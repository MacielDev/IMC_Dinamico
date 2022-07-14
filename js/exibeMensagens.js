function exibeMensagensErros(erros){
    const ul  = document.querySelector('#falhaCadastro');
    ul.innerHTML = '';
    ul.classList.remove('naoMostraSpanErros'); 
    erros.forEach((erro)=>{
        const li = document.createElement('ĺi');
        li.classList.remove('naoMostraSpanErros');
        li.classList.add('mostraSpanErros');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function exibeMensagemSucesso(removeClasse,adicionaClasse){
    const mensagemSucesso = document.querySelector('#adicionadoComSucesso');
    mensagemSucesso.classList.remove(removeClasse);
    mensagemSucesso.classList.add(adicionaClasse);
}