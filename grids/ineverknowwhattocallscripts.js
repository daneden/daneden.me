var	toggle   = document.getElementsByClassName('toggle')[0],
	root     = document.getElementsByTagName('body')[0],
	overlay = 0;

toggle.addEventListener('click', function() {
	if(overlay==0) {
		root.className = 'overlay';
		overlay = 1;
	} else {
		root.className = 'no-overlay';
		overlay = 0;
	}
});