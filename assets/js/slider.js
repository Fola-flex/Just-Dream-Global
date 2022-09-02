var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  autoPlay: 6000,
  wrapAround: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.testimonial-carousel', {
  // options
  autoPlay: 4000,
  wrapAround: true,
  prevNextButtons: false
});