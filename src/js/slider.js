;(function () {
	var activeClass = 'active',
		navButton = $( '.slider-nav-item--dot' );

	var init = function () {
		__attachEvents();

		setInterval(function () {
			slider.next()
				.then( function ( data ) {
					console.log( data );
					navButton.removeClass( activeClass );
					$( navButton[data] ).addClass( activeClass );
				}.bind( this ) )
				.catch( function ( error ) {
					console.log( error );
				})
		}, 5000);
	},

	__attachEvents = function () {
		$( document ).on( 'click', '.slider-nav-item--dot', handleClickNavButton );
		$( document ).on( 'click', '.slider-nav-items .prev', handleClickPrevButton );
		$( document ).on( 'click', '.slider-nav-items .next', handleClickNextButton );
	},

	handleClickNavButton = function ( event, element ) {
		var index = navButton.index( this );

		slider.move( index )
			.then( function ( data ) {
				console.log( 'current index is: ' + data );
				navButton.removeClass( activeClass );
				$( navButton[data] ).addClass( activeClass );
			} )
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
			return new Promise( function (resolve) {
				currentIndex = index;
				slider.animate( {left: ( -currentIndex * 100 ) + '%'}, 500, function () {
					resolve( currentIndex );
				} );
			});
		}
		
		function _next() {
			if (currentIndex >= itemsCount - 1) {
				currentIndex = 0;
			} else {
				currentIndex++;
			}
			return _move( currentIndex );
		}
		
		function _prev() {
			if (currentIndex <= 0) {
				currentIndex = itemsCount - 1;
			} else {
				currentIndex--;
			}
			return _move( currentIndex );
		}
	})();


	$( document ).ready( function () {
		init();
	});
})();
