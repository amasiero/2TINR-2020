const contactValidator = (contact) => {
	let fields = [];
	let errors = [];
	if (!contact.name) {
		fields.push('name');
		errors.push('O nome é obrigatório.');
	}

	if (
		contact.email &&
		contact.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]*/) == null
	) {
		fields.push('email');
		errors.push('Email inválido');
	}

	if (
		contact.phone &&
		contact.phone.match(/^\(\d{2}\) \d{4,5}-\d{4}$/) == null
	) {
		fields.push('phone');
		errors.push('Telefone inválido');
	}

	if (contact.cell && contact.cell.match(/^\(\d{2}\) \d{4,5}-\d{4}$/) == null) {
		fields.push('cell');
		errors.push('Telefone inválido');
	}

	let msg = null;
	if (fields.length > 0) {
		msg = {
			fields,
			errors,
		};
	}

	return msg;
};

module.exports = contactValidator;
