jQuery(document).ready(function(){
	jQuery(".main-menu .bar").click(function(){
		jQuery(".main-menu ul").slideToggle(500);
	});
	

jQuery(window).resize(function(){
	var screenSize = jQuery(window).width();
	if(screenSize>768){
		jQuery(".main-menu ul").removeAttr("style");
	}
});

jQuery(".main-menu ul li ").click(function(){
	jQuery(this).children("ul").slideToggle(1000);
})	
	
})