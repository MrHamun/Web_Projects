let active
let score = 0;
let level = 1;
const root = document.querySelector(':root');

const ele = document.querySelector('.colors')

makeColors()
addActive()


addEventListener('click',function (e){
    if (e.target.classList.contains('active')){
        correctOrStart()
    }else{
        console.log('dsa')
    }
})



function correctOrStart(){
    score++
    document.querySelector('.score a').innerHTML = score < 10 ? `0${score}` : score
    makeColors()
    addActive()
}

function makeColors(){
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 80) + 20
    b = Math.floor(Math.random() * 80) + 20

    root.style.setProperty('--color', `hsl(${r} , ${g}% , ${b}%)`);

    rn = r > 245 ? r + 10 : r - 10;
    gn = g > 90 ? g + 10 : g - 10;
    bn = b > 90 ? b + 10 : b - 10;

    root.style.setProperty('--diff', `hsl(${rn} , ${gn}% , ${bn}%)`);

}

function addActive(){
    c = document.querySelector('.game-frame').children.length
    x = Math.floor(Math.random()* c );
    arr = document.querySelectorAll('.colors')
    for (let i = 0; i < c ; i++){
        arr[i].classList.remove('active')
    }
    arr[x].classList.add('active')

    active = x

}