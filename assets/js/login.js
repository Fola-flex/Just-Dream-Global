let mail = document.getElementById('display_mail');
let phone = document.getElementById('display_phone');
const form = document.getElementById('form');
const email = document.getElementById('email');
const tel = document.getElementById('phone');

let notyf  = new Notyf()

form.addEventListener('input', (f) => {
    checkInputs();

    validify.forEach(function(number) {
        if (number == false) {
            f.preventDefault();
        }
    })
});


function changeToPhone() {
    mail.style.display = "none";
    phone.style.display = "block";
}

function changeToMail() {
    phone.style.display = "none";
    mail.style.display = "block";
}

function checkInputs() {
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();


    let valid1 = false
    let valid2 = false

    if(mail.style.display == 'block') {
        if(emailValue === '') {
            notyf.error('No email addresss');
        } else if(!isEmail(emailValue)) {
            notyf.error('Not a valid email')
        } else{
            valid1 = true;
        }
    }
    
    if (phone.style.display == 'block') {
        if(telValue === '') {
            notyf.error('Phone field cannot be blank');
        } else if( telValue.length < 9) {
            notyf.error('Enter Valid Phone Number');
        } else if( telValue.length > 15) {
            notyf.error('Enter Valid Phone Number');
        } else if ( isNaN(telValue)) {
            notyf.error('Enter Valid Phone number');
        } else{
            valid2 = true;
        }
    }

    validify = [valid1, valid2]
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
