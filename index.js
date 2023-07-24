const btn1=document.querySelector('#btn1').addEventListener('click',fung)
// console.log(btn1)
const show1=document.querySelector('#show1')
// console.log(show1)
const mine1=document.querySelector('#min1')
// console.log(min1)
const plus1=document.querySelector('#plus1')
// console.log(plu1)
const mine2=document.querySelector('#min2')
// console.log(min2)
const plus2=document.querySelector('#plus2')
// console.log(plu2)
const mine3=document.querySelector('#min3')
// console.log(min3)
const plus3=document.querySelector('#plus3')
// console.log(plu3)

function fung(){
    show1.classList.toggle('change')
    show2.classList.remove('change')
    show3.classList.remove('change')
        plus1.style.display='none'
        mine1.style.display='block'
        plus2.style.display='block'
        mine2.style.display='none'
        plus3.style.display='block'
        mine3.style.display='none'
}

const btn2=document.querySelector('#btn2').addEventListener('click',fung1)
const show2=document.querySelector('#show2')

function fung1(){

    show2.classList.toggle('change')
    show1.classList.remove('change')
    show3.classList.remove('change')
    plus2.style.display='none'
    mine2.style.display='block'
    plus1.style.display='block'
    mine1.style.display='none'
    plus3.style.display='block'
    mine3.style.display='none'
}

const btn3=document.querySelector('#btn3').addEventListener('click',fung3)
const show3=document.querySelector('#show3')
function fung3(){
    
    show3.classList.toggle('change')
    show1.classList.remove('change')
    show2.classList.remove('change')
    plus3.style.display='none'
    mine3.style.display='block'
    plus1.style.display='block'
    mine1.style.display='none'
    plus2.style.display='block'
    mine2.style.display='none'
}

