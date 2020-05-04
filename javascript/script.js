var but1 = window.document.querySelector('button.but1')
but1.addEventListener('mouseenter', entrar)
but1.addEventListener('mouseout', sair)
function entrar(){
    but1.style.textDecoration = 'underline'
}
function sair(){
    but1.style.textDecoration = 'none'
}
