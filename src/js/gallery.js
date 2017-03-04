;(function () {
	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( '.gallery-items img' ).on( 'click', handleShowGallery );
		$( '.close-popup' ).on( 'click', handleHideGallery );
		$( '.gallery-popup a.prev' ).on( 'click', handleClickPrevButton );
		$( '.gallery-popup a.next' ).on( 'click', handleClickNextButton );

		$( '.slide' ).on( 'swipe', handleClickNextButton );
		swipeDetect( '.gallery-popup .slide', handleSwipeSlider );
	};

	function handleSwipeSlider( direction ) {
		if (direction === 'left') {
			gallery.next();
		}
		if (direction === 'right') {
			gallery.prev();
		}
	}

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

	function handleClickOnDocument(event) {
		var target = event.target,
			galleryNode = gallery.getNode();

		if (!$.contains(galleryNode[0], target)) {
			gallery.hide();
		}
	}

	// gallery object
	var gallery = (function () {
		var obj = $( '.gallery' ),
			popup = $( '.gallery-popup' ),
			items = obj.find( '.box > img' ),
			slideLine = popup.find( '.slide' ),
			itemsCount = items.length,
			currentIndex = 0;

		return {
			show: _show,
			hide: _hide,
			next: _next,
			prev: _prev,
			getNode: getNode
		};

		function getNode() {
			return popup;
		}

		function _show( index ) {
			var img = $( items[index] ),
				bigImg = $( img ).next().children( 'img' ),
				imgSrc = bigImg.attr('src'),
				slideImg = slideLine.find( 'img' );

			popup.show();
			currentIndex = index;
			slideImg.attr( 'src', imgSrc );

			setTimeout(function () {
				$(document).on('click', handleClickOnDocument);
			}, 0);
		}

		function _hide() {
			popup.hide();
			currentIndex = 0;

			setTimeout(function () {
				$(document).off('click', handleClickOnDocument);
			}, 0);
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