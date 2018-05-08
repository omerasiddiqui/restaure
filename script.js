var $hamburger = $(".hamburger");

$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('.menu-inner').toggleClass('hide');
    $('.menu bars').toggleClass('hide');
});

///////////////////////////////////////////////////////////////////

$('.exit').on("click",function(){
$('.overlay').css('opacity', '0');
});

////////////////////////////////////////////////////////////////////
// Smooth scroll

$('nav a').smoothScroll({
  offset: 100,
  speed: 1000
});
