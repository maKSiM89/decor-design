;(function () {
	var init = function () {
		__attachEvents();
	},
	__attachEvents = function () {
		$( '.slider-nav-item--dot' ).click( handleClickNavButton );
	},

	handleClickNavButton = function ( element ) {
		var navButton = $( '.slider-nav-item--dot' ),
			index = navButton.index( this ),
			activeClass = 'active';

		navButton.removeClass( activeClass );
		$( this ).addClass( activeClass );

		slider.move( index );
	};

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