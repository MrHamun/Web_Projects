const c1 = document.querySelector('.color1');
const c2 = document.querySelector('.color2');
const c3 = document.querySelector('.color3');

const mix = document.querySelector(':root');

let m1 = document.querySelector('.m1').value
let m2 = document.querySelector('.m2').value

setInterval(function () {
    m1 = document.querySelector('.m1').value
    m2 = document.querySelector('.m2').value
    c2.style.background = m1;
    c1.style.background = m2;
},10);

function mixColors(){
    for (let i = 0; i < 14; i++){
        setTimeout(function () {
            c1.style.left = `${i}vmin`;
            c2.style.left = `-${i}vmin`;
        },10 * i);
    }

    c3.style.backgroundColor = `color-mix(in srgb , ${m1}, ${m2})`;

    setTimeout(function () {
        c1.style.display = 'none';
        c2.style.display = 'none';
        c3.style.display = 'block';
        },200)

}

function onChangeEvents(){
    c1.style.display = 'block';
    c2.style.display = 'block';
    c3.style.display = 'none';

    for (let i = 0; i < 20; i++){
        setTimeout(function () {
            c1.style.left = `-${i}vmin`;
            c2.style.left = `${i}vmin`;
        },10 * i);
    }

}