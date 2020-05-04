var but1 = window.document.querySelector('button.but1')
var a = window.document.querySelector('a#a1')
var aa = window.document.querySelector('a.aa')
var aaa = window.document.querySelector('a.aaa')
var aaaa = window.document.querySelector('a.aaaa')
but1.addEventListener('mouseenter', entrar)
but1.addEventListener('mouseout', sair)
a.addEventListener('mouseenter', entrara)
a.addEventListener('mouseout', saira)
aa.addEventListener('mouseenter', entrara2)
aa.addEventListener('mouseout', saira2)
aaa.addEventListener('mouseenter', entrara3)
aaa.addEventListener('mouseout', saira3)
aaaa.addEventListener('mouseenter', entrara4)
aaaa.addEventListener('mouseout', saira4)
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
function entrara2(){
    aa.style.textDecoration = 'underline'
}
function saira2(){
    aa.style.textDecoration = 'none'
}
function entrara3(){
    aaa.style.textDecoration = 'underline'
}
function saira3(){
    aaa.style.textDecoration = 'none'
}
function entrara4(){
    aaaa.style.textDecoration = 'underline'
}
function saira4(){
    aaaa.style.textDecoration = 'none'
}
