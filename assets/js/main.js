

  AOS.init();
 

       var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
        }

        $(document).ready(function(){
          $(".meanclose").hide();
            $(".open-menu").click(function(){
              $(".open-menu").hide();
              $(".meanclose").show();
              $(".mean-nav").show();
            });
            $(".meanclose").click(function(){
              $(".open-menu").show();
              $(".meanclose").hide();
              $(".mean-nav").hide();
            });

            $(".dropdown-mobile").click(function(){
              $(".dropdown-content-mobile").toggle();
            });
          });
         

          


          $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            autoplay:true,
            asNavFor: '.slider-nav'
          });
          $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            autoplay:true
          });

          // Init fancybox, skip cloned elements
// $().fancybox({
//   selector : selector,
//   backFocus : false,
//   animationEffect : "fade"
// });