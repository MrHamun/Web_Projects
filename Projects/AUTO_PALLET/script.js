const cont = document.querySelector('.container')
let result = [];

const num = 8


let hexArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let a = []


for (let i = 0; i < num; i++) {
    for (let i = 0; i < 6; i++) {
        a.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
    }

    let final = `#${a.join("")}`


    const div = document.createElement('div');
    div.classList.add('pallet');
    cont.appendChild(div);
    div.setAttribute("data", final);

    div.style.backgroundColor = final

    div.innerHTML = final

    a = [];
}

addEventListener('click', function (e){
    navigator.clipboard.writeText(e.target.getAttribute('data'));

    if (e.target.classList.contains('pallet')){
        e.target.style.transform = 'scale(1.2)';
        setTimeout(function (){e.target.style.transform = 'scale(1)'},70)
    }
})

// navigator.clipboard.writeText();
