/* <div class="log">
<a class="login" href="login/signin.html">Login</a>
<a class="signin" href="login/signup.html">sign Up</a>
</div>

 <div class="profile">
<p class="name" data="64.64">       <img alt="i" class="img-profile" src="katara-rfr.jpg">         katara           </p>
</div>  */

// noAcc()



function noAcc(){
    if(acc === 0){
        log = document.createAttribute('div');
        loga = document.createAttribute('a');
        logb = document.createAttribute('a');

        log.setAttribute('class' , 'log');

        loga.setAttribute('class' , 'login');
        loga.setAttribute('href' , 'login/signin.html');

        logb.setAttribute('class' , 'signin');
        logb.setAttribute('href' , 'login/signup.html');

        nav.appendChild(log);

        log.appendChild(loga);
        log.appendChild(logb);

        loga.innerHTML = 'login';

        logb.innerHTML = 'sign up';



    }
}


function logind(img , name , email , password){
    if(acc === 1){


        Swal.fire({
            icon: 'success',
            title: 'welcome to our website',
        })

        pro = document.createAttribute('div')
        prop = document.createAttribute('p')
        proimg = document.createAttribute('img')

        pro.setAttribute('class' , 'profile')
        prop.setAttribute('class' , 'name')
        prop.setAttribute('data' , '0')
        proimg.setAttribute('class' , 'img-profile')
        proimg.setAttribute('src' , img)

        nav.appendChild(pro);
        pro.appendChild(prop)
        prop.appendChild(proimg)
        prop.innerText = name


    }else{
        noAcc()
    }
}
