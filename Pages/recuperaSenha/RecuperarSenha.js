const button = document.getElementById('btn-recuperacaoSenha')

button.addEventListener('click', (evento) => {
    evento.preventDefault()

    const email = document.getElementById('email')
    
    
        if(email.value == ''){
            email.classList.add("errorInput")  //adciona class ao input//
        }

        else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){    //verifica se possue @, . e se a distancia entre eles é maior que 1//
            email.classList.add("errorInput")
        
        }else{
            email.classList.remove("errorInput")
            email.classList.add("okInput")
        }

})