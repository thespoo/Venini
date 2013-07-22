
$(document).ready(function() {

	$('#locale').click(function(e) {
		$('.english').slideToggle();
		$('.italian').slideToggle();

		e.preventDefault();

	});

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



