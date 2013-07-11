$(document).ready(function() {
	
	$('.find').click(function() {
		$('.footer-contact').slideUp();
		$('.footer-follow').slideUp();
		$('.footer-find').slideToggle("slow");
	});
	
	$('.contact').click(function() {
		$('.footer-find').slideUp();
		$('.footer-follow').slideUp();
		$('.footer-contact').slideToggle("slow");
			$('body').scrollTop(0);

	});
	
	$('.follow').click(function() {
		$('.footer-find').slideUp();
		$('.footer-contact').slideUp();
		$('.footer-follow').slideToggle("slow");
	});
});
