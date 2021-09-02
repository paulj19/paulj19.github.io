/* Author: Alvaro Casanova 	

*/

function share() {
	
	//Get current URL 
	var url = encodeURI(window.location.href);
		
	//facebook
	var facebookUrl = jQuery("#facebook").attr("href");
	jQuery("#facebook").attr("href", facebookUrl+url)
	
	//linkedin
	var liUrl = jQuery("#linkedin").attr("href");
	jQuery("#linkedin").attr("href", liUrl+url);
	
	//+1
	var googleUrl = jQuery("#google").attr("href");
	jQuery("#google").attr("href", googleUrl+url);
	
}



function tooltips() {
	
	
	//get toltip elements
	var tooltips = jQuery(".tooltip");
	tooltips.each(function() {
		
		var element = jQuery(this);
        var titleAttr = element.attr("title");
        element.data('title', titleAttr);
		element.removeAttr("title");
		
		//create tooltip
		var tool = document.createElement("p");
		jQuery(tool).append(titleAttr).addClass("tooltip-box").css({ display: "none", opacity : 0});
		element.append(tool);
	
	});

	
	//show & hide tooltip
	tooltips.hover(function(){
		
		var tooltipElement = jQuery(this).parent().find(".tooltip-box");
		tooltipElement.stop(false, true);
		
		if(!tooltipElement.hasClass("tooltipShow")) {
				
				tooltipElement.addClass("tooltipShow").css("display", "block").animate({
					
						opacity: 1, 
						top: "-=4"

					}, 100);
		}
		
	
	}, function() {
		
		var tooltipElement = jQuery(this).parent().find(".tooltip-box");
		tooltipElement.stop(false, true);

		if(tooltipElement.hasClass("tooltipShow")) {

				tooltipElement.removeClass("tooltipShow").animate({ opacity: 0, top: "+=4" }, 100, function() {
					
					jQuery(this).css("display", "none");
					
				});

		}
		
	
	 });
	
	
	tooltips.focus(function(){
		
		var tooltipElement = jQuery(this).parent().find(".tooltip-box");
		tooltipElement.stop(false, true);
		
		if(!tooltipElement.hasClass("tooltipShow")) {
				
				tooltipElement.addClass("tooltipShow").animate({

						opacity: 1, 
						top: "-=4"

					}, 200);
		}
	});
		
	tooltips.blur(function(){
		var tooltipElement = jQuery(this).parent().find(".tooltip-box");
		tooltipElement.stop(false, true);
		
		if(tooltipElement.hasClass("tooltipShow")) {
				
				tooltipElement.removeClass("tooltipShow").animate({ opacity: 0, top: "+=4" }, 200);
				
		}
		
	
	});
	


	
	
}








jQuery(document).ready(function() {

	//share();
	tooltips();

});







