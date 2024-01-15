const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

let num;
let opnum;

const container = document.querySelector('.container')

let choose;

let choosen = '';

addEventListener('click' , function(e){
    if(e.target.className === 'rock'){
        num = 1
        choosen = 'rock'


        container.style.flexDirection = 'column';
        container.style.justifyContent = 'space-around';
        container.innerHTML = `<p class="text">Opponent is choosing ...</p>    
            <div class="loading-container"><span class="loading1 loading"></span>     <span class="loading2 loading"></span>       <span class="loading3 loading"></span></div>
         <div class="choosen"></div>`;


         choose = document.querySelector('.choosen');
        choose.innerHTML = choosen;

        opp()


    }else if(e.target.className === 'paper'){
        num = 2

        choosen = 'paper'

        container.style.flexDirection = 'column';
        container.style.justifyContent = 'space-around';
        container.innerHTML = `<p class="text">Opponent is choosing ...</p>
            <div class="loading-container"><span class="loading1 loading"></span>     <span class="loading2 loading"></span>       <span class="loading3 loading"></span></div>
         <div class="choosen"></div>`;

         choose = document.querySelector('.choosen');

        choose.innerHTML = choosen;
        opp()

    }else if(e.target.className === 'scissor'){
            num = 3

        choosen = 'scissor'

        container.style.flexDirection = 'column';
        container.style.justifyContent = 'space-around';
        container.innerHTML = `<p class="text">Opponent is choosing ...</p>
            <div class="loading-container"><span class="loading1 loading"></span>     <span class="loading2 loading"></span>       <span class="loading3 loading"></span></div>
         <div class="choosen"></div>`;

         choose = document.querySelector('.choosen');

        choose.innerHTML = choosen;
        opp()
    }


    console.log(choosen);
} )



function opp() {
    setTimeout(function (){
        let oppcard;
        const opp = Math.floor(Math.random() * 3);

        if (opp === 0){
            opnum = 1
            oppcard = 'rock';
            console.log('rock')
            opp2()
        }else if (opp === 1) {
            opnum = 2
            oppcard = 'paper';
            console.log('paper')
            opp2()
        }else if(opp === 2){
            opnum = 3
            oppcard = 'scissor';
            console.log('scissor')
            opp2()
        }



    },500)
}


function opp2(){
    container.innerHTML = `<div class="choosen opp"></div>
        <p class="text"></p>
        <div class="choosen you"></div>`
    const text = document.querySelector('.text');
    if (num===1){
        document.querySelector('.you').innerHTML = 'rock';
        if (opnum === 1){
            document.querySelector('.opp').innerHTML = 'rock';
            text.innerHTML = 'DRAW';
        }
        else if (opnum === 2){
            document.querySelector('.opp').innerHTML = 'paper';
            text.innerHTML = 'YOU LOSE';
        }
        else if (opnum === 3){
            document.querySelector('.opp').innerHTML = 'scissor';
            text.innerHTML = 'YOU WIN';
        }
    }else if(num === 2){
        document.querySelector('.you').innerHTML = 'paper';
        if (opnum === 1){
            document.querySelector('.opp').innerHTML = 'rock';
            text.innerHTML = 'YOU WIN';
        }
        else if (opnum === 2){
            document.querySelector('.opp').innerHTML = 'paper';
            text.innerHTML = 'DRAW';
        }
        else if (opnum === 3){
            document.querySelector('.opp').innerHTML = 'scissor';
            text.innerHTML = 'YOU LOSE';
        }


    }else if(num === 3){
        document.querySelector('.you').innerHTML = 'scissor';
        if (opnum === 1){
            document.querySelector('.opp').innerHTML = 'rock';
            text.innerHTML = 'YOU LOSE';
        }
        else if (opnum === 2){
            document.querySelector('.opp').innerHTML = 'paper';
            text.innerHTML = 'YOU WIN';
        }
        else if (opnum === 3){
            document.querySelector('.opp').innerHTML = 'scissor';
            text.innerHTML = 'DRAW';
        }

    }




}


















