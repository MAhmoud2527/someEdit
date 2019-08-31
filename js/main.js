$(function() {

	$(".container").mixItUp();
	
	var inputText;
	var $matching = $();
	
	// Delay function
	var delay = (function(){
	  var timer = 0;
	  return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	  };
	})();
	
	$("#input").keyup(function(){
	  // Delay function invoked to make sure user stopped typing
	  delay(function(){
		inputText = $("#input").val().toLowerCase();
		
		// Check to see if input field is empty
		if ((inputText.length) > 0) {            
		  $( '.mix').each(function() {
			$this = $("this");
			
			 // add item to be filtered out if input text matches items inside the title   
			 if($(this).children('.title').text().toLowerCase().match(inputText)) {
			  $matching = $matching.add(this);
			}
			else {
			  // removes any previously matched item
			  $matching = $matching.not(this);
			}
		  });
		  $(".container").mixItUp('filter', $matching);
		}
	
		else {
		  // resets the filter to show all item if input is empty
		  $(".container").mixItUp('filter', 'all');
		}
	  }, 200 );
	});
	})
	


	"use strict";

	


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// navigation



	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
    

//   $('#gallary').mixItUp({
//     selectors: {
//       filter: '.filter'
// 		},
// 		controls: {
// 			scope: 'local'
// 		 }
//   });





	 //trigger mixItUp
	// $("#gallary").mixItUp();
	// $("#gallary2").mixItUp();
	//adjust shuffel links
	$('.scrollmenu a').click(function () {
		$(this).addClass('selected').siblings().removeClass('selected'); 
 
	});
		///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	$('.icon').click(function(){
        $('.search').toggleClass('active');
    });

	



