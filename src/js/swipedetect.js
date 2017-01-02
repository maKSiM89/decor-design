var swipeDetect = function (element, callback) {
	var touchElement = $( element ),
		direction,
		startX, startY,
		distanceX, distanceY,
		threshold = 150,
		restraint = 100,
		allowedTime = 300,
		elapsedTime, startTime,
		handleSwipeCallback = callback || function(){};

	touchElement.on('touchstart', function (event) {
		var touchObject = event.changedTouches[0];

		direction = 'none';
		startX = touchObject.pageX;
		startY = touchObject.pageY;
		startTime = (new Date()).getTime();
		event.preventDefault();
	});

	touchElement.on('touchmove', function (event) {
		event.preventDefault();
	});

	touchElement.on('touchend', function (event) {
		var touchObject = event.changedTouches[0];
		distanceX = touchObject.pageX - startX;
		distanceY = touchObject.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;

		if (elapsedTime <= allowedTime) {
			if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
				direction = (distanceX < 0)? 'left' : 'right';
			} else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint){
				direction = (distanceY < 0)? 'up' : 'down'
			}

		}

		handleSwipeCallback(direction);
		event.preventDefault();
	});
};