var validator = (function () {
	var emailRegExpStr = '';
	return {
		validate: validate
	};

	function validate(form) {
		var inputs = $(form).find('.form-control.required'),
			emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			value, name, isValid = true;

		inputs.removeClass('error-input');
		$.each(inputs, function (index, input) {
			value = $(input).val();
			name = $(input).attr('name');
			if ($(input).val() === '' || $(input).val() == 0) {
				isValid = false;
				$(input).addClass('error-input');
			}
			if (name === 'Email' && !emailPattern.test(value)) {
				isValid = false;
				$(input).addClass('error-input');
			}
		});

		return isValid;
	}
})();

window.formValidator = window.formValidator || validator;