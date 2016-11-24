;(function () {
	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( '.slider-nav-item--dot' ).click( handleClickNavButton );
	},

	handleClickNavButton = function () {
		var index = navButton.index( this ),
			activeClass = 'active';

		navButton.removeClass( activeClass );
		$( this ).addClass( activeClass );

		moveSlider( index );
	},

	moveSlider = function ( index ) {
		$( '.slider-line' ).animate( {left: ( -index * 100 ) + '%'}, 400 );
	};

	$( document ).ready( function () {
		init();
	});
})();