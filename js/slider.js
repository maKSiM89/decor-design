;(function () {
	var navButton = $( '.slider-nav-item--dot' ),
		currentIndex = 0,
		activeClass = 'active';

	navButton.click( function () {
		var index = navButton.index( this );

		navButton.removeClass( activeClass );
		$( this ).addClass( activeClass );

		move( index );
	});

	function move ( index ) {
		var offset;

		if ( index > currentIndex ) {
			offset = -index * 100;
		} else {
			offset = index * 100;
		}

		$( '.slider-line' ).animate( {left: offset + '%'}, 400 );
	}

})();