document.getElementById("input").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, var(--hover-color) 0%, var(--hover-color) ' + value + '%, var(--background-color) ' + value + '%, var(--background-color) 100%)';
    let loan_amt = document.getElementById('loan-amount');
    let input = document.getElementById('input');
    let loan_value = input.value;
    loan_amt.value = loan_value;
};

    let months12 = document.getElementById('months12-tab');
    let months18 = document.getElementById('months18-tab');
    let months24 = document.getElementById('months24-tab');
    let months36 = document.getElementById('months36-tab');
    let interest12 = document.getElementById('months12');
    let interest18 = document.getElementById('months18');
    let interest24 = document.getElementById('months24');
    let interest36 = document.getElementById('months36');

    months12.addEventListener('click', () => {
        months12.classList.add('highlight');
        months18.classList.remove('highlight');
        months24.classList.remove('highlight');
        months36.classList.remove('highlight');
        interest12.classList.add('active', 'show')
        interest18.classList.remove('active', 'show')
        interest24.classList.remove('active', 'show')
        interest36.classList.remove('active', 'show')
    })

    months18.addEventListener('click', () => {
        months18.classList.add('highlight');
        months12.classList.remove('highlight');
        months24.classList.remove('highlight');
        months36.classList.remove('highlight');
        interest18.classList.add('active', 'show')
        interest12.classList.remove('active', 'show')
        interest24.classList.remove('active', 'show')
        interest36.classList.remove('active', 'show')
    })

    months24.addEventListener('click', () => {
        months24.classList.add('highlight');
        months12.classList.remove('highlight');
        months18.classList.remove('highlight');
        months36.classList.remove('highlight');
        interest24.classList.add('active', 'show')
        interest12.classList.remove('active', 'show')
        interest18.classList.remove('active', 'show')
        interest36.classList.remove('active', 'show')
    })

    months36.addEventListener('click', () => {
        months36.classList.add('highlight');
        months12.classList.remove('highlight');
        months18.classList.remove('highlight');
        months24.classList.remove('highlight');
        interest36.classList.add('active', 'show')
        interest12.classList.remove('active', 'show')
        interest18.classList.remove('active', 'show')
        interest24.classList.remove('active', 'show')
    })