const form = document.getElementById('form');
const email = document.getElementById('email');
const tel = document.getElementById('phone');
let map_btn = document.getElementById('map_btn');
let map_container = document.getElementsByClassName('map-area')[0];

map_btn.addEventListener('click', () => {
    map_container.classList.toggle('show')

    if (map_container.classList.contains('show')) {
        map_btn.innerHTML = 'Close Map';
    } else {
        map_btn.innerHTML = 'View on Map';
    }
})

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
            form.reset()
            return notyf.success('Your message has been received')
            })
        }  

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
