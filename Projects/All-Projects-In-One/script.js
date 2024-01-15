const theNums = document.querySelectorAll('.the-num');
const bars = document.querySelectorAll('.bar-percent');
const scBut = document.querySelectorAll('.scroll-but');
let x;
let y;
let z;

const projectCont = document.querySelector('.the-work')

const projectObject = [
    {
        id : 0,
        img : "img/back1.jpg",
        url : "../Auto_Name_Generator/index.html",
        title : "Auto Name Generator"
    },
    {
        id : 1,
        img : "img/back1.jpg",
        url : "../AUTO_PALLET/index.html",
        title : "Auto Pallete"
    },
    {
        id : 2,
        img : "",
        url : "../best-signin/index.html",
        title : "Modern Sign-in"
    },
    {
        id : 3,
        img : "",
        url : "../Cat-GPT/index.html",
        title : "Cat GPT"
    },
    {
        id : 4,
        img : "",
        url : "../Clicker_Game/index.html",
        title : "Clicker game"
    },
    {
        id : 5,
        img : "",
        url : "../Color-Game/index.html",
        title : "Color game"
    },
    {
        id : 6,
        img : "",
        url : "../color-mix/index.html",
        title : "Color mixer"
    },
    {
        id : 7,
        img : "",
        url : "../coolBackground/index.html",
        title : "CSS pure Background"
    },
    {
        id : 8,
        img : "",
        url : "../digital-watch/index.html",
        title : "Digital watch"
    },
    {
        id : 9,
        img : "",
        url : "../Matrix-Background/index.html",
        title : "Matrix Background"
    },
    {
        id : 10,
        img : "",
        url : "../PIXEL-ART/index.html",
        title : "Pixel art"
    },
    {
        id : 13,
        img : "",
        url : "../ROCK-PAPER/index.html",
        title : "Rock paper scissors"
    },
    {
        id : 14,
        img : "",
        url : "../Rubic-cube/index.html",
        title : "Rubic's cube helper"
    },
    {
        id : 15,
        img : "",
        url : "../scoreboard/index.html",
        title : "scoreboard"
    },
    {
        id : 16,
        img : "",
        url : "../Sign-in-with-face/index.html",
        title : "sign-in with face"
    },
    {
        id : 17,
        img : "",
        url : "../SpeedWrite/index.html",
        title : "Fast write"
    },
    {
        id : 19,
        img : "",
        url : "../Tic-tac-toe/main.html",
        title : "Tic-Tac-Toe"
    },
    {
        id : 20,
        img : "",
        url : "../TODO/index.html",
        title : "Todo"
    },
    {
        id : 21,
        img : "",
        url : "../todo-localstorage/index.html",
        title : "Todo with local storage"
    },
]



for (let i = 0 ; i < projectObject.length; i++){
    projectCont
    q = document.createElement('div')
    q.classList.add('work');
    projectCont.appendChild(q)

    w = document.createElement('div');
    w.classList.add('work-img');
    q.appendChild(w)

    rand = Math.floor(Math.random() * 4) + 1


    t = document.createElement('img')
    t.setAttribute('src' , `imgs/back${rand}.jpg`)
    w.appendChild(t)


    e = document.createElement('div');
    e.classList.add('work-desc');
    q.appendChild(e)

    y = document.createTextNode(projectObject[i].title);
    e.appendChild(y);


    r = document.createElement('div');
    r.classList.add('work-buts');
    q.appendChild(r)

    u = document.createElement('a');
    u.classList.add('work-visit')
    u.setAttribute('href' , projectObject[i].url)
    r.appendChild(u);

    p = document.createTextNode('Visit')
    u.appendChild(p)


    o = document.createElement('button');
    o.classList.add('like-cont')
    r.appendChild(o);

    a = document.createElement('i');
    a.setAttribute('data' , '0');
    a.classList.add('like');
    a.classList.add('fa-sharp');
    a.classList.add('fa-regular');
    a.classList.add('fa-heart');
    o.appendChild(a)

}



if (scrollY >= 375 && scrollY <= 1000) {
    skillMake();
} else {
    noSkillMake();
}

function skillMake() {
    for (let i = 0; i < theNums.length; i++){
        x =  theNums[i].innerHTML

       y =  theNums[i].parentElement;
       z = y.nextElementSibling;
       z.firstChild.style.width = x
    }
}

function noSkillMake(){
    for (let i = 0; i < bars.length; i++){
            bars[i].style.width = '0%';
    }
}


window.onscroll = function () {
    console.log(scrollY);
    activeMake(scrollY);
    if (scrollY >= 375 && scrollY <= 1000) {
        skillMake();
    } else {
        noSkillMake();
    }
}


function activeMake(s){
    if (s >= 0 && s <= 500){
        activeRemove(scBut[0]);
    }else if (s >= 500 && s <= 1200 ){
        activeRemove(scBut[1]);
    }else if (s >= 1400 && s <= 2654){
        activeRemove(scBut[2]);
    }
    else if (s >= 2100 && s <= 3000){
        activeRemove(scBut[3]);
    }
}

function activeRemove(e){
    for (let i = 0; i < scBut.length ; i++){
        scBut[i].classList.remove('nav-active');
    }
    e.classList.add('nav-active');
}


addEventListener('click' , function (e){
    if (e.target.classList.contains('scroll-but')){
        sc = e.target.getAttribute('data');
        window.scrollTo(0 , sc)
    }

    else if (e.target.classList.contains('like')){
        console.log('a')
        if (e.target.getAttribute('data') ===  "0"){
            e.target.classList.remove('fa-regular');
            e.target.classList.add('fa-solid');
            e.target.classList.add('fa-beat');
            e.target.setAttribute('data' , '1');
            e.target.style.color = 'var(--mc)'
        }else{
            console.log('if')
            e.target.style.color = 'black'
            e.target.classList.remove('fa-solid');
            e.target.classList.add('fa-regular');
            e.target.classList.remove('fa-beat');
            e.target.setAttribute('data' , '0');
        }

    }
})