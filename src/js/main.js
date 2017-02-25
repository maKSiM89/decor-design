;(function () {
	var popupElement = $('.popup'),
			popupImg = popupElement.find('img');

			function init() {
				__attachEvents();
			}

			function __attachEvents() {
				$('a.show-popup').on('click', handleShowPopup);
				$('.close-popup').on('click', handleHidePopup);
				$('button[type=submit]').click(handleSubmitCollectionForm);
			}

			function handleShowPopup(event) {
				var img = $(this).find('img'),
					imgSrc = img.attr('src');

				event.preventDefault();
				popupImg.attr('src', imgSrc);

				popupElement.show();
			}

			function handleHidePopup(event) {
				event.preventDefault();
				popupElement.hide();
			}

			function handleSubmitCollectionForm(e) {
				var form = $( this ).parents('form'),
					isValid = true;

				e.preventDefault();

				isValid = formValidator.validate( form );
				if (isValid) {
					$.post(
						form.attr('action'),
						form.serialize(),
						function() {
							showMessage(true);
						}
					);
				} else {
					showMessage(false);
				}
			}

			function showMessage( isValid ) {
				var errorMessage = $( '.form-message .error' ),
					noticeMessage = $( '.form-message .notice' );

				if (!isValid) {
					noticeMessage.hide();
					errorMessage.show();
				} else {
					errorMessage.hide();
					noticeMessage.show();
				}
		}

		$(document).ready(function () {
			init();
		});
})();