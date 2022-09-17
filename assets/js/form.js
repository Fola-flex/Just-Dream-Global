const form = document.getElementById('form');
const email = document.getElementById('email');
const tel = document.getElementById('phone');
const loan_amt = document.getElementById('loan-amt');

const notyf  = new Notyf({
    duration: 6000
})

form.addEventListener('submit', (f) => {
    checkInputs();

    validify.forEach(function(number) {
        if (number == false) {
            f.preventDefault();
        }    
    });
        
    if (validify.every(input => input == true))  {
        
        f.preventDefault()
        const formValues = new FormData(form);
        const formData = Object.fromEntries(formValues);
        
        fetch('https://api.justdreamglobal.com/forms/contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(function () {
            return notyf.success('Your message has been received')
            })
        }  

});


function checkInputs() {
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const loanValue = loan_amt.value.trim();

    let valid1 = false
    let valid2 = false
    let valid3 = false

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

    if(loanValue === '') {
        notyf.error('Field cannot be blank');
    } else if ( isNaN(loanValue)) {
        notyf.error('Enter Valid Loan Amount');
    } else{
        valid3 = true;
    }

    validify = [valid1, valid2, valid3]
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
