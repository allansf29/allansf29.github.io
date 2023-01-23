'use strict';

const limparFormulario = (endereco) => {
    document.querySelector("#endereco").value=""
    document.querySelector("#bairro").value=""
    document.querySelector("#cidade").value=""
    document.querySelector("#estado").value=""
}

const preencherFormulario = (endereco) => {
    document.querySelector("#endereco").value = endereco.logradouro
    document.querySelector("#bairro").value = endereco.bairro
    document.querySelector("#cidade").value = endereco.localidade
    document.querySelector("#estado").value = endereco.uf
}

const eNumero = (numero) => /^[0-9]+$/.test(numero)

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    const cep = document.querySelector('#cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    // fetch(url).then(response => response.json()).then(console.log);
    if(cepValido(cep)){
        const dados = await fetch(url)
        const endereco = await dados.json();
        
        if (endereco.hasOwnProperty('erro')){// se o json do endereço tiver a propriedade erro
            document.querySelector("#endereco").value = 'CEP não encontrado!'
        }else{
            preencherFormulario(endereco);
        }
    }else{
        document.querySelector("#endereco").value = 'CEP não encontrado!'
    }

}

document.querySelector('#cep')
        .addEventListener('focusout', pesquisarCep);
