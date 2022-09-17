let mail = document.getElementById('display_mail');
let phone = document.getElementById('display_phone');
let other_option = document.getElementById('display_option');
let nigeria = document.getElementById('nigeria');
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const dateOfBirth = document.getElementById('date-of-birth');
const email = document.getElementById('email');
const tel = document.getElementById('phone');
const others = document.getElementById('other_country');
const password = document.getElementById('password');
const password2 = document.getElementById('password_two');

function changeToPhone() {
    mail.style.display = "none";
    phone.style.display = "block";
}

function changeToMail() {
    phone.style.display = "none";
    mail.style.display = "block";
}

function changeCountry(evt) {
    if (evt.target.value === 'Others') {
        other_option.style.display = "block";
    } else if (evt.target.value === 'Nigeria') {
        other_option.style.display = "none";
    } else {
        other_option.style.display = "none";
    }
}

if (performance.navigation.type == 2) {
    location.reload(true);
}

form.addEventListener('submit', (f) => {
    checkInputs();
    
  validity.forEach(function(number) {
      if (number == false) {
          f.preventDefault();
        }
    }) 
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const dobValue = dateOfBirth.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const othersValue = others.value.trim();

    let valid1 = false;
    let valid2 = false;
    let valid3 = false;
    let valid4 = false;
    let valid5 = false;
    let valid6 = false;
    let valid7 = false;
    let valid8 = false;

    const notyf  = new Notyf()

    if(firstnameValue === '') {
       setErrorFor(firstname, 'This field cannot be blank');
       notyf.error('First name cannot be blank')
    } else{
        setSuccessFor(firstname);
        valid1 = true;
    }   

    if(dobValue === '') {
        setErrorFor(dateOfBirth, 'This field cannot be blank');
    } else{
        setSuccessFor(dateOfBirth);
        valid2 = true;
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'This field cannot be blank');
    } else{
        setSuccessFor(lastname);
        valid3 = true;
    }

    if(emailValue === '') {
        setErrorFor(email, 'This field cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else{
        setSuccessFor(email);
        valid4 = true;
    }

    if(passwordValue === '') {
        setErrorFor(password, 'This field cannot be blank');
    } else if(passwordValue.length < 8) {
        setErrorFor(password, 'Too Short');
        notyf.error('Password should be more than 8 characters');
    } else{
        setSuccessFor(password, 'Good');
        valid5 = true;
    }

    if(telValue === '') {
        setErrorFor(tel, 'This field cannot be blank');
    } else if( telValue.length < 8) {
        setErrorFor(tel, 'Enter Valid Phone Number');
    } else if( telValue.length > 15) {
        setErrorFor(tel, 'Enter Valid Phone Number');
    } else if ( isNaN(telValue)) {
        setErrorFor(tel, 'Enter Valid Phone number');
    } else{
        setSuccessFor(tel);
        valid6 = true;
    }

    if(password2Value === '') {
        setErrorFor (password2, 'This field cannot be blank');
    } else if(passwordValue !== password2Value) {
        notyf.error('Passwords do not match');
        setErrorFor(password2, 'Passwords do not match');
    } else{
        setSuccessFor(password2);
        valid7 = true;
    };

    if(othersValue === '') {
        setErrorFor (others, 'This field cannot be blank');
    } else {
        setSuccessFor(others);
        valid8 = true;
    };

    validity = [valid1, valid2, valid3, valid4, valid5, valid6, valid7, valid8]
}



function setErrorFor(input, message) {
    formGroup = input.parentElement;
    const small = formGroup.querySelector('small');

    small.innerText = message;

    formGroup.className = 'form-group error';    
}

function setSuccessFor(input) {
    formGroup = input.parentElement; 
    formGroup.className = 'form-group success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
