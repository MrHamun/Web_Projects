let wordsPerScreen = 10;
const inputS = document.querySelector('.form-input')

let wordsArray = ['our','good','other','between','set','tell','play','go','live','because',
    'say','follow','write','while','are','sea','group','off','quite','food','may','turn','father',
    'life','above','great','some','life','song','he','small','know','feet','up','still','land',
    'important','like','big','too','get','head','right','light','knife','style','risk','through',
    "don't",'really','earth','animal','next','air','together','language','language','language',
    'beautiful','wednesday','mountain','people', 'controller','calender','radio','without' ,
    'switch','Follow','Text',"isn't" , 'show' , 'Regular' , 'mouse' , 'Craft' , 'diamond' , 'Crazy']



const wordScreen = document.querySelector('.word-display')
let spanNum = 1;
let corrects = 0;
let wrongs = 0;




const timeMin = document.querySelector('.time-min')
const timeSec = document.querySelector('.time-sec')
const radioButtons = document.querySelectorAll('input[name="time"]');
var selectedRadioButton;

for (const radioButton of radioButtons) {
    if (radioButton.checked) {
        selectedRadioButton = radioButton.value;
        break;
    }
}

addEventListener('click' , function (e){
    if (e.target.classList.contains('start-but')){
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedRadioButton = radioButton.value;
                break;
            }
        }
        document.querySelector('.start').style.transform = "scale(0.1)";
        document.querySelector('.cont').style.display = "flex";
        setTimeout(function (){document.querySelector('.start').style.display = "none";},200)
        document.querySelector('.cont').style.cursor = "default";
        document.querySelector('.cont').style.transform = "scale(1)";

        if (selectedRadioButton == 1.5){
            timeMin.innerHTML = 1;
            timeSec.innerHTML = 30;
        }else{
            timeMin.innerHTML = selectedRadioButton
        }
        deleteWords()
        selectWords()

    }


})

function selectWords(){
    for (let i = 0; i < wordsPerScreen ; i++){
        x = wordsArray[Math.floor(Math.random() * 65)]
        y = document.createElement('span');
        z = document.createTextNode(x);
        y.appendChild(z);
        wordScreen.appendChild(y);
    }
}

function deleteWords(){
    wordScreen.innerHTML = ''
}

function startCounter(){

    let timeMinNum = timeMin.innerHTML
    let timeSecNum = timeSec.innerHTML

    const interval = setInterval(function (){
        if (timeSecNum === 0){
            timeMinNum--
            timeSecNum = 60
        }
        if (timeMinNum === -1){
            timeSecNum = 0
            timeMinNum = 0
            clearInterval(interval)
            finishWrite()
        }
         timeSecNum--
        timeMin.innerHTML = timeMinNum
        timeSec.innerHTML = timeSecNum < 10 ? `0${timeSecNum}` : timeSecNum
    },1000)
    timeMin.innerHTML = timeMinNum
    timeSec.innerHTML = timeSecNum
}

document.querySelector('.form-input').onfocus = function (){
    startCounter();
    let all = document.querySelectorAll('.word-display span');
    activeSpan(all)
}

addEventListener('keydown' , function (e){
    if (e.code === 'Space'){
        if (inputS.value.trim() !== ''){
            let all = document.querySelectorAll('.word-display span');
            let x = inputS.value.trim()
            console.log(x)
            if (all[spanNum - 1].innerText === x){
                all[spanNum - 1].classList.add('correct')
                all[spanNum - 1].classList.remove('active')
                spanNum++
                corrects++
                activeSpan(all)
                inputS.value = null
            }else{
                all[spanNum - 1].classList.add('past-wrong')
                all[spanNum - 1].classList.remove('active')
                spanNum++
                wrongs++
                activeSpan(all)
                inputS.value = null
            }
        }
    }
})

function activeSpan(e){
    if (spanNum-1 < e.length){
        e[spanNum - 1].classList.add('active')
    }else{
        spanNum = 1
        deleteWords();
        selectWords();
        let all = document.querySelectorAll('.word-display span');
        all[spanNum - 1].classList.add('active')
    }

}



function finishWrite(){
    document.querySelector('.cont').style.transform = "scale(0.1)";
    setTimeout(function (){document.querySelector('.cont').style.display = "none";},200)
    setTimeout(function (){
        document.querySelector('.start').style.display = "flex";
        setTimeout(function (){document.querySelector('.start').style.transform = "scale(1)";},10)
    },300)

    document.querySelector('.result').style.display = 'flex'

    document.querySelector('.result h2 a').innerHTML = Math.floor(corrects / selectedRadioButton)

    document.querySelector('.cr').innerHTML = corrects
    document.querySelector('.wr').innerHTML = wrongs
}