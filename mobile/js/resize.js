'use strict';

!function () {
	//document.write('<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" >');
	resize();

	window.onresize = function () {
		resize();
	};
}();

function resize() {
	var TARGET_WIDTH = 750;
	var scale = screen.width / TARGET_WIDTH;
	document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH + ', initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=0');
}