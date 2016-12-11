;(function(){
	var openClass = 'is-open',
		menu = $( '.mobile-menu' );

	$( document ).ready( function () {
		init();
	});


	function init() {
		__attachEvents();
	}

	function __attachEvents() {
		$( 'a.openMobileMenu' ).click( handleOpenMenu );
		$( 'a.closeMobileMenu' ).click( handleCloseMenu );
	}

	function handleOpenMenu() {
		$( this ).addClass( openClass );
		menu.addClass( openClass );
	}

	function handleCloseMenu() {
		$( this ).removeClass( openClass );
		menu.removeClass( openClass );
	}
})();