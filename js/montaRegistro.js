function montaTD(dado,classe){
    const td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
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