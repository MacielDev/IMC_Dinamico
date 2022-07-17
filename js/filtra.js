const campoDeBusca = document.querySelector('#filtrar-tabela');
campoDeBusca.addEventListener('input',(event)=>{
    let nomeBuscado = event.target.value;
   
    var pacientes = document.querySelectorAll('.paciente');
    
    if(nomeBuscado.length > 0){
        pacientes.forEach((paciente)=> {
            const tdNome = paciente.querySelector('.info-nome');
            const nome = tdNome.textContent;
            const expressaoBusca = new RegExp(nomeBuscado, "i");
            if(!expressaoBusca.test(nome)){
                paciente.classList.add('escondePaciente');
            }else{
                paciente.classList.remove('escondePaciente');
            }
        });
    }else{
        pacientes.forEach((paciente)=>{
            paciente.classList.remove('escondePaciente');
        });
    }
});