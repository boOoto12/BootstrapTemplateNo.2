/* Bootstrap Template No.2 */

$(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());
        
        var navbar = $('.navbar');
        
        if($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
      
      
    }else{
      
            navbar.removeClass('scrolled');
      
         }
        //  Deal With Tabs 
        
        $(".tabs ul li").click(function(){
            
            // Add Selected Class To Active Link
            
            $(this).addClass('selected').siblings().removeClass('selected');
            
            // Hid All Divs
            
            $('.tabs .tabs-content > div').hide();
            
            // Show The Selected Tab Content 
            
            $('.' + $(this).data('class')).show();
        });
        
    });
	
	
	
	         // Loading Page 
    
		$(window).on('load', function () {

			"use strict";

			$(".loading-overlay .sk-circle").fadeOut(2000, function(){
				
				
				$('.loading-overlay').fadeOut(1000);
				
//				$("html, body").css("overflow", "auto");
			});
												  
												  
												   
		
		});
	
	
	   // Nice Scroll
    
    $("body").niceScroll({
        cursorcolor: "#FF8B38",
        cursorwidth: "5px",
		cursorborderradius: "100px",
		cursorborder: 0
    });
	
});




	
	

