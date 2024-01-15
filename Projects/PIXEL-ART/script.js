const erase = document.querySelector('.erase');
const color = document.querySelector('.color')

let eraseUse = false

erase.onclick = function (){
    this.classList.toggle('erase-checked');

    if (eraseUse === false){
        eraseUse = true
    }else if (eraseUse === true){
        eraseUse = false
    }
    console.log(eraseUse)
}

addEventListener('click' , function (e){

    if(e.target.className === 'pixel'){
        if (eraseUse === true){
            e.target.style.background = "#fff"
        }else{
        e.target.style.background = color.value
            }

    }
})