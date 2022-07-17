const botaoCarregarPacientes  = document.querySelector('#carregar-pacientes');
botaoCarregarPacientes.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('devo efetuar a carga da api');

    const formulario = document.querySelector('#form-adiciona')

    fetch('http://api-pacientes.herokuapp.com/pacientes')
    .then((response)=> {
        response.json()
        .then((data)=>{

            data.forEach(paciente => {
                adicionaPaciente(formulario,paciente);
            });
        });
    })
    
   
    .catch((err)=>{
        console.error(err);
    })
   
});


    
