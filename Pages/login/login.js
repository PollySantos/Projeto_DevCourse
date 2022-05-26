const button = document.getElementById('entra')

button.addEventListener('click', (evento) => {
    
    evento.preventDefault();
    validarEmail();
    validarSenha();
    validacao();
})

function validarEmail(){
    
    const email = document.getElementById('email');
    const emailErro = document.getElementById('erro-email');        //mensagem de erro//
    const padrao =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        //validacao do email//

    if(email.value.match(padrao)){

        email.classList.add('valid');
        email.classList.remove('invalid');
        emailErro.innerHTML = "Seu email é válido!"
        emailErro.style.color = "#00ff00";
        $("#valid").css("visibility", "visible");
        $("#invalid").css("visibility", "hidden");
        return true;

    }else if(email.value == ""){
        email.classList.remove('valid');
        email.classList.add('invalid');
        emailErro.innerHTML = "Esse campo deve ser preenchido."
        emailErro.style.color = "#ff0000";
        $("#invalid").css("visibility", "visible");
        $("#valid").css("visibility", "hidden");
        return false;
    
    }else{
        email.classList.remove('valid');
        email.classList.add('invalid');
        emailErro.innerHTML = "Por favor, insira um email válido!"
        emailErro.style.color = "#ff0000";
        $("#invalid").css("visibility", "visible");
        $("#valid").css("visibility", "hidden");
        return false;
    }
}
        //validacao da senha//

    function validarSenha(){   

    const senha = document.getElementById('senha');
    const senhaErro = document.getElementById('erro-senha'); 

    if (senha.value.length >= 6 && senha.value.length <= 12){

        senha.classList.add('valid');
        senha.classList.remove('invalid');
        senhaErro.innerHTML = "Sua senha é válida!"
        senhaErro.style.color = "#00ff00";
        $("#invalid1").css("visibility", "hidden");
        $("#valid1").css("visibility", "visible");
        return true;

    }else if(senha.value == ""){
        senha.classList.remove('valid');
        senha.classList.add('invalid');
        senhaErro.innerHTML = "Esse campo deve ser preenchido."
        senhaErro.style.color = "#ff0000";
        $("#invalid1").css("visibility", "visible");
        $("#valid1").css("visibility", "hidden");
        return false;
    
    }else{
        senha.classList.remove('valid');
        senha.classList.add('invalid');
        senhaErro.innerHTML = "Por favor, insira uma senha válido!"
        senhaErro.style.color = "#ff0000";
        $("#invalid1").css("visibility", "visible");
        $("#valid1").css("visibility", "hidden");
        return false;
    }
}

//mudar pagina quando os valores estiverem certos//

function validacao(){
    
    if(validarEmail() == true && validarSenha() == true){
        return window.location.href = "../../index.html"
    }
}
