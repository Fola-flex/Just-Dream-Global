let mail = document.getElementById('display_mail');
let phone = document.getElementById('display_phone');

function changeToPhone() {
    mail.style.display = "none";
    phone.style.display = "block";
}

function changeToMail() {
    phone.style.display = "none";
    mail.style.display = "block";
}