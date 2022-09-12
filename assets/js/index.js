let navbtn = document.getElementById('bars');
let year = document.getElementsByClassName('year')[0];
let display_year = new Date()

year.innerHTML = display_year.getFullYear();

navbtn.addEventListener('click', () => {
    shownav(); 
    document.body.classList.toggle('no-scroll')  
});

function shownav() {
    list.classList.toggle('sidenav');
    
    if (list.classList.contains('sidenav')) {
        navbtn.innerHTML = '&times;';
        navbtn.style.fontSize = '35px';

    } else {
        navbtn.innerHTML = '&#9776;';
        navbtn.style.fontSize = '25px';
    }
};



/*section animation */
const fades = document.querySelectorAll('.reveal');

const appearOption = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) 
{entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active_');
    }
})}, appearOption)

fades.forEach(fader => {
    appearOnScroll.observe(fader);
});

let newHeader = document.getElementById('header');
let headerHeight = newHeader.offsetTop + newHeader.offsetHeight
let topBtn = document.getElementsByClassName('scrollToTop')[0]

window.addEventListener('scroll', () => {
    displayHeader()
    showTopBtn()
});

function displayHeader() {
    if (window.scrollY < headerHeight) {
        newHeader.style.position = "initial";
        newHeader.classList.remove('animated', 'fadeInDown')
    } else {
        newHeader.style.position = "sticky";
        newHeader.classList.add("animated", "fadeInDown")
    }
}

function showTopBtn() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ) {
        topBtn.style.visibility = 'visible';
        topBtn.style.opacity = '1';
        topBtn.classList.add('show_btn')
    } else {
        topBtn.style.visibility = 'none';
        topBtn.style.opacity = '0'
        topBtn.classList.remove('show_btn')
    }
}

function goTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}