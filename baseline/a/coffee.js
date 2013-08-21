// Wake up! Let's get this party started.
$(document).ready(function(){
	var toggle = false;
	
	$('.toggle.butt').click(function(){
		if(toggle===false) {
			$(this).addClass('on').html('Turn Baseline.js off');
			$('.demo img').baseline(24);
			toggle = true;
		} else {
			$(this).removeClass('on').html('Turn Baseline.js on');
			$('.demo img').each(function(){
				$(this).removeAttr('style');
			});
			toggle = false;
		}
	});
});