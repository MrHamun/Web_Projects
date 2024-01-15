const columns = document.querySelectorAll('.column');
let y
let yValue
const textRandom = ['A' , 'B' , "C" , 'D' ,'E' , 'F' , 'G' , 'H' , 'I' , 'J' ,'K' ,'L' ,'M' ,'N' ,'O' , 'P' ,'Q' , 'R' ,'R' , 'T' , 'U' ,'V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']

setInterval(function (){y = Math.floor(Math.random() * textRandom.length); yValue = textRandom[y]},100)

function animationDown(){
    let x = Math.floor(Math.random() * 159);
    const texts = columns[x].querySelectorAll('.text');
    for(let i = 0; i < texts.length ; i++){
        setTimeout(function (){texts[i].innerText = yValue; texts[i].style.color = '#00ff51' } , i * 50)
    }
    setTimeout(function (){
        for(let i = 0; i < texts.length ; i++){
            setTimeout(function (){texts[i].style.color = '#090909'} , i * 50)
        }
    },2000)
}


setInterval(function (){animationDown()},200)
setInterval(function (){animationDown()},200)