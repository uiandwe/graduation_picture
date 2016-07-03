

window.onload = function () {

	$.fn.horizontalmouse = function () {
		var myimage = document.getElementById(this.selector.replace("#", ""));
		console.log();
		if (myimage.addEventListener) {
			myimage.addEventListener("mousewheel", MouseWheelHandler, false);
			myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
		} else myimage.attachEvent("onmousewheel", MouseWheelHandler);

		function MouseWheelHandler(e) {

			var e = window.event || e;
			var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));

			$(this).animate({
				scrollLeft: '-=' + delta * 100
			}, 10);

			return false;
		}
	};

	$(function () {
		$("#overflow-x").horizontalmouse();
	});
};