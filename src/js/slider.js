;(function () {
	var init = function () {
		__attachEvents();
	},

	__attachEvents = function () {
		$( document ).on( 'click', '.slider-nav-item--dot', handleClickNavButton );
		$( document ).on( 'click', '.slider-nav-items .prev', handleClickPrevButton );
		$( document ).on( 'click', '.slider-nav-items .next', handleClickNextButton );
	},

	handleClickNavButton = function ( event, element ) {
		var navButton = $( '.slider-nav-item--dot' ),
			index = navButton.index( this ),
			activeClass = 'active';

		slider.move( index )
			.then( function ( data ) {
				console.log( data );
				navButton.removeClass( activeClass );
				$( this ).addClass( activeClass );
			}.bind( this ) )
			.catch( function ( error ) {
				console.log( error );
			})
	};

	function handleClickPrevButton( e ) {
		e.preventDefault();
		slider.prev();
	}

	function handleClickNextButton( e ) {
		e.preventDefault();
		slider.next();
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
			return new Promise( function (resolve, reject) {
				currentIndex = index;
				slider.animate( {left: ( -currentIndex * 100 ) + '%'}, 200, function () {
					resolve( 'animatio completed. Index is ' + currentIndex );
					
					reject( new Error( 'Some Error' ) );
				} );
			});
		}
		
		function _next() {
			if (currentIndex >= itemsCount - 1) {
				currentIndex = 0;
			} else {
				currentIndex++;
			}
			_move( currentIndex );
		}
		
		function _prev() {
			if (currentIndex <= 0) {
				currentIndex = itemsCount - 1;
			} else {
				currentIndex--;
			}
			_move( currentIndex );
		}
	})();


	$( document ).ready( function () {
		init();
	});
})();