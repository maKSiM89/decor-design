;(function () {
	var popupElement = $( '.popup' ),
		popupImg = popupElement.find( 'img' );

	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( 'a.show-popup' ).on( 'click', handleShowPopup );
	};

	function handleShowPopup( event ) {
		var img = $( this ).find( 'img' ),
			imgSrc = img.attr( 'src' ) || '';

		event.preventDefault();
		popupImg.attr( 'src', imgSrc );

		if ( imgSrc ) {
			popupElement.show();
			$( '.close-popup' ).on( 'click', handleHidePopup );
		}
	}

	function handleHidePopup( event ) {
		event.preventDefault();
		popupElement.hide();

		$( '.close-popup' ).off( 'click', handleHidePopup );
	}

	$( document ).ready( function () {
		init();
	});
})();