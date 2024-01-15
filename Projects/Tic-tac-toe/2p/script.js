const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');
const c5 = document.querySelector('.c5');
const c6 = document.querySelector('.c6');
const c7 = document.querySelector('.c7');
const c8 = document.querySelector('.c8');
const c9 = document.querySelector('.c9');

let p = 1
let turn = 0

addEventListener('click' , function (e){
    if (e.target.classList.contains('cell')) {
        if (p === 1) {
            if (turn === 0) {
                if (e.target.innerHTML === '') {
                    e.target.innerHTML = 'X';
                    turn = 1;
                    winCheck('X')
                }
            } else if (turn === 1) {
                if (e.target.innerHTML === '') {
                    e.target.innerHTML = 'O';
                    turn = 0;
                    winCheck('O')
                }
            }
        }
    }
})





function winCheck(e){
    if (c1.innerHTML === e && c2.innerHTML === e && c3.innerHTML === e){
        winLine('t');
        p = 0;
    }else if (c4.innerHTML === e && c5.innerHTML === e && c6.innerHTML === e){
        winLine('md');
        p = 0;
    }else if (c7.innerHTML === e && c8.innerHTML === e && c9.innerHTML === e){
        winLine('b');
        p = 0;
    }else if (c1.innerHTML === e && c4.innerHTML === e && c7.innerHTML === e){
        winLine('l');
        p = 0;
    }else if (c2.innerHTML === e && c5.innerHTML === e && c8.innerHTML === e){
        winLine('mu');
        p = 0;
    }else if (c3.innerHTML === e && c6.innerHTML === e && c9.innerHTML === e){
        winLine('r');
        p = 0;
    }else if (c1.innerHTML === e && c5.innerHTML === e && c9.innerHTML === e){
        winLine('cR');
        p = 0;
    }else if (c3.innerHTML === e && c5.innerHTML === e && c7.innerHTML === e){
        winLine('cL');
        p = 0;
    }
}



function winLine(e){
    if (e === 'cR'){
        document.querySelector('.hr1').style.display = 'inline';
    }else if (e === 'cL'){
        document.querySelector('.hr2').style.display = 'inline';
    }else if (e === 'mu'){
        document.querySelector('.mu').style.display = 'inline';
    }else if (e === 'md'){
        document.querySelector('.md').style.display = 'inline';
    }else{
        document.querySelector('.wins').style.display = 'inline';
              if (e === 't'){
                  document.querySelector('.wins').style.borderTop = '.5vmin solid red';
        }else if (e === 'r'){
                  document.querySelector('.wins').style.borderRight = '.5vmin solid red';
        }else if (e === 'b'){
                  document.querySelector('.wins').style.borderBottom = '.5vmin solid red';
        }else if (e === 'l'){
                  document.querySelector('.wins').style.borderLeft = '.5vmin solid red';
        }
    }
}