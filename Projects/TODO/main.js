const sub = document.querySelector('.sub');
const input = document.querySelector('input');
const todos = document.querySelector('.todos');

let p;
let span;
let text;


input.focus();


sub.onclick = function (){

    if(input.value !== ''){
        p = document.createElement('p');
        p.classList = 'todo';
        span = document.createElement('span');
        span.classList = 'text'
        text = document.createTextNode(input.value);
        p.appendChild(span);
        span.appendChild(text);

        todos.appendChild(p);
    }


    input.focus();
    input.value = '';
}


addEventListener('click',function (e){
    if (e.target.className === 'text'){
        console.log('a')
        e.target.parentElement.remove();
    }
})