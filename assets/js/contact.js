const form = document.getElementById('form');
const email = document.getElementById('email');
const tel = document.getElementById('phone');



form.addEventListener('submit', (f) => {
    checkInputs();

    validify.forEach(function(number) {
        if (number == false) {
            f.preventDefault();
        }
    })
});


function checkInputs() {
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();

    let valid1 = false
    let valid2 = false

    let notyf  = new Notyf()

    if(emailValue === '') {
        notyf.error('No email addresss');
    } else if(!isEmail(emailValue)) {
        notyf.error('Not a valid email')
    } else{
        valid1 = true;
    }
    

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

    validify = [valid1, valid2]
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}