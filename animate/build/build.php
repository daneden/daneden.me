<?php

$duration = $_POST['animation-duration'];

$output = '/*
Animate.css - http://daneden.me/animate
LICENSED UNDER THE  GPL LICENSE (GPL) http://www.gnu.org/licenses/gpl.html

Copyright (c) 2013 Dan Eden

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

.animated {
	-webkit-animation-fill-mode: both;
	-moz-animation-fill-mode: both;
	-ms-animation-fill-mode: both;
	-o-animation-fill-mode: both;
	animation-fill-mode: both;
	-webkit-animation-duration: '.$duration.'s;
	-moz-animation-duration: '.$duration.'s;
	-ms-animation-duration: '.$duration.'s;
	-o-animation-duration: '.$duration.'s;
	animation-duration: '.$duration.'s;
}

.animated.hinge {
	-webkit-animation-duration: '.$duration.'s;
	-moz-animation-duration: '.$duration.'s;
	-ms-animation-duration: '.$duration.'s;
	-o-animation-duration: '.$duration.'s;
	animation-duration: '.$duration.'s;
}

';
foreach($_POST as $key => $item) {
	if(file_exists("./source/{$key}.css")) {
		$output .= file_get_contents("./source/{$key}.css") . "\n";
	}
}
header('Content-disposition: attachment; filename=animate-custom.css');
header('Content-type: text/css');
echo $output;
?>