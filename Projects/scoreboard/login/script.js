


const openAvatar = document.querySelector('.img1');
const popupAvatar = document.querySelector('.avatar-popup')

let acc = 0
let srcAvatar = "../imgs/b.jpg"


openAvatar.onclick = function(){
  console.log('a')
  popupAvatar.style.display = 'grid';
}

addEventListener('click' , function(e){
    if(e.target.classList.contains('imgs')){
        srcAvatar =  e.target.getAttribute('src');
        popupAvatar.style.display = 'none';
        openAvatar.setAttribute('src' , srcAvatar)

    }
})



// Your web app's Firebase configuration
var firebaseConfig = { apiKey: "AIzaSyCdZerHr_-O2heqbBOGkTUx5O6dL8gPJ3g", authDomain: "login-database-827a4.firebaseapp.com", projectId: "login-database-827a4", storageBucket: "login-database-827a4.appspot.com", messagingSenderId: "843987483905", appId: "1:843987483905:web:8bc09c6b4e4b0c190baf00" };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
  // Get all our input fields
  email = document.querySelector('.emaili').value
  password = document.querySelector('.passi').value
  full_name = document.querySelector('.namei').value
  img = srcAvatar

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alertCus('Email or Password is Outta Line!!' , 'error')
    return
    // Don't continue running the code
  }
  if (validate_field(full_name) == false || validate_field(img) == false) {
    alertCus('One or More Extra Fields is Outta Line!!' , 'error')
    return
  }
 
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      email : email,
      full_name : full_name,
      avatar : img ,
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alertCus('User Created!!', 'success')
    location.href = '../index.html';
    acc = 1
    logind(img , full_name , email ,password);
    

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alertCus(error_message , 'error')
  })
}

// Set up our login function
function login () {
  // Get all our input fields
  email = document.querySelector('.emaili').value
  password = document.querySelector('.passi').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alertCus('Email or Password is Outta Line!!' , 'error')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne

    // location.href = '../index.html';
    // acc = 1
    // logind(img , full_name , email ,password);
    alertCus('User Created!!', 'success')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alertCus(error_message , 'error')
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}




function alertCus(text , icona){
    Swal.fire({
        icon: icona,
        title: text,
      })
}