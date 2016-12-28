;(function () {
	var popupElement = $( '.popup' ),
		popupImg = popupElement.find( 'img' );

	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( 'a.show-popup' ).on( 'click', handleShowPopup );
		$( '.close-popup' ).on( 'click', handleHidePopup );
	};

	function handleShowPopup( event ) {
		var img = $( this ).find( 'img' ),
			imgSrc = img.attr( 'src' );

		event.preventDefault();
		popupImg.attr( 'src', imgSrc );

		popupElement.show();
	}

	function handleHidePopup( event ) {
		event.preventDefault();
		popupElement.hide();
	}

	$( document ).ready( function () {
		init();
	});
})();