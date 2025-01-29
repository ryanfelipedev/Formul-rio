const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassoword = document.getElementById('confirmacao');
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    checkForm();

})

email.addEventListener('blur', () => {
    checkEmail();
})

username.addEventListener('blur', () => {
    checkUsername();
})

password.addEventListener('blur', () => {
    checkPassword();
})

confirmpassoword.addEventListener('blur', () =>{
    confirmSenha();
})

function checkUsername(){
   const usernameValue = username.value;

   if (usernameValue === ''){
    errorInput(username, 'Preencha o seu nome !')
   } else {
    const formItem = username.parentElement;
    formItem.className = 'form-content'
   }

}

function checkEmail(){
    const emailValue = email.value;

    if (emailValue === ''){
        errorInput(email, 'O email é obrigatório !')
    }else {
        const formItem = email.parentElement;
        formItem.className = 'form-content'
    }

}

function checkPassword(){
    const passwordValue = password.value;

    if (passwordValue === ''){
        errorInput(password, 'A senha é obrigatória !')
    } else if (passwordValue.length < 8){
        errorInput(password, 'A senha precisa ter no mínimo 8 caracteres')
    } else{
        const formItem = password.parentElement;
        formItem.classList = 'form-content'
    }
}

function confirmSenha(){
    const passwordValue = password.value;
    const confirmacaoValue = confirmpassoword.value;

    if (confirmacaoValue === '') {
        errorInput(confirmpassoword, 'A confirmação de senha é obrigatória !')
    } else if (confirmacaoValue !== passwordValue){
        errorInput(confirmpassoword, 'As senhas não coincidem !')
    } else{
        const formItem = confirmpassoword.parentElement;
        formItem.classList = 'form-content'
    }
}

function checkForm(){
    checkUsername();
    checkEmail();
    checkPassword();
    confirmSenha();

    const formItems = form.querySelectorAll('.form-content')

    const isValid = [...formItems].every((item) => {
        return item.className === 'form-content'
    });

    if (isValid) {
        alert('Usuario Cadastrado !')
    }else {
        alert('Preencha os campos corretamente !')
    }

}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = 'form-content error'

}

