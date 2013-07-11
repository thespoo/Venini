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
		$('html,body').animate({scrollTop: $('.footer-contact').offset().top},'slow');
	});
	
	$('.follow').click(function() {
		$('.footer-find').slideUp();
		$('.footer-contact').slideUp();
		$('.footer-follow').slideToggle("slow");
		$('html,body').animate({scrollTop: $('.footer-follow').offset().top},'slow');
	});
});
