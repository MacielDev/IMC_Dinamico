// Pegando a tabela e adicionando o "escutador de duplo click"


const tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick',(event)=>{
    const linhaClicada = event.target.parentNode;
    linhaClicada.classList.add('fadeOut');

   setTimeout(()=>{
    linhaClicada.remove();
   },600);

});