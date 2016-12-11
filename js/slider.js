;(function () {
	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( document ).on( 'click', '.slider-nav-item--dot', handleClickNavButton );
		$( document ).on( 'swipeleft', handleSwipeSlider );
	},

	handleClickNavButton = function ( event ) {
		console.log( this );
		var navButton = $( '.slider-nav-item--dot' ),
			index = navButton.index( this ),
			activeClass = 'active';

		navButton.removeClass( activeClass );
		$( this ).addClass( activeClass );

		slider.move( index );
	},

	handleSwipeSlider = function () {
		console.log( event );
		console.log( this );
	}

	// slider object
	var slider = (function () {
		var slider = $( '.slider-line' );

		_move = function ( index ) {
			slider.animate( {left: ( -index * 100 ) + '%'}, 400 );
		};

		return {
			move: function ( index ) {
				_move( index );
			}
		}
	})();


	$( document ).ready( function () {
		init();
	});
})();