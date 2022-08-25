let navbtn = document.getElementById('bars');

navbtn.addEventListener('click', () => {
    shownav(); 
    document.body.classList.toggle('no-scroll')  
});

function shownav() {
    list.classList.toggle('sidenav');
    
    if (list.classList.contains('sidenav')) {
        navbtn.innerHTML = '&times;';
        navbtn.style.fontSize = '55px';
        navbtn.style.top = '2%';
    } else {
        navbtn.innerHTML = '&#9776;';
        navbtn.style.fontSize = '25px';
        navbtn.style.top = '3%';
    }
};


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  autoPlay: 1500,
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.testimonial-carousel', {
  // options
  autoPlay: 2000,
  wrapAround: true,
  prevNextButtons: false
});

fades = document.querySelector('#header');
const appearOption = {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries)  {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
        entry.target.classList.remove('animated', 'fadeInDown');
        entry.target.style.position = "initial";
    } else {
        entry.target.classList.add('animated', 'fadeInDown');
    }
})}, appearOption)

appearOnScroll.observe(fades)

