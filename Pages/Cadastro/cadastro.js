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
            throw new Error("Por favor, digite somente números");
        }
    } catch(error) {
        alert(error);
        limpaCEP();
        limpaFormulario()
    }
})


//limpa o formulário
function limpaFormulario() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
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
        document.getElementById('rua').value=(infoCadastro.logradouro);
        document.getElementById('bairro').value=(infoCadastro.bairro);
        document.getElementById('cidade').value=(infoCadastro.localidade);
        document.getElementById('estado').value=(infoCadastro.uf);
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


//validação bootstrap
(function () {
    'use strict'
  

    var forms = document.querySelectorAll('.needs-validation')
  

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()