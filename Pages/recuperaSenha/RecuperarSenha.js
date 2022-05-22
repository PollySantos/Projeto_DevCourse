const button = document.getElementById('btn-recuperacaoSenha')

button.addEventListener('click', (evento) => {
    
    evento.preventDefault()
    validar();
})

function validar(){
    
    const email = document.getElementById('email');
    const emailErro = document.getElementById('erro-email');
    const padrao =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.value.match(padrao)){

        email.classList.add('valid');
        email.classList.remove('invalid');
        emailErro.innerHTML = "Seu email é válido!"
        emailErro.style.color = "#00ff00";
        $("#valid").css("visibility", "visible");
        $("#invalid").css("visibility", "hidden");

    }else if(email.value == ""){

        email.classList.remove('valid');
        email.classList.add('invalid');
        emailErro.innerHTML = "Esse campo deve ser preenchido."
        emailErro.style.color = "#ff0000";
        $("#valid").css("visibility", "hidden");
        $("#invalid").css("visibility", "visible");
    
    }else{

        email.classList.remove('valid');
        email.classList.add('invalid');
        emailErro.innerHTML = "Por favor, insira um email válido!"
        emailErro.style.color = "#ff0000";
        $("#valid").css("visibility", "hidden");
        $("#invalid").css("visibility", "visible");
    }


}

