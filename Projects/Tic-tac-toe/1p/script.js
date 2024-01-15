const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');
const c4 = document.querySelector('.c4');
const c5 = document.querySelector('.c5');
const c6 = document.querySelector('.c6');
const c7 = document.querySelector('.c7');
const c8 = document.querySelector('.c8');
const c9 = document.querySelector('.c9');

let moveList = [];

let corner

let moveCase

let middleMove

let Moves = 0

let turn = 0;

aiMove();

addEventListener('click' , function (e){
    if (e.target.classList.contains('cell')){
        if (turn === 1){
            if (e.target.innerHTML === ''){
                e.target.innerHTML = 'O';
                Moves ++
                turn = 0;
                moveList.push(e.target);
                console.log(moveList);
                aiMove()
            }
        }
    }
})

function aiMove(){
    if (Moves === 0){
        firstMove()
    }else

    if (Moves === 2){
        secondMove()
    }else

    if (Moves === 4){
        thirdMove()
    }else

    if (Moves === 6){
        forthMove();
    }else

    if (Moves === 8){
        fifthMove();
    }
}

function firstMove(){
   let r = makeRandom(4);
    corner = r
    if (r === 1){
        c1.innerHTML = 'X';
        moveList.push(c1);
        turn = 1
        Moves++
    }

    else if (r === 2){
        c3.innerHTML = 'X';
        moveList.push(c3)
        turn = 1
        Moves++
    }

    else if (r === 3){
        c7.innerHTML = 'X';
        moveList.push(c7)
        turn = 1
        Moves++
    }

    else if (r === 4){
        c9.innerHTML = 'X';
        moveList.push(c9)
        turn = 1
        Moves++
    }
}

function secondMove(){
    if (corner === 1){
        if (c2.innerHTML === 'O' || c3.innerHTML === 'O'){
            moveCase = 1
            c7.innerHTML = 'X';
            moveList.push(c7);
            turn = 1;
            Moves++
        }else if (c4.innerHTML === 'O' || c7.innerHTML === 'O'){
            moveCase = 2
            c3.innerHTML = 'X';
            moveList.push(c3)
            turn = 1;
            Moves++
        }else if (c5.innerHTML === 'O'){
            moveCase = 3
            c9.innerHTML = 'X';
            moveList.push(c9)
            turn = 1;
            Moves++
        }else if (c6.innerHTML === 'O'){
            moveCase = 4
            c3.innerHTML = 'X';
            moveList.push(c3)
            turn = 1;
            Moves++
        }else if (c8.innerHTML === 'O'){
            moveCase = 5
            c7.innerHTML = 'X';
            moveList.push(c7)
            turn = 1;
            Moves++
        }else if (c9.innerHTML === 'O'){
            moveCase = 6
            c3.innerHTML = 'X';
            moveList.push(c3)
            turn = 1;
            Moves++
        }


    } else

    if (corner === 2){
        if (c1.innerHTML === 'O' || c2.innerHTML === 'O'){
            c9.innerHTML = 'X';
            moveList.push(c9)
            moveCase = 1
            turn = 1;
            Moves++
        }else if (c6.innerHTML === 'O' || c9.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 2
            turn = 1;
            Moves++
        }else if (c5.innerHTML === 'O'){
            c7.innerHTML = 'X';
            moveList.push(c7)
            moveCase = 3
            turn = 1;
            Moves++
        }else if (c4.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 4
            turn = 1;
            Moves++
        }else if (c8.innerHTML === 'O'){
            c9.innerHTML = 'X';
            moveList.push(c9)
            moveCase = 5
            turn = 1;
            Moves++
        }else if (c7.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 6
            turn = 1;
            Moves++
        }


    } else

    if (corner === 3){
        if (c1.innerHTML === 'O' || c4.innerHTML === 'O'){
            c9.innerHTML = 'X';
            moveList.push(c9)
            moveCase = 1
            turn = 1;
            Moves++
        }else if (c8.innerHTML === 'O' || c9.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 2
            turn = 1;
            Moves++
        }else if (c5.innerHTML === 'O'){
            c3.innerHTML = 'X';
            moveList.push(c3)
            moveCase = 3
            turn = 1;
            Moves++
        }else if (c2.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 4
            turn = 1;
            Moves++
        }else if (c6.innerHTML === 'O'){
            c9.innerHTML = 'X';
            moveList.push(c9)
            moveCase = 5
            turn = 1;
            Moves++
        }else if (c3.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 6
            turn = 1;
            Moves++
        }


    } else

    if (corner === 4){
        if (c3.innerHTML === 'O' || c6.innerHTML === 'O'){
            c7.innerHTML = 'X';
            moveList.push(c7)
            moveCase = 1;
            turn = 1;
            Moves++
        }else if (c8.innerHTML === 'O' || c7.innerHTML === 'O'){
            c3.innerHTML = 'X';
            moveList.push(c3)
            moveCase = 2
            turn = 1;
            Moves++
        }else if (c5.innerHTML === 'O'){
            c1.innerHTML = 'X';
            moveList.push(c1)
            moveCase = 3
            turn = 1;
            Moves++
        }else if (c2.innerHTML === 'O'){
            c3.innerHTML = 'X';
            moveList.push(c3)
            moveCase = 4
            turn = 1;
            Moves++
        }else if (c4.innerHTML === 'O'){
            c7.innerHTML = 'X';
            moveList.push(c7)
            moveCase = 5
            turn = 1;
            Moves++
        }else if (c1.innerHTML === 'O'){
            c3.innerHTML = 'X';
            moveList.push(c3)
            moveCase = 6
            turn = 1;
            Moves++
        }


    }
}

function thirdMove(){
    if (corner === 1){
            if (moveCase === 1){
            if (c4.innerHTML !== 'O'){
                c4.innerHTML = 'X';
                winLine('l');
            }else{
                c9.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }else

            if (moveCase === 2){
            if (c2.innerHTML !== 'O'){
                c2.innerHTML = 'X';
                winLine('t');
            }else{
                c9.innerHTML = 'X';
                turn = 1;
                Moves++
            }


        }else

            if (moveCase === 3){
                middleMoves();
        }else

            if (moveCase === 4){
            if (c2.innerHTML !== 'O'){
                c2.innerHTML = 'X';
                winLine('t');
            }else{
                c7.innerHTML = 'X';
                turn = 1;
                Moves++
            }


        }else

            if (moveCase === 5){
            if (c4.innerHTML !== 'O'){
                c4.innerHTML = 'X';
                winLine('l');
            }else{
                c3.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }else

            if (moveCase === 6){
            if (c2.innerHTML !== 'O'){
                c2.innerHTML = 'X';
                winLine('t');
            }else{
                c7.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }



    } else

    if (corner === 2){
        if (moveCase === 1){
            if (c6.innerHTML !== 'O'){
                c6.innerHTML = 'X';
                winLine('r');
            }else{
                c7.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }else

            if (moveCase === 2){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c7.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
        }else

            if (moveCase === 3){
                middleMoves();
            }else

            if (moveCase === 4){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }


        }else

            if (moveCase === 5){
                if (c6.innerHTML !== 'O'){
                    c6.innerHTML = 'X';
                    winLine('r');
                }else{
                    c1.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
        }else

            if (moveCase === 6){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
        }

    } else

    if (corner === 3){
            if (moveCase === 1){
            if (c8.innerHTML !== 'O'){
                c8.innerHTML = 'X';
                winLine('b');
            }else{
                c3.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }else


            if (moveCase === 2){
                    if (c4.innerHTML !== 'O'){
                    c4.innerHTML = 'X';
                    winLine('l');
                }else{
                    c3.innerHTML = 'X';
                    turn = 1;
                    Moves++
            }
        }else


            if (moveCase === 3){
                middleMoves();
        }else


            if (moveCase === 4){
                if (c4.innerHTML !== 'O'){
                    c4.innerHTML = 'X';
                    winLine('l');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }

        }else


            if (moveCase === 5){
                if (c8.innerHTML !== 'O'){
                    c8.innerHTML = 'X';
                    winLine('b');
                }else{
                    c1.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }


        }else


            if (moveCase === 6){
                if (c4.innerHTML !== 'O'){
                    c4.innerHTML = 'X';
                    winLine('l');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
        }



    }else

    if (corner === 4){
        if (moveCase === 1){
            if (c8.innerHTML !== 'O'){
                c8.innerHTML = 'X';
                winLine('b');
            }else{
                c1.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }else


        if (moveCase === 2){
            if (c6.innerHTML !== 'O'){
                c6.innerHTML = 'X';
                winLine('r');
            }else{
                c1.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }else


        if (moveCase === 3){
            middleMoves();
        }else


        if (moveCase === 4){
            if (c6.innerHTML !== 'O'){
                c6.innerHTML = 'X';
                winLine('r');
            }else{
                c7.innerHTML = 'X';
                turn = 1;
                Moves++
            }

        }else

        if (moveCase === 5){
            if (c8.innerHTML !== 'O'){
                c8.innerHTML = 'X';
                winLine('b');
            }else{
                c3.innerHTML = 'X';
                turn = 1;
                Moves++
            }


        }else

        if (moveCase === 6){
            if (c6.innerHTML !== 'O'){
                c6.innerHTML = 'X';
                winLine('r');
            }else{
                c7.innerHTML = 'X';
                turn = 1;
                Moves++
            }
        }



    }
}

function forthMove() {
    if (corner === 1){
        if (moveCase === 1){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c8.innerHTML = 'X';
                winLine('b');
            }
        }else

        if (moveCase === 2){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c6.innerHTML = 'X';
                winLine('r');
            }
        }else

        if (moveCase === 3){
            if (middleMove === 2){
                if (c7.innerHTML !== 'O'){
                    c7.innerHTML = 'X';
                    winLine('b');
                }else{
                    c3.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 3){
                    if (c4.innerHTML !== 'O'){
                        c4.innerHTML = 'X';
                        winLine('l');
                    }else{
                        c8.innerHTML = 'X';
                        winLine('b');
                    }
            }else

            if (middleMove === 4){
                if (c3.innerHTML !== 'O'){
                    c3.innerHTML = 'X';
                    winLine('r');
                }else{
                    c7.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 6){
                if (c7.innerHTML !== 'O'){
                    c7.innerHTML = 'X';
                    winLine('l');
                }else{
                    c3.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 7){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c6.innerHTML = 'X';
                    winLine('r');
                }
            }else

            if (middleMove === 8){
                if (c3.innerHTML !== 'O'){
                    c3.innerHTML = 'X';
                    winLine('t');
                }else{
                    c7.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }

        }else

        if (moveCase === 4){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c4.innerHTML = 'X';
                winLine('l');
            }
        }else

        if (moveCase === 5){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c2.innerHTML = 'X';
                winLine('t');
            }
        }else

        if (moveCase === 6){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c4.innerHTML = 'X';
                winLine('l');
            }
        }



    }else

    if (corner === 2){
        if (moveCase === 1){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c8.innerHTML = 'X';
                winLine('b');
            }
        }else

        if (moveCase === 2){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c4.innerHTML = 'X';
                winLine('l');
            }
        }else

        if (moveCase === 3){
            if (middleMove === 1){
                if (c8.innerHTML !== 'O'){
                    c8.innerHTML = 'X';
                    winLine('b');
                }else{
                    c2.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 2){
                if (c9.innerHTML !== 'O'){
                    c9.innerHTML = 'X';
                    winLine('b');
                }else{
                    c1.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 3){
                if (c4.innerHTML !== 'O'){
                    c4.innerHTML = 'X';
                    winLine('l');
                }else{
                    c8.innerHTML = 'X';
                    winLine('b');
                }
            }else

            if (middleMove === 4){
                if (c9.innerHTML !== 'O'){
                    c9.innerHTML = 'X';
                    winLine('r');
                }else{
                    c1.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 6){
                if (c1.innerHTML !== 'O'){
                    c1.innerHTML = 'X';
                    winLine('l');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 7){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c6.innerHTML = 'X';
                    winLine('r');
                }
            }else

            if (middleMove === 8){
                if (c1.innerHTML !== 'O'){
                    c1.innerHTML = 'X';
                    winLine('t');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 9){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c4.innerHTML = 'X';
                    winLine('l');
                }
            }

        }else

        if (moveCase === 4){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c6.innerHTML = 'X';
                winLine('r');
            }
        }else

        if (moveCase === 5){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c2.innerHTML = 'X';
                winLine('t');
            }
        }else

        if (moveCase === 6){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c6.innerHTML = 'X';
                winLine('r');
            }
        }



    }else

    if (corner === 3){
        if (moveCase === 1){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c6.innerHTML = 'X';
                winLine('r');
            }
        }else

        if (moveCase === 2){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c2.innerHTML = 'X';
                winLine('t');
            }
        }else

        if (moveCase === 3){
            if (middleMove === 1){
                if (c8.innerHTML !== 'O'){
                    c8.innerHTML = 'X';
                    winLine('b');
                }else{
                    c6.innerHTML = 'X';
                    winLine('r');
                }
            }else

            if (middleMove === 2){
                if (c9.innerHTML !== 'O'){
                    c9.innerHTML = 'X';
                    winLine('b');
                }else{
                    c1.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 3){
                if (c4.innerHTML !== 'O'){
                    c4.innerHTML = 'X';
                    winLine('l');
                }else{
                    c8.innerHTML = 'X';
                    winLine('b');
                }
            }else

            if (middleMove === 4){
                if (c9.innerHTML !== 'O'){
                    c9.innerHTML = 'X';
                    winLine('r');
                }else{
                    c1.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 6){
                if (c1.innerHTML !== 'O'){
                    c1.innerHTML = 'X';
                    winLine('l');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 7){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c6.innerHTML = 'X';
                    winLine('r');
                }
            }else

            if (middleMove === 8){
                if (c1.innerHTML !== 'O'){
                    c1.innerHTML = 'X';
                    winLine('t');
                }else{
                    c9.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 9){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c4.innerHTML = 'X';
                    winLine('l');
                }
            }

        }else

        if (moveCase === 4){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c8.innerHTML = 'X';
                winLine('b');
            }
        }else

        if (moveCase === 5){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c4.innerHTML = 'X';
                winLine('l');
            }
        }else

        if (moveCase === 6){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c8.innerHTML = 'X';
                winLine('b');
            }
        }



    }else

    if (corner === 4){
        if (moveCase === 1){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c4.innerHTML = 'X';
                winLine('l');
            }
        }else

        if (moveCase === 2){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cR');
            }else{
                c2.innerHTML = 'X';
                winLine('t');
            }
        }else

        if (moveCase === 3){
            if (middleMove === 1){
                if (c8.innerHTML !== 'O'){
                    c8.innerHTML = 'X';
                    winLine('b');
                }else{
                    c6.innerHTML = 'X';
                    winLine('r');
                }
            }else

            if (middleMove === 2){
                if (c7.innerHTML !== 'O'){
                    c7.innerHTML = 'X';
                    winLine('b');
                }else{
                    c3.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 3){
                if (c4.innerHTML !== 'O'){
                    c4.innerHTML = 'X';
                    winLine('l');
                }else{
                    c8.innerHTML = 'X';
                    winLine('b');
                }
            }else

            if (middleMove === 4){
                if (c3.innerHTML !== 'O'){
                    c3.innerHTML = 'X';
                    winLine('r');
                }else{
                    c7.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 6){
                if (c7.innerHTML !== 'O'){
                    c7.innerHTML = 'X';
                    winLine('l');
                }else{
                    c3.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 7){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c6.innerHTML = 'X';
                    winLine('r');
                }
            }else

            if (middleMove === 8){
                if (c3.innerHTML !== 'O'){
                    c3.innerHTML = 'X';
                    winLine('t');
                }else{
                    c7.innerHTML = 'X';
                    turn = 1;
                    Moves++
                }
            }else

            if (middleMove === 9){
                if (c2.innerHTML !== 'O'){
                    c2.innerHTML = 'X';
                    winLine('t');
                }else{
                    c4.innerHTML = 'X';
                    winLine('l');
                }
            }

        }else

        if (moveCase === 4){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c8.innerHTML = 'X';
                winLine('b');
            }
        }else

        if (moveCase === 5){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c6.innerHTML = 'X';
                winLine('r');
            }
        }else

        if (moveCase === 6){
            if (c5.innerHTML !== 'O'){
                c5.innerHTML = 'X';
                winLine('cL');
            }else{
                c8.innerHTML = 'X';
                winLine('b');
            }
        }



    }
}

function fifthMove(){
    if (middleMove === 2){
        drawMoves(c4 , c6)
    }else

    if (middleMove === 4){
        drawMoves(c2 , c8)
    }else

    if (middleMove === 6){
        drawMoves(c2 , c8)
    }else

    if (middleMove === 8){
        drawMoves(c4 , c6)
    }
    }

function drawMoves(c , t){
    if (c.innerHTML !== 'O'){
        c.innerHTML = 'X';
        Moves++
        popupShow('Its a Draw')
    }else{
        t.innerHTML = 'X';
        Moves++
        popupShow('Its a Draw')
    }
}

function popupShow(e){
    document.querySelector('.win-popup').style.display = 'flex';
    document.querySelector('.win-popup .win-status').innerHTML=  e;
}

function makeRandom(e){
    x = Math.floor(Math.random() * e) + 1
    return x
}

function winLine(e){
    if (e === 'cR'){
        document.querySelector('.hr1').style.display = 'inline';
        popupShow('X wins')
    }else if (e === 'cL'){
        document.querySelector('.hr2').style.display = 'inline';
        popupShow('X wins')
    }else if (e === 'mu'){
        document.querySelector('.mu').style.display = 'inline';
        popupShow('X wins')
    }else if (e === 'md'){
        document.querySelector('.md').style.display = 'inline';
        popupShow('X wins')
    }else{
        document.querySelector('.wins').style.display = 'inline';
        popupShow('X wins')
        if (e === 't'){
            document.querySelector('.wins').style.borderTop = '.5vmin solid red';
            popupShow('X wins')
        }else if (e === 'r'){
            document.querySelector('.wins').style.borderRight = '.5vmin solid red';
            popupShow('X wins')
        }else if (e === 'b'){
            document.querySelector('.wins').style.borderBottom = '.5vmin solid red';
            popupShow('X wins')
        }else if (e === 'l'){
            document.querySelector('.wins').style.borderLeft = '.5vmin solid red';
            popupShow('X wins')
        }
    }
}

function middleMoves(){
    if (c1.innerHTML === 'O'){
        c9.innerHTML = 'X';
        middleMove = 1
        turn = 1;
        Moves++
    }else if (c2.innerHTML === 'O'){
        c8.innerHTML = 'X';
        middleMove = 2
        turn = 1;
        Moves++
    }else if (c3.innerHTML === 'O'){
        c7.innerHTML = 'X';
        middleMove = 3
        turn = 1;
        Moves++
    }else if (c4.innerHTML === 'O'){
        c6.innerHTML = 'X';
        middleMove = 4
        turn = 1;
        Moves++
    }else if (c6.innerHTML === 'O'){
        c4.innerHTML = 'X';
        middleMove = 6
        turn = 1;
        Moves++
    }else if (c7.innerHTML === 'O'){
        c3.innerHTML = 'X';
        middleMove = 7
        turn = 1;
        Moves++
    }else if (c8.innerHTML === 'O'){
        c2.innerHTML = 'X';
        middleMove = 8
        turn = 1;
        Moves++
    }else if (c9.innerHTML === 'O'){
        c1.innerHTML = 'X';
        middleMove = 9
        turn = 1;
        Moves++
    }
}

function restartBut(){
    location.reload();
}


function analysisBut(){
    moveList.map(function (){

    })
}



// inacuraccy #f7c045  ?!  ☆ ★ ✮ ★ ☆
// best #96bc4b    star   <i class="fa-sharp fa-solid fa-star"></i>
// blunder #ca3431  ??
// book #a88865   book   <i class="fa-sharp fa-solid fa-book-open"></i>
// good #96af8b  tick    <i class="fa-solid fa-check"></i>
// excelant #91b649  like  <i class="fa-sharp fa-solid fa-thumbs-up"></i>
// brilliant #1ca7a1  !!
// great #1aa8a1   !







document.querySelector('.c1:after').style.content = '??'

/*



% Load time series data
load MGdata.mat

% Set input and output training data
D = 4; % number of data points in each input vector
delta = 6; % time steps to predict into the future
Xtrain = zeros(length(mg)-19-delta-D+1, D); % input training data
Ytrain = zeros(length(mg)-19-delta-D+1, 1); % output training data
for t = 20:length(mg)-delta-D+1
    Xtrain(t-19,:) = [mg(t-19) mg(t-12) mg(t-6) mg(t)];
    Ytrain(t-19) = mg(t+delta);
end

% Train ANFIS model
fis = anfis(Xtrain, Ytrain);

% Evaluate ANFIS model on test data
Xtest = zeros(length(mg)-19-delta-D+1, D); % input test data
Ytest = zeros(length(mg)-19-delta-D+1, 1); % output test data
for t = 20:length(mg)-delta-D+1
    Xtest(t-19,:) = [mg(t-19) mg(t-12) mg(t-6) mg(t)];
    Ytest(t-19) = mg(t+delta);
end
Ypred = evalfis(fis, Xtest);

% Plot results
figure
plot(Ytest)
hold on
plot(Ypred)
legend('True', 'Predicted')
xlabel('Time')
ylabel('MG Time Series')

*/