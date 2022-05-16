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
        alert(error)
        limpaCEP();
        limpaFormulario()
    }
})


function limpaFormulario() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
}

function limpaCEP() {
    document.getElementById('cep').value=("")
}

function criarPagina(infoCadastro) {
    if(!("erro" in infoCadastro)) {
        document.getElementById('rua').value=(infoCadastro.logradouro);
        document.getElementById('bairro').value=(infoCadastro.bairro);
        document.getElementById('cidade').value=(infoCadastro.localidade);
        document.getElementById('estado').value=(infoCadastro.uf);
    } else {
        limpaFormulario();
        alert("CEP não encontrado");
    }
   
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