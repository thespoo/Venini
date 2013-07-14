
$(document).ready(function() {

// unfactored code for dropdown under contacts section.
	
	// $('.find').click(function() {
	// 	$('.footer-contact').slideUp();
	// 	$('.footer-follow').slideUp();
	// 	$('.footer-find').slideToggle("slow");
	// 	$('html,body').animate({scrollTop: $('.footer-find').offset().top},'slow');
	// });
	
	// $('.contact').click(function() {
	// 	$('.footer-find').slideUp();
	// 	$('.footer-follow').slideUp();
	// 	$('.footer-contact').slideToggle("slow");
	// 	if( $('.footer-contact').is(':visible')) {
	// 		$('html,body').animate({scrollTop: $('.footer-contact').offset().top},'slow');
	// 	}
	// });

	// $('.follow').click(function() {
	// 	$('.footer-find').slideUp();
	// 	$('.footer-contact').slideUp();
	// 	$('.footer-follow').slideToggle("slow");
	// 	$('html,body').animate({scrollTop: $('.footer-follow').offset().top},'slow');
	// });
	

// Unfactored code for the navbar animations

	$('.background-desk').waypoint(function() {
		$('#nav a#desk').toggleClass('current');
	}, { offset: 270, continuous: false });

	$('#desk-bottom').waypoint(function(dir) {
		if (dir === 'down' ) {
			$('a#desk').removeClass('current');
		}
		else {
			$('a#desk').addClass('current');
		}
	}, {offset: 270});



	$('.background-location').waypoint(function() {
		$('#nav a#work').toggleClass('current');
	}, {offset: 350 });

	$('#loc-bottom').waypoint(function(dir) {
		if (dir === 'down' ) {
			$('a#work').removeClass('current');
		}
		else {
			$('a#work').addClass('current');
		}
	}, {offset: 270});

	$('.background-meeting').waypoint(function() {
		$('a#portfolio').toggleClass('current');
	}, { offset: 350 });

	$('#meeting-bottom').waypoint(function(dir) {
		if (dir === 'down' ) {
			$('a#portfolio').removeClass('current');
		}
		else {
			$('a#portfolio').addClass('current');
		}
	}, {offset: 270});

// jQuery for the hovering over the contacts links. Will inevitably need refactoring.


	$(".box.find").hover(function() {

		$(".find-passive").slideToggle(function () {
			$(".find-slide").slideToggle();
		});
	}, function () {
		$(".find-slide").slideToggle(function() {
			$(".find-passive").slideToggle();

		});
	});

	$(".box.contact").hover(function() {

		$(".contact-passive").slideToggle(function () {
			$(".contact-slide").slideToggle();
		});
	}, function () {
		$(".contact-slide").slideToggle(function() {
			$(".contact-passive").slideToggle();

		});
	});

	$(".box.follow").hover(function() {

		$(".follow-passive").slideToggle(function () {
			$(".follow-slide").slideToggle();
		});
	}, function () {
		$(".follow-slide").slideToggle(function() {
			$(".follow-passive").slideToggle();

		});
	});
});

