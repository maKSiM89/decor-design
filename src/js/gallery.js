;(function () {
	var activeClass = 'active';

	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( '.gallery-items img' ).on( 'click', handleShowGallery );
		$( '.close-popup' ).on( 'click', handleHideGallery );
		$( document ).on( 'click', '.content .prev', handleClickPrevButton );
		$( document ).on( 'click', '.content .next', handleClickNextButton );
	};

	function handleShowGallery() {
		var index = $( '.gallery-items img' ).index( this );
		gallery.show( index );
	}

	function handleHideGallery() {
		gallery.hide();
	}

	function handleClickPrevButton() {
		gallery.prev();
	}

	function handleClickNextButton() {
		gallery.next();
	}

	// gallery object
	var gallery = (function () {
		var obj = $( '.gallery' ),
			popup = $( '.gallery-popup' ),
			items = obj.find( '.box img' ),
			slideLine = popup.find( '.slide' ),
			itemsCount = items.length,
			currentIndex = 0;

		return {
			show: _show,
			hide: _hide,
			next: _next,
			prev: _prev
		};

		function _show( index ) {
			var img = $( items[index] ),
				imgSrc = img.attr('src'),
				slideImg = slideLine.find( 'img' );

			popup.show();
			currentIndex = index;
			slideImg.attr( 'src', imgSrc );
		}

		function _hide() {
			popup.hide();
			currentIndex = 0;
		}

		function _next() {
			if (currentIndex >= itemsCount - 1) {
				currentIndex = 0;
			} else {
				currentIndex++;
			}
			_show( currentIndex );
		}

		function _prev() {
			if (currentIndex <= 0) {
				currentIndex = itemsCount - 1;
			} else {
				currentIndex--;
			}
			_show( currentIndex );
		}
	})();

	$( document ).ready( function () {
		init();
	});
})();