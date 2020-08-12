(function($){
	$(document).ready(function(){
		// Main Menu
		$('.responsive-bar').click(function(){
			$('.menu ul').slideToggle();
		});
		$(window).on('scroll', function(event) {    
	        var scroll = $(window).scrollTop();
	        if (scroll < 150) {
	            $(".header").removeClass("sticky");
	        } else{
	            $(".header").addClass("sticky");
	        }
	    });
	    $('.gallery-overly a').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	});
}(jQuery));