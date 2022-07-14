function pegaPacientes (){
    return document.querySelectorAll('.paciente')
}

function pegaPacientes (){
    return document.querySelectorAll('.paciente')
}


function pegaPeso(paciente){
    const peso = paciente.querySelector('.info-peso').textContent;
    const pesoNumerico = Number(peso)
    return pesoNumerico;
}

function pegaAltura(paciente){
    const altura = paciente.querySelector('.info-altura').textContent;
    const alturaNumerica = Number(altura);
    return alturaNumerica;
}

function pegaIMC(paciente){
    imc = paciente.querySelector('.info-imc');
    return imc;
}
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