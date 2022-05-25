//pega o API do CEP
function api(desiredCEP) {
    $.ajax({
        url: `https://viacep.com.br/ws/${desiredCEP}/json`,
        success: function(results) {
            criarPagina(results);
        },
        error: function(error) {
            console.log(error);
        }
    })

}

let buscar = document.getElementById('btn-cep');
//funcao do evento ao clicar no botao
buscar.addEventListener('click', function(e){
    e.preventDefault();
    let textoCEP = document.getElementById('cep').value
    let numbers = /^[0-9]+$/;
    try {
        if(textoCEP.match(numbers)) {
            api(textoCEP);
        } else {
            throw new Error("");
        }
    } catch(error) {
        numberError(error);
        limpaCEP();
        limpaFormulario()
    }
})


function numberError() {
    document.getElementById('cep');
}



//limpa o formulário
function limpaFormulario() {
    document.getElementById('Rua').value=("");
    document.getElementById('Bairro').value=("");
    document.getElementById('Cidade').value=("");
    document.getElementById('Estado').value=("");
}

//limpa o campo do CEP
function limpaCEP() {
    document.getElementById('cep').value=("")
}


//adiciona os elementos do CEP a página
function criarPagina(infoCadastro) {
    let cep = document.getElementById('cep');
    if(!("erro" in infoCadastro)) {
        setSuccess(cep)
        document.getElementById('Rua').value=(infoCadastro.logradouro);
        document.getElementById('Bairro').value=(infoCadastro.bairro);
        document.getElementById('Cidade').value=(infoCadastro.localidade);
        document.getElementById('Estado').value=(infoCadastro.uf);
    } else {
        setError(cep, "CEP não encontrado")
        limpaFormulario();
        
    }
   
}

//erro se o CEP nao for encontrado
function setError(input, message) {
    const inputGroup = input.parentElement; //div que abrange o input e o erro
    const small = inputGroup.querySelector('small');
    small.innerText = message

    inputGroup.className = 'input-group error';
}

//acerto do CEP (remove o que aparece no erro)
function setSuccess(input) {
    const inputGroup = input.parentElement;
    inputGroup.className = 'input-group success';
}
