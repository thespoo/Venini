
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

	// For the minimized nav bar.



	$('.background-desk').waypoint(function() {
		$('#nav-min').slideToggle();
	})

	$('.background-desk').waypoint(function() {
		$('#nav a#desk').toggleClass('current');
	}, { offset: 270 });

	$('#desk-bottom').waypoint(function(dir) {
		if (dir === 'down' ) {
			$('a#desk').removeClass('current');
			$('a#work').addClass('current');
		}
		else {
			$('a#desk').addClass('current');
			$('a#work').removeClass('current');
		}
	});

	$('.background-location').waypoint(function() {
		$('#nav a#work').toggleClass('current');
	});

	$('#loc-bottom').waypoint(function(dir) {
		if (dir === 'down' ) {
			$('a#work').removeClass('current');
		}
		else {
			$('a#work').addClass('current');
		}
	});

	$('.background-meeting').waypoint(function() {
		$('a#portfolio').toggleClass('current');
	});

	$('#meeting-bottom').waypoint(function(dir) {
		if (dir === 'down' ) {
			$('a#portfolio').removeClass('current');
		}
		else {
			$('a#portfolio').addClass('current');
		}
	});

// jQuery for the hovering over the contacts links. Will inevitably need refactoring.


	$(".box.find").hover(function() {

		$(".find-passive").slideToggle(function () {
			$(".find-slide").slideToggle();
		});
	}, function () {
		$(".find-slide").slideToggle(function() {
			$(".find-passive").stop(true, true).slideToggle();

		});
	});

	$(".box.contact").hover(function() {

		$(".contact-passive").slideToggle(function () {
			$(".contact-slide").slideToggle();
		});
	}, function () {
		$(".contact-slide").slideToggle(function() {
			$(".contact-passive").stop(true, true).slideToggle();

		});
	});

	$(".box.follow").hover(function() {

		$(".follow-passive").slideToggle(function () {
			$(".follow-slide").stop(true, true).slideToggle();
		});
	}, function () {
		$(".follow-slide").slideToggle(function() {
			$(".follow-passive").slideToggle();

		});
	});
});

