let latest = document.getElementById('latest-tab');
let loan = document.getElementById('loan-tab');
let credit = document.getElementById('credit-tab');
let business = document.getElementById('business-tab');
let latestDiv = document.getElementById('latest-articles');
let loanDiv = document.getElementById('loan-articles');
let creditDiv = document.getElementById('credit-articles');
let businessDiv = document.getElementById('business-articles');
let listItems = document.querySelectorAll('.cmn-btn');
let articleItems = document.querySelectorAll('.blog-articles');

function setActiveClass() {
  if (document.querySelector('.cmn-btn.active') != null) {
    document.querySelector('.cmn-btn.active').classList.remove('active');  
  } 
  this.classList.add('active');
}

listItems.forEach(item => {
    item.addEventListener('click', setActiveClass);
  });

latest.addEventListener('click', () => {
    latestDiv.style.display = 'grid';
    loanDiv.style.display = 'none';
    creditDiv.style.display = 'none';
    businessDiv.style.display = 'none';
})

credit.addEventListener('click', () => {
    latestDiv.style.display = 'none';
    loanDiv.style.display = 'none';
    creditDiv.style.display = 'grid';
    businessDiv.style.display = 'none';
})

loan.addEventListener('click', () => {
    latestDiv.style.display = 'none';
    loanDiv.style.display = 'grid';
    creditDiv.style.display = 'none';
    businessDiv.style.display = 'none';
})

business.addEventListener('click', () => {
    latestDiv.style.display = 'none';
    loanDiv.style.display = 'none';
    creditDiv.style.display = 'none';
    businessDiv.style.display = 'grid';
})