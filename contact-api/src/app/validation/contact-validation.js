const contactValidator = (contact) => {
	let errors = [];
	if (!contact.name) {
		errors.push({
			field: 'name',
			message: 'O nome é obrigatório.',
		});
	}

	if (
		contact.email &&
		contact.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]*/) == null
	) {
		errors.push({
			field: 'email',
			message: 'Email inválido',
		});
	}

	if (
		contact.phone &&
		contact.phone.match(/^\(\d{2}\) \d{4,5}-\d{4}$/) == null
	) {
		errors.push({
			field: 'phone',
			message: 'Telefone inválido',
		});
	}

	if (contact.cell && contact.cell.match(/^\(\d{2}\) \d{4,5}-\d{4}$/) == null) {
		errors.push({
			field: 'cell',
			message: 'Celular inválido',
		});
	}

	return errors.length > 0 ? errors : null;
};

module.exports = contactValidator;
