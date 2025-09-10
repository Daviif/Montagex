const container=document.querySelector('.container');
const LoginLink=document.querySelector('.btnback');
const ForgotLink=document.querySelector('.ForgotLink');

ForgotLink.addEventListener('click', ()=>{
    container.classList.add('active');
})