let mail = document.getElementById('display_mail');
let phone = document.getElementById('display_phone');
let other_option = document.getElementById('display_option');
let nigeria = document.getElementById('nigeria');
let others = document.getElementById('others');

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