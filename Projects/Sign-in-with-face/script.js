const email = document.querySelector('.email');
const password = document.querySelector('.password');
const emailText = document.querySelectorAll('.email-text span');
const passText = document.querySelectorAll('.pass-text span');
const face = document.querySelector('.face i');
const signIn = document.querySelector('.sign-in')

textUpAnimation(emailText)
textUpAnimation(passText)
textDownAnimation(emailText , email)
textDownAnimation(passText , password)

email.onfocus = function (){
    textUpAnimation(emailText)
    FaceChange('fa-face-laugh');
}
password.onfocus = function (){
    textUpAnimation(passText)
    FaceChange('fa-face-meh-blank');
}
email.onblur = function (){
    textDownAnimation(emailText , email)
    FaceChange('fa-face-smile');
}
password.onblur = function (){
    textDownAnimation(passText , password)
    FaceChange('fa-face-smile');
}
signIn.onclick = function (){
    signIn.style.filter = 'brightness(0)';
    setTimeout(function (){signIn.style.filter = 'brightness(1)';},100)
    FaceChange('fa-face-grin-hearts')
}


function FaceChange(e){
    if (face.classList.contains('fa-face-grin-hearts')){
        face.classList.remove('fa-face-grin-hearts')
    }
    if (face.classList.contains('fa-face-smile')){
        face.classList.remove('fa-face-smile')
    }
    if (face.classList.contains('fa-face-meh-blank')){
        face.classList.remove('fa-face-meh-blank')
    }
    if(face.classList.contains('fa-face-laugh')){
        face.classList.remove('fa-face-laugh')
    }
    face.classList.add('fa-flip')
    setTimeout(function (){face.classList.remove('fa-flip')},500)
    face.classList.add(e);
}






function textUpAnimation(e) {
    console.log(e[2])
    for(let i = 0; i < e.length ; i++){
        setTimeout(function (){e[i].style.top = '-28px'},i*50)
    }

}
function textDownAnimation(e , input){
if (input.value === ''){
    for(let i = 0; i < e.length ; i++){
        setTimeout(function (){e[i].style.top = '0'},i*50)
    }
}
}
