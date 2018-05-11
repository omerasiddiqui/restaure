// Nav popout
var $hamburger = $(".hamburger");

$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('.menu-inner').toggleClass('hide');
    $('.menu bars').toggleClass('hide');
});

///////////////////////////////////////////////////////////////////
// Exit overlay

const overlay = $('.overlay');
const galleryItem = $('.gallery-item');
const description = $('.item-description');

  $('.exit').on("click",function(){
  $(this).parent(overlay).addClass('displayNone');
  $(this).parent(overlay).parent(galleryItem).find(description).toggleClass('show');
  });


  $('.item-description').on("click", function(){
        $(this).toggleClass('hide');
        $(this).toggleClass('show');
        $(this).siblings('.overlay').removeClass('displayNone');
});

//////////////////////////////////////////////////////////////////

// CONTACT ANIMATION
let $contactForm = $('#contact');

$contactForm.waypoint(function() {
    $contactForm.addClass('animated zoomInDown show');
  }, {
    offset: '50%'
  });

  ////////////////////////////////////////////////////////////

// SMOOTH scroll

$('nav a').smoothScroll({
  offset: -17,
  speed: 1000
});

//////////////////////////////////////////////////////////////////
