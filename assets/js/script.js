let container = document.querySelector('.container')
let registerBtn = document.querySelector('.register-btn')
let loginBtn = document.querySelector('.login-btn')

registerBtn.addEventListener('click', () => { 
    container.classList.add('active')
 });
 loginBtn.addEventListener('click', () => { 
    container.classList.remove('active')
 });




 