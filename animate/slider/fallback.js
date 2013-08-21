function slide(n) {
	$('.active').removeClass('active').addClass('inactive');
	$('.slide' + n).removeClass('inactive').addClass('active');
}

$(document).ready(function() {
	$('.inactive').hide();
	$('.method').append('Using jQuery fallback');
});