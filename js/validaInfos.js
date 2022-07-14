function validaPeso(paciente){
    if(paciente.peso <= 0 || paciente.peso >= 300 || paciente.peso.length == 0){
        return `O peso ${paciente.peso} KG informado é inválido. Informe um valor maior que zero e menor que trezentos Kg`;
    }
    return '';
}
function validaAltura(paciente) {
    if(paciente.altura <= 0 || paciente.altura >= 3.00 || paciente.altura.length == 0){
        return `A altura ${paciente.altura} metros informada é inválida. Informe um valor maior que zero e menor que três metros`;
    }
    return '';
}
function validaNome(paciente){
    if(paciente.nome.length == 0){
        return 'O nome do paciente está em branco. Informe um nome válido.'
    }
    return '';
}
function validaGordura(paciente){
    if(paciente.gordura.length == 0 || paciente.gordura <= 0){
        return 'Informe um percentual de gordura válido';
    }
    return '';
}
function validaCadastroPaciente(paciente){
    const erros = [];
        if(!validaNome(paciente).length == 0){
            erros.push(validaNome(paciente));
        }
        if(!validaPeso(paciente).length == 0){
            erros.push(validaPeso(paciente));  
        }
        if(!validaAltura(paciente).length == 0){
            erros.push(validaAltura(paciente));
        }
        if(!validaGordura(paciente).length == 0){
            erros.push(validaGordura(paciente));
        }
    return erros;
}


