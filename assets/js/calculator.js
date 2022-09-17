document.getElementById("input").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, var(--hover-color) 0%, var(--hover-color) ' + value + '%, var(--background-color) ' + value + '%, var(--background-color) 100%)';
    let loan_amt = document.getElementById('loan-amount');
    let input = document.getElementById('input');
     loan_value = input.value;
    loan_amt.value = loan_value;
    months1_amt.innerHTML = (loan_value * 5.04 / 100).toFixed(2)
    months3_amt.innerHTML = (loan_value * 15.12 / 100).toFixed(2)
    months6_amt.innerHTML = (loan_value * 32.24 / 100).toFixed(2)
};

    let months1 = document.getElementById('months1-tab');
    let months3 = document.getElementById('months3-tab');
    let months6 = document.getElementById('months6-tab');
    let interest1 = document.getElementById('months1');
    let interest3 = document.getElementById('months3');
    let interest6 = document.getElementById('months6');
    let months1_amt = document.getElementById('months1_amt');
    let months3_amt = document.getElementById('months3_amt');
    let months6_amt = document.getElementById('months6_amt');

    months1.addEventListener('click', () => {
        months1.classList.add('highlight');
        months3.classList.remove('highlight');
        months6.classList.remove('highlight');
        interest1.classList.add('active', 'show')
        interest3.classList.remove('active', 'show')
        interest6.classList.remove('active', 'show')
    })

    months3.addEventListener('click', () => {
        months3.classList.add('highlight');
        months1.classList.remove('highlight');
        months6.classList.remove('highlight');
        interest3.classList.add('active', 'show')
        interest1.classList.remove('active', 'show')
        interest6.classList.remove('active', 'show')
    })

    months6.addEventListener('click', () => {
        months6.classList.add('highlight');
        months1.classList.remove('highlight');
        months3.classList.remove('highlight');
        interest6.classList.add('active', 'show')
        interest1.classList.remove('active', 'show')
        interest3.classList.remove('active', 'show')
    })    