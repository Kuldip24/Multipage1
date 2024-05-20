 $(document).ready(function(){

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the header
  var header = document.getElementById("myHeader");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  
    } else {
      header.classList.remove("sticky");
    }
  }

      // Mobile menu start---------------------
        $('.mobile_menu').hide();
  
        $('.mobile_btn').click(function(){
          $('.mobile_menu').animate({
            height: "toggle"
          });
          $(this).find('i').toggleClass('fa-bars fa-times',);
        });
      
      // Mobile menu end------------------

      // add active class in navbar----- 
      $('.main_menu > li a').click(function(){
        $('.main_menu > li a').removeClass('active');
        $(this).addClass('active');
      });

      // add active class in isotope----- 
      $('.button-group > button').click(function(){
        $('.button-group > button').removeClass('active');
        $(this).addClass('active');
      });
      

  // banner section start (owl-carousel) #slider1--------
  $('.slickslider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    prevArrow: '.slidePrevoues',
    nextArrow: '.slidNext',
    arrows: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
  });

  //banner section end
  $('#slider2').owlCarousel({
    items: 4,
    loop:true,
    nav: true,
    // autoplay: true,
    dots:false,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
 });
 
  //  commet slide js part
    $('.comment-text-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      arrows: false,
      autoplaySpeed: 2500,
      infinite: true,
      fade: false,
      asNavFor: '.slider-img-main',
  });

  // comment slide js part
  $('.slider-img-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      prevArrow: '.aal',
      nextArrow: '.aar',
      arrows: true,
      autoplaySpeed: 2500,
      fades: true,
      infinite: true,
      speed: 1500,
      fade: true,
      asNavFor: '.comment-text-main',
  });

 $('#slider5').owlCarousel({
    items: 5,
    loop:true,
    nav: false,
    autoplay: true,
    dots:false,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
 });


  $('.slider6').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '.slideup',
    nextArrow: '.slidedown',
    autoplaySpeed: 2500,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                vertical: false,
            }
    }
  ]
  });

  
  // isotope section start-------------

        // init Isotope
        var $grid = $('.grid').isotope({
          // options
      });
      // filter items on button click
      $('.filter-button-group').on('click', 'button', function () {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
      });

      // filter items on button click
      $('.filter-button-group').on('click', 'button', function () {
          var filterValue = $(this).attr('data-filter');
          // use filter function if value matches
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({ filter: filterValue });
      });

// isotope section end-------------


// Fancy Box 
$("a.fancy").fancybox({
  'transitionIn': 'elastic',
  'transitionOut': 'elastic',
  'speedIn': 600,
  'speedOut': 200,
  'overlayShow': false
});

function visible(partial) {
  var $t = partial,
      $w = jQuery(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

if(visible($('.count-digit')))
  {
    if($('.count-digit').hasClass('counter-loaded')) return;
    $('.count-digit').addClass('counter-loaded');
    
$('.count-digit').each(function () {
var $this = $(this);
jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  duration: 5000,
  easing: 'swing',
  step: function () {
    $this.text(Math.ceil(this.Counter));
  }
});
});
  }
})



});

