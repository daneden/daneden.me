<!DOCTYPE html>
<html lang="en">
<head>
	<title>Animate.css - Custom Build</title>
	<link rel="stylesheet" href="../ooc.css" />
	<link rel="stylesheet" href="../animate.css" />
	<link rel="stylesheet" href="style.css" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script>
		$(document).ready(function() {
			$('.checks :checkbox').attr('checked', true);
			$('.checks label').hover(
			function() {
				var anim = $(this).html();
				$(this).addClass(anim);
			},
			function() {
				$(this).removeClass();
			}
			);
		});

		function toggleCheck(type) {
			if($('.' + type + ' input:checkbox').is(':checked')) {
				$('.' + type + ' input:checkbox' ).removeAttr('checked');
			} else {
				$('.' + type + ' input:checkbox' ).attr('checked', 'true');
			}
		}
	</script>
</head>
<body>
	<div class="container">
		<header>
			<h1>Animate.css <small><a class="back" href="http://daneden.me/animate">- Back to home page?</a></small></h1>
			<p><em>Custom build</em></p>
		</header>
		<div class="content">
			<p>Don't want to download 2500 lines of code? I dig that. Let's make something that'll work just for you.</p>
			<hr>
			<form action="build.php" method="post">
				<label>Animation duration (seconds):</label>
				<input class="input" value="1" type="number" min="0" step="0.1" name="animation-duration">
				<h3>Attention seekers <small class="alignright"><a href="javascript:toggleCheck('attention');">check/uncheck all</a></small></h3>
				<ul class="checks cf attention">
					<li><input type='checkbox' id="flash" name='flash' /><label for="flash">flash</label></li>
					<li><input type='checkbox' id="shake" name='shake' /><label for="shake">shake</label></li>
					<li><input type='checkbox' id="bounce" name='bounce' /><label for="bounce">bounce</label></li>
					<li><input type='checkbox' id="tada" name='tada' /><label for="tada">tada</label></li>
					<li><input type='checkbox' id="swing" name='swing' /><label for="swing">swing</label></li>
					<li><input type='checkbox' id="wobble" name='wobble' /><label for="wobble">wobble</label></li>
					<li><input type='checkbox' id="pulse" name='pulse' /><label for="pulse">pulse</label></li>
				</ul>

				<h3>Flippers <small class="alignright"><a href="javascript:toggleCheck('flippers');">check/uncheck all</a></small></h3>
				<ul class="checks cf flippers">
					<li><input type='checkbox' id="flip" name='flip' /><label for="flip">flip</label></li>
					<li><input type='checkbox' id="flipInX" name='flipInX' /><label for="flipInX">flipInX</label></li>
					<li><input type='checkbox' id="flipOutX" name='flipOutX' /><label for="flipOutX">flipOutX</label></li>
					<li><input type='checkbox' id="flipInY" name='flipInY' /><label for="flipInY">flipInY</label></li>
					<li><input type='checkbox' id="flipOutY" name='flipOutY' /><label for="flipOutY">flipOutY</label></li>
				</ul>

				<h3>Fading Entrances <small class="alignright"><a href="javascript:toggleCheck('fadeIn');">check/uncheck all</a></small></h3>
				<ul class="checks cf fadeIn">
					<li><input type='checkbox' id="fadeIn" name='fadeIn' /><label for="fadeIn">fadeIn</label></li>
					<li><input type='checkbox' id="fadeInUp" name='fadeInUp' /><label for="fadeInUp">fadeInUp</label></li>
					<li><input type='checkbox' id="fadeInDown" name='fadeInDown' /><label for="fadeInDown">fadeInDown</label></li>
					<li><input type='checkbox' id="fadeInLeft" name='fadeInLeft' /><label for="fadeInLeft">fadeInLeft</label></li>
					<li><input type='checkbox' id="fadeInRight" name='fadeInRight' /><label for="fadeInRight">fadeInRight</label></li>
					<li><input type='checkbox' id="fadeInUpBig" name='fadeInUpBig' /><label for="fadeInUpBig">fadeInUpBig</label></li>
					<li><input type='checkbox' id="fadeInDownDig" name='fadeInDownBig' /><label for="fadeInDownBig">fadeInDownBig</label></li>
					<li><input type='checkbox' id="fadeInLeftBig" name='fadeInLeftBig' /><label for="fadeInLeftBig">fadeInLeftBig</label></li>
					<li><input type='checkbox' id="fadeInRightBig" name='fadeInRightBig' /><label for="fadeInRightBig">fadeInRightBig</label></li>
				</ul>

				<h3>Fading Exits <small class="alignright"><a href="javascript:toggleCheck('fadeOut');">check/uncheck all</a></small></h3>
				<ul class="checks cf fadeOut">
					<li><input type='checkbox' id="fadeOut" name='fadeOut' /><label for="fadeOut">fadeOut</label></li>
					<li><input type='checkbox' id="fadeOutUp" name='fadeOutUp' /><label for="fadeOutUp">fadeOutUp</label></li>
					<li><input type='checkbox' id="fadeOutDown" name='fadeOutDown' /><label for="fadeOutDown">fadeOutDown</label></li>
					<li><input type='checkbox' id="fadeOutLeft" name='fadeOutLeft' /><label for="fadeOutLeft">fadeOutLeft</label></li>
					<li><input type='checkbox' id="fadeOutRight" name='fadeOutRight' /><label for="fadeOutRight">fadeOutRight</label></li>
					<li><input type='checkbox' id="fadeOutUpBig" name='fadeOutUpBig' /><label for="fadeOutUpBig">fadeOutUpBig</label></li>
					<li><input type='checkbox' id="fadeOutDownBig" name='fadeOutDownBig' /><label for="fadeOutDownBig">fadeOutDownBig</label></li>
					<li><input type='checkbox' id="fadeOutLeftBig" name='fadeOutLeftBig' /><label for="fadeOutLeftBig">fadeOutLeftBig</label></li>
					<li><input type='checkbox' id="fadeOutRightBig" name='fadeOutRightBig' /><label for="fadeOutRightBig">fadeOutRightBig</label></li>
				</ul>

				<h3>Sliders <small class="alignright"><a href="javascript:toggleCheck('slideIn');">check/uncheck all</a></small></h3>
				<ul class="checks cf slideIn">
					<li><input type='checkbox' id="slideInDown" name='slideInDown' /><label for="slideInDown">slideInDown</label></li>
					<li><input type='checkbox' id="slideInLeft" name='slideInLeft' /><label for="slideInLeft">slideInLeft</label></li>
					<li><input type='checkbox' id="slideInRight" name='slideInRight' /><label for="slideInRight">slideInRight</label></li>
					<li><input type='checkbox' id="slideOutUp" name='slideOutUp' /><label for="slideOutUp">slideOutUp</label></li>
					<li><input type='checkbox' id="slideOutLeft" name='slideOutLeft' /><label for="slideOutLeft">slideOutLeft</label></li>
					<li><input type='checkbox' id="slideOutRight" name='slideOutRight' /><label for="slideOutRight">slideOutRight</label></li>
				</ul>

				<h3>Bouncing Entrances <small class="alignright"><a href="javascript:toggleCheck('bounceIn');">check/uncheck all</a></small></h3>
				<ul class="checks cf bounceIn">
					<li><input type='checkbox' id="bounceIn" name='bounceIn' /><label for="bounceIn">bounceIn</label></li>
					<li><input type='checkbox' id="bounceInUp" name='bounceInUp' /><label for="bounceInUp">bounceInUp</label></li>
					<li><input type='checkbox' id="bounceInDown" name='bounceInDown' /><label for="bounceInDown">bounceInDown</label></li>
					<li><input type='checkbox' id="bounceInLeft" name='bounceInLeft' /><label for="bounceInLeft">bounceInLeft</label></li>
					<li><input type='checkbox' id="bounceInRight" name='bounceInRight' /><label for="bounceInRight">bounceInRight</label></li>
				</ul>

				<h3>Bouncing Exits <small class="alignright"><a href="javascript:toggleCheck('bounceOut');">check/uncheck all</a></small></h3>
				<ul class="checks cf bounceOut">
					<li><input type='checkbox' id="bounceOut" name='bounceOut' /><label for="bounceOut">bounceOut</label></li>
					<li><input type='checkbox' id="bounceOutUp" name='bounceOutUp' /><label for="bounceOutUp">bounceOutUp</label></li>
					<li><input type='checkbox' id="bounceOutDown" name='bounceOutDown' /><label for="bounceOutDown">bounceOutDown</label></li>
					<li><input type='checkbox' id="bounceOutLeft" name='bounceOutLeft' /><label for="bounceOutLeft">bounceOutLeft</label></li>
					<li><input type='checkbox' id="bounceOutRight" name='bounceOutRight' /><label for="bounceOutRight">bounceOutRight</label></li>
				</ul>

				<h3>Rotating Entrances <small class="alignright"><a href="javascript:toggleCheck('rotateIn');">check/uncheck all</a></small></h3>
				<ul class="checks cf rotateIn">
					<li><input type='checkbox' id="rotateIn" name='rotateIn' /><label for="rotateIn">rotateIn</label></li>
					<li><input type='checkbox' id="rotateInUpLeft" name='rotateInUpLeft' /><label for="rotateInUpLeft">rotateInUpLeft</label></li>
					<li><input type='checkbox' id="rotateInDownLeft" name='rotateInDownLeft' /><label for="rotateInDownLeft">rotateInDownLeft</label></li>
					<li><input type='checkbox' id="rotateInUpRight" name='rotateInUpRight' /><label for="rotateInUpRight">rotateInUpRight</label></li>
					<li><input type='checkbox' id="rotateInDownRight" name='rotateInDownRight' /><label for="rotateInDownRight">rotateInDownRight</label></li>
				</ul>

				<h3>Rotating Exits <small class="alignright"><a href="javascript:toggleCheck('rotateOut');">check/uncheck all</a></small></h3>
				<ul class="checks cf rotateOut">
					<li><input type='checkbox' id="rotateOut" name='rotateOut' /><label for="rotateOut">rotateOut</label></li>
					<li><input type='checkbox' id="rotateOutUpLeft" name='rotateOutUpLeft' /><label for="rotateOutUpLeft">rotateOutUpLeft</label></li>
					<li><input type='checkbox' id="rotateOutDownLeft" name='rotateOutDownLeft' /><label for="rotateOutDownLeft">rotateOutDownLeft</label></li>
					<li><input type='checkbox' id="rotateOutUpRight" name='rotateOutUpRight' /><label for="rotateOutUpRight">rotateOutUpRight</label></li>
					<li><input type='checkbox' id="rotateOutDownRight" name='rotateOutDownRight' /><label for="rotateOutDownRight">rotateOutDownRight</label></li>
				</ul>

				<h3>Lightspeed <small class="alignright"><a href="javascript:toggleCheck('lightspeed');">check/uncheck all</a></small></h3>
				<ul class="checks cf lightspeed">
					<li><input type='checkbox' id="lightSpeedIn" name='lightSpeedIn' /><label for="lightSpeedIn">lightSpeedIn</label></li>
					<li><input type='checkbox' id="lightSpeedOut" name='lightSpeedOut' /><label for="lightSpeedOut">lightSpeedOut</label></li>
				</ul>

				<h3>Specials <small class="alignright"><a href="javascript:toggleCheck('specials');">check/uncheck all</a></small></h3>
				<ul class="checks cf specials">
					<li><input type='checkbox' id="hinge" name='hinge' /><label for="hinge">hinge</label></li>
					<li><input type='checkbox' id="rollIn" name='rollIn' /><label for="rollIn">rollIn</label></li>
					<li><input type='checkbox' id="rollOut" name='rollOut' /><label for="rollOut">rollOut</label></li>
				</ul>
				<br/>
				<input class="butt butt-blue butt-small" type="submit" value="Build it" />
			</form>
		</div>
		<footer>
			<p class="cf">A thing made by <a href="http://twitter.com/_dte">Dan Eden</a></p>
		</footer>
	</div>
</body>
</html>