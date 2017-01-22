;(function () {
	function init() {
		var isValidation = $( '[td-validation]' ).length > 0;

		if (isValidation) {
			__attachEvents();
		}
	}

	function __attachEvents() {
		$( '[type=submit]' ).on( 'click', handleSubmitForm );
	}
	
	function handleSubmitForm( event ) {
		var inputs = $( '.form-control' );

		event.preventDefault();

		validate( inputs );
	}

	function validate( inputs ) {
		var isValid = true,
			emailPattern = new RegExp('^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'),
			value, name;

		showMessage( isValid );

		inputs.removeClass( 'error-input' );
		$.each( inputs, function ( index, input ) {
			value = $( input ).val();
			name = $( input ).attr( 'name' );
			if ( $( input ).val() === '' || $( input ).val() == 0 ) {
				isValid = false;
				$( input ).addClass( 'error-input' );
			}
			if ( name === 'Email' && !emailPattern.test( value ) ) {
				isValid = false;
				$( input ).addClass( 'error-input' );
			}
		});

		showMessage( isValid );
	}

	function showMessage( isValid ) {
		var errorMessage = $( '.form-message .error' ),
			noticeMessage = $( '.form-message .notice' );

		if ( !isValid ) {
			noticeMessage.hide();
			errorMessage.show();
		} else {
			errorMessage.hide();
			noticeMessage.show();
		}
	}

	$( document ).ready( init );
})();