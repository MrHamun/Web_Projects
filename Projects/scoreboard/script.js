var firebaseConfig = { apiKey: "AIzaSyCdZerHr_-O2heqbBOGkTUx5O6dL8gPJ3g", authDomain: "login-database-827a4.firebaseapp.com", projectId: "login-database-827a4", storageBucket: "login-database-827a4.appspot.com", messagingSenderId: "843987483905", appId: "1:843987483905:web:8bc09c6b4e4b0c190baf00" };


const st = document.querySelector('.start button')
const nav = document.querySelector('.nav')
acc = 0



addEventListener('click' , function(e){
    if(e.target.classList.contains('img')){
        let x = e.target.parentElement.innerText
        let y = e.target.getAttribute('src');
        let z = e.target.parentElement.parentElement.lastElementChild.innerText
        popup(x , y , z)

 
    }
    if(e.target.classList.contains('img-profile')){
        let x = e.target.parentElement.innerText
        let y = e.target.getAttribute('src');
        let z = e.target.parentElement.getAttribute('data')
        popupa(x , y , z)

        console.log(z)

 
    }


})




function popup(name  , img  , score) { 
    swal.fire({
        title: name,
        text: score,
        imageUrl: img,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
 }


 function popupa(name  , img  , score) { 
    swal.fire({
        title: name,
        text: score,
        imageUrl: img,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        footer: '<a class="logout" href="">logouts</a>'
    })
 }