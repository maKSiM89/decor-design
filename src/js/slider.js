;(function () {
	var activeClass = 'active',
		navButton = $( '.slider-nav-item--dot' );

	var init = function () {
		__attachEvents();

		/*setInterval(function () {
			slider.next()
				.then( function ( index ) {
					handleAfterSlideMovementAction( index );
				});
		}, 5000);*/
	},

	__attachEvents = function () {
		$( document ).on( 'click', '.slider-nav-item--dot', handleClickNavButton );
		$( document ).on( 'click', '.slider-arrows .prev', handleClickPrevButton );
		$( document ).on( 'click', '.slider-arrows .next', handleClickNextButton );
		swipeDetect( '.slider-line', handleSwipeSlider );
	},

	handleClickNavButton = function ( event, element ) {
		var index = navButton.index( this );

		slider.move( index )
			.then( function ( index ) {
				handleAfterSlideMovementAction( index );
			});
	};

	function handleClickPrevButton( e ) {
		e.preventDefault();
		slider.prev()
			.then( function ( index ) {
				handleAfterSlideMovementAction( index );
			});
	}

	function handleClickNextButton( e ) {
		e.preventDefault();
		slider.next()
			.then( function ( index ) {
				handleAfterSlideMovementAction( index );
			} );
	}
	
	function handleSwipeSlider( direction ) {
		if (direction === 'left') {
			slider.next()
				.then( function ( index ) {
					handleAfterSlideMovementAction( index );
				});
		}
		if (direction === 'right') {
			slider.prev()
				.then( function ( index ) {
					handleAfterSlideMovementAction( index );
				});
		}
	}
	
	function handleAfterSlideMovementAction( index ) {
		navButton.removeClass( activeClass );
		$( navButton[index] ).addClass( activeClass );
	}

	// slider object
	var slider = (function () {
		var slider = $( '.slider-line' ),
			itemsCount = $( '.slider-item' ).length,
			currentIndex = 0;

		return {
			move: _move,
			next: _next,
			prev: _prev
		};

		function _move( index ) {
			return new Promise( function (resolve) {
				currentIndex = index;
				slider.animate( {left: ( -currentIndex * 100 ) + '%'}, 500, function () {
					resolve( currentIndex );
				} );
			});
		}
		
		function _next() {
			if (currentIndex >= itemsCount - 1) {
				currentIndex = 0;
			} else {
				currentIndex++;
			}
			return _move( currentIndex );
		}
		
		function _prev() {
			if (currentIndex <= 0) {
				currentIndex = itemsCount - 1;
			} else {
				currentIndex--;
			}
			return _move( currentIndex );
		}
	})();


	$( document ).ready( function () {
		init();
	});
})();