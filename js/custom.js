$(document).ready(function() {
	
	$('.find').click(function() {
		$('.footer-contact').slideUp();
		$('.footer-follow').slideUp();
		$('.footer-find').slideToggle("slow");
		$('html,body').animate({scrollTop: $('.footer-find').offset().top},'slow');
	});
	
	$('.contact').click(function() {
		$('.footer-find').slideUp();
		$('.footer-follow').slideUp();
		$('.footer-contact').slideToggle("slow");
		if( $('.footer-contact').is(':visible')) {
			$('html,body').animate({scrollTop: $('.footer-contact').offset().top},'slow');
		}
	});
	
	$('.follow').click(function() {
		$('.footer-find').slideUp();
		$('.footer-contact').slideUp();
		$('.footer-follow').slideToggle("slow");
		$('html,body').animate({scrollTop: $('.footer-follow').offset().top},'slow');
	});
	
	$('.background-desk').waypoint(function() {
		$('#nav a#desk').toggleClass('current');
	
	}, { offset: 270, continuous: false });


	$('.background-location').waypoint(function() {
		$('#nav a#work').toggleClass('current');
	}, {offset: 270 });

	$('.background-meeting').waypoint(function() {
		$('a#portfolio').toggleClass('current');
	}, { offset: 270 });
});

