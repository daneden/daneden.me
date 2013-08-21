function slide(n) {
	$('.active').removeClass('active').addClass('inactive');
	$('.slide' + n).addClass('active').removeClass('inactive');
}

function mode(a) {
	$('body').removeClass().addClass(a);
}

$(document).ready(function() {
	$('.method').append('Using CSS animations');
});