const button = document.getElementById('btn-submit')

button.addEventListener('click', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email')
    const senha = document.getElementById('senha')

    //validar email//

    if(email.value == ''){
        email.classList.add("errorInput")   //adciona class ao input//
    }

    else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){ //verifica se possue @, . e se a distancia entre eles é maior que 1//
        email.classList.add("errorInput")
    
    }else{
        email.classList.remove("errorInput")
        email.classList.add("okInput")
    }

    //validar senha//

    if(senha.value == ''){
        senha.classList.add("errorInput")
    
    }else if(senha.value.length < 6 ){   //senha menor que 6 digitos//
        senha.classList.add("errorInput")

    }else{
        senha.classList.remove("errorInput")
        senha.classList.add("okInput")
    }    

})

//irei por mensagem para cada erro, tentar fazer com switch case e recaregar a pagina/ir para outra caso os campos estejam corretos//