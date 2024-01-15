const clicker = document.querySelector('.clicker');
const clicks = document.querySelector('.clicks');
const cpsCounter = document.querySelector('.cps span')
const cpcCounter = document.querySelector('.cpc span')

let click = 0
let cps = 0;
let cpc = 1;

setInterval(function (){
    click += cps;
    write()

},1000)

addEventListener('click',function (e){
    if (e.target.classList.contains('clicker')){
        click += cpc;
        write();
        clickAnimation(e.target);
    }




    else if (e.target.classList.contains('upgradeBuy')){
        buy(e.target)
        clickAnimation(e.target)
    }
})






function write(){
    if (click < 10){
        clicks.innerHTML = `0${click}`
    }else{
        clicks.innerHTML = click
    }
}

function clickAnimation(f){

    f.style.transform = 'scale(150%)';
    f.style.filter = 'brightness(0)';
    setTimeout(function (){
        f.style.filter = 'brightness(1)';
        f.style.transform = 'scale(100%)'
    },30)
}


function buy(p){
    if (p.parentElement.getAttribute('data') < click) {

        click -= Number(p.parentElement.getAttribute('data'));
        write()

        if (p.parentElement.classList.contains('CPC')) {
            cpc += Number(p.getAttribute('data'))

            if (cpc < 10) {
                cpcCounter.innerHTML = `0${cpc}`
            } else {
                cpcCounter.innerHTML = cpc
            }

        } else if (p.parentElement.classList.contains('CPS')) {
            cps += Number(p.getAttribute('data'))


            if (cps < 10) {
                cpsCounter.innerHTML = `0${cps}`
            } else {
                cpsCounter.innerHTML = cps
            }

        }
    }else{
        notEnough(p)
    }
}


function notEnough(e){
    e.parentElement.style.color = 'red';
    setTimeout(function (){e.parentElement.style.color = 'black';},50)
    setTimeout(function (){e.parentElement.style.color = 'red';},100)
    setTimeout(function (){e.parentElement.style.color = 'black';},150)
}