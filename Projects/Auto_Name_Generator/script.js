const input = document.querySelector('.num');
const first = document.querySelector('.first')
const submit = document.querySelector('.button');
const inputY = document.querySelector('#yes');
const inputN = document.querySelector('#no');
const form = document.querySelector('form');
const name = document.querySelector('.name')


const notSound = [ 'B' , 'C', 'D', 'F' , 'G', 'H', 'H', 'J' , 'K', 'L','M' , 'N' ,  'P', 'R' , 'S','V' , 'Y','Z' ]
const sound = ['A' ,'A' ,'E' ,'I' ,'O' ,'U']

let order;

function dis(){


}


setInterval(function (){dis()},100)

submit.onclick = function (){
    if (first.value !== ''){

        if (input.value !== '' && input.value > 0) {
            ///////////

            name.innerHTML = ''
            const firstLetter = document.createElement('p');
            name.appendChild(firstLetter);
            firstLetter.innerHTML = first.value.toUpperCase()

            ///////////

            firstSoundFunction()

            ///////////

                for (let i = 0; i < input.value - 1; i++) {
                    if (order === 1) {
                        PSN()
                        order = 0

                    }else if (order === 0) {
                        PS()
                        order = 1
                    }

                    console.log(order)
                }

        //////////////
        }




    }else if (first.value === ''){
        name.innerHTML = ''
        order = Math.floor(Math.random() * 2)

        for (let i = 0; i < input.value; i++) {

            if (order === 1) {
                PSN()
                order = 0

            }else if (order === 0) {
                PS()
                order = 1
            }

            console.log(order)
        }
    }
}






function PS(){
    let P = document.createElement('p');
    name.appendChild(P);
    P.innerHTML = sound[Math.floor(Math.random() * sound.length)]
    order = 0
}
function PSN(){
    let P = document.createElement('p');
    name.appendChild(P);
    P.innerHTML = notSound[Math.floor(Math.random() * notSound.length)]
    order = 1
}







function firstSoundFunction() {
    if (first.value.toUpperCase() === 'A' || first.value.toUpperCase() === 'E' || first.value.toUpperCase() === 'O' || first.value.toUpperCase() === 'U' || first.value.toUpperCase() === 'I'){
        order = 1
    }else{
        order = 0
    }
}