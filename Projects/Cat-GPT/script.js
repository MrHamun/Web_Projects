const input = document.querySelector('.input');
const submit = document.querySelector('.in-cont i');
const chat = document.querySelector('.chat');
const chatText = document.querySelectorAll('.chat-text ');

let postNum = 0;


function alertDumb(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
            text: 'Coming soon...',
    })
}

addEventListener('click' , function (e){if (e.target.classList.contains('alertclick')){alertDumb()}})



function chatButtonText(){
    if (input.value !== '') {
        if (postNum === 1) {
            chatText[0].innerText = input.value
        }
    }else{
        chatText[0].innerText = 'meowGPT chat 1'
    }

}

chatButtonText()

let postable = 1

function posta(){
    if (postable === 1){
        if (input.value !== '') {
            postNum++
            x = input.value
            chatButtonText()
            input.value = '';
            subPost(x);
            setTimeout(function () {
                aiPost()
            }, 700)
            postable = 0
        }
    }
}


submit.onclick = function (){
    posta()
}


input.addEventListener('keydown' , function (e){

    if (e.key === 'Enter'){
        posta()
    }
})



//<div class="  post">  0000  <div class="post-avatar"> <img src="imgs/c.jpg"></div>  00000  <div class="post-text">asd</div> 00000 </div>

function subPost(e){
    post = document.createElement('div');
    postA = document.createElement('div');
    postT = document.createElement('div');
    postI = document.createElement('img');

    post.classList.add('post');
    postA.classList.add('post-avatar');
    postT.classList.add('post-text');
    postI.setAttribute('src', 'imgs/c.jpg')

    chat.appendChild(post);
    post.appendChild(postA);
    post.appendChild(postT);
    postA.appendChild(postI);
    postT.innerHTML = e

    postable = 0
}

function aiPost(){
    post = document.createElement('div');
    postA = document.createElement('div');
    postT = document.createElement('div');
    postI = document.createElement('img');

    post.classList.add('post');
    post.classList.add('ai');
    postA.classList.add('post-avatar');
    postT.classList.add('post-text');
    postI.setAttribute('src', 'imgs/meowGPT-logo.png')

    chat.appendChild(post);
    post.appendChild(postA);
    post.appendChild(postT);
    postA.appendChild(postI);

    const meowS = document.createTextNode('Meow');
    const meowN = document.createTextNode(' meow');
    const meowD = document.createTextNode('. Meow');
    const meowC = document.createTextNode(', meow');
    const meowE = document.createTextNode(' meow.')

    chat.scrollTo(0, chat.scrollHeight);

    y = (Math.floor(Math.random() * 30) + 1 ) * 2 ;

    console.log(y);
    console.log(postT);
    console.log(meowN);
    meowN.nodeValue = `${meowN.nodeValue} meow`;
    console.log(meowN)
        postT.appendChild(meowS);
        for (let i = 0; i < y ; i++){
           yy = (Math.floor(Math.random() * 11))
            meowN.nodeValue = `${meowN.nodeValue} meow`;
           postT.appendChild(meowN);


        }
        postT.appendChild(meowE);



        postable = 1

}


