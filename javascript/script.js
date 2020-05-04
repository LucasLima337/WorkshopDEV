var but1 = window.document.querySelector('button.but1')
var a = window.document.querySelector('a#a1')
but1.addEventListener('mouseenter', entrar)
but1.addEventListener('mouseout', sair)
a.addEventListener('mouseenter', entrara)
a.addEventListener('mouseout', saira)
function entrar(){
    but1.style.textDecoration = 'underline'
}
function sair(){
    but1.style.textDecoration = 'none'
}
function entrara(){
    a.style.color = 'rgb(221, 66, 144)'
}
function saira(){
    a.style.color = 'black'
}
