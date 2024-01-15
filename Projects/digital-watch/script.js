let nowTime = new Date();

let face = 1;
let resetTrue = 0;

const weekDays = [ null , 'MO' , 'TU' , 'WE' , 'TH' , 'FR' , 'SA' , 'SU']

const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minu = document.querySelector('.minute')
const sec = document.querySelector('.sec')
const month = document.querySelector('.month')
const dayDate = document.querySelector('.day-date')

let nowDay = nowTime.getDay()
let nowHour = nowTime.getHours()
let nowMin = nowTime.getMinutes()
let nowSec = nowTime.getSeconds()
let nowMonth = nowTime.getMonth() + 1
let nowDayDate = nowTime.getDate()

let CHour = 0
let CMin = 0
let CSec = 0
let CDayDate = 0

updateDom()

const interval = setInterval(function (){
    nowTime = new Date();

     nowDay = nowTime.getDay()
     nowHour = nowTime.getHours()
     nowMin = nowTime.getMinutes()
     nowSec = nowTime.getSeconds()
     nowMonth = nowTime.getMonth() + 1
     nowDayDate = nowTime.getDate()

    updateDom()
},1000)

function updateDom(){
    if (face === 1 ){
        day.innerHTML = weekDays[nowDay];
        hour.innerHTML = nowHour < 10 ? `0${nowHour}` : nowHour;
        minu.innerHTML = nowMin < 10 ? `0${nowMin}` : nowMin;
        sec.innerHTML = nowSec < 10 ? `0${nowSec}` : nowSec;
        month.innerHTML =  nowMonth < 10  ?`0${nowMonth}-` : `${nowMonth}-`;
        dayDate.innerHTML = nowDayDate;
    }else {
        hour.innerHTML = CHour < 10 ? `0${CHour}` : CHour;
        minu.innerHTML = CMin < 10 ? `0${CMin}` : CMin;
        sec.innerHTML = CSec < 10 ? `0${CSec}` : CSec;
        dayDate.innerHTML = CDayDate;
    }

}


addEventListener('click' , function (e){
    if (e.target.classList.contains('light')){
        document.querySelector('.watch').classList.add('light-mode')
        setTimeout(function (){
            document.querySelector('.watch').classList.remove('light-mode')
        }, 3000)
    }else if (e.target.classList.contains('timer')){
        if (face === 1 ){
            face = 2;
            updateDom()
            document.querySelector('.timer').innerHTML = 'Time'
            document.querySelector('.month').style.opacity = 0
        }else{
            face = 1;
            updateDom()
            document.querySelector('.timer').innerHTML = 'counter'
            document.querySelector('.month').style.opacity = 1
        }
    }else if (e.target.classList.contains('start')){
        if (face === 2 ){
            if (document.querySelector('.start').innerHTML === 'start'){
                document.querySelector('.start').innerHTML = 'stop'
                counterCount(1)
                resetTrue = 0;
            }else{
                resetTrue = 1;
                document.querySelector('.start').innerHTML = 'start'
                counterCount(2)
            }
        }
    }else if (e.target.classList.contains('reset')){
        if (face === 2 ){
            if (resetTrue === 1){
                resetCounter()
            }
        }
    }
})

function counterCount(e){
    if (e === 1){
       x = setInterval(function (){
            CSec++
            updateDom()
            if (CSec === 100){
                CSec = 0
                CMin++
                updateDom()
            }else if (CMin === 60){
                CMin = 0
                CHour++
                updateDom()
            }else if (CHour === 60){
                CHour = 0
                CDayDate++
                updateDom()
            }
        }, 10)
    }else{
        clearInterval(x)
    }

}

function resetCounter(){
    CSec = 0
    CMin = 0
    CHour = 0
    CDayDate = 0
}




















