const form = document.getElementById('form')

const validateEmail = email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', e =>{
    e.preventDefault()
    const smallWarning = document.getElementById('small-warning')

    if(!validateEmail(e.target.email.value)){        
        smallWarning.classList.add('form__warning--show')
        e.target.email.classList.add('form__input--warning')       
    }else{
        smallWarning.classList.remove('form__warning--show')
        e.target.email.classList.remove('form__input--warning')
    }
})
