var but3 = window.document.querySelector('button#but3')
var but4 = window.document.querySelector('button#but4')
but3.addEventListener('mouseenter', entrarb3)
but3.addEventListener('mouseout', sairb3)
but4.addEventListener('mouseenter', entrarb4)
but4.addEventListener('mouseout', sairb4)
function entrarb3(){
    but3.style.backgroundColor = '#0984e3'
    but3.style.color = 'white'
    but3.style.transition = '400ms'
}
function sairb3(){
    but3.style.backgroundColor = ''
    but3.style.color = ''
}
function entrarb4(){
    but4.style.backgroundColor = '#0984e3'
    but4.style.color = 'white'
    but4.style.transition = '400ms'
}
function sairb4(){
    but4.style.backgroundColor = ''
    but4.style.color = ''
}
