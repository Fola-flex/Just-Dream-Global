document.getElementById("input").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, var(--hover-color) 0%, var(--hover-color) ' + value + '%, var(--background-color) ' + value + '%, var(--background-color) 100%)';
    let loan_amt = document.getElementById('loan-amount');
    let input = document.getElementById('input');
    let loan_value = input.value;
    loan_amt.value = loan_value;
};

let months6 = document.getElementById('months6-tab');
    let months12 = document.getElementById('months12-tab');
    let months18 = document.getElementById('months18-tab');
    let interest6 = document.getElementById('months6');
    let interest12 = document.getElementById('months12');
    let interest18 = document.getElementById('months18');

    months6.addEventListener('click', () => {
        months6.classList.add('highlight');
        months12.classList.remove('highlight');
        months18.classList.remove('highlight');
        interest6.classList.add('active', 'show')
        interest12.classList.remove('active', 'show')
        interest18.classList.remove('active', 'show')
    })

    months12.addEventListener('click', () => {
        months12.classList.add('highlight');
        months6.classList.remove('highlight');
        months18.classList.remove('highlight');
        interest12.classList.add('active', 'show')
        interest6.classList.remove('active', 'show')
        interest18.classList.remove('active', 'show')
    })

    months18.addEventListener('click', () => {
        months18.classList.add('highlight');
        months6.classList.remove('highlight');
        months12.classList.remove('highlight');
        interest18.classList.add('active', 'show')
        interest6.classList.remove('active', 'show')
        interest12.classList.remove('active', 'show')
    })


    