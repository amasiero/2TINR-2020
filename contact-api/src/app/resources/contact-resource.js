const db = require('../../config/database');
const ContactRepository = require('../repositories/contact-repository');
const contactValidator = require('../validation/contact-validation');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.json({ message: 'ok' });
	});

	app.get('/api/contacts', async (req, res) => {
		const repository = new ContactRepository(db);
		try {
			const contacts = await repository.findAll();
			res.json({
				message: 'success',
				data: contacts,
			});
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	});

	app.get('/api/contacts/:id', async (req, res) => {
		const repository = new ContactRepository(db);
		try {
			const contact = await repository.findById(req.params.id);
			res.json({ message: 'success', data: contact });
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	});

	app.post('/api/contacts', async (req, res) => {
		const contact = {
			name: req.body.name,
			avatar: req.body.avatar || '',
			phone: req.body.phone || '',
			cell: req.body.cell || '',
			email: req.body.email || '',
			favorite: Math.random() >= 0.5,
		};

		const errors = contactValidator(contact);
		if (errors) {
			res.status(400).json({ errors: errors });
			return;
		}

		const repository = new ContactRepository(db);

		try {
			const result = await repository.save(contact);
			res.json({
				message: 'success',
				data: contact,
				id: result.id,
			});
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	});

	app.put('/api/contacts/:id', async (req, res) => {
		const contact = {
			id: req.params.id,
			name: req.body.name,
			avatar: req.body.avatar,
			phone: req.body.phone,
			cell: req.body.cell,
			email: req.body.email,
			favorite: req.body.favorite,
		};

		const errors = contactValidator(contact);
		if (errors) {
			res.status(400).json(errors);
			return;
		}

		const repository = new ContactRepository(db);

		try {
			const result = await repository.update(contact);
			res.json({
				message: 'success',
				data: contact,
				changes: result.changes,
			});
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	});

	app.delete('/api/contacts/:id', async (req, res) => {
		const repository = new ContactRepository(db);

		try {
			const result = await repository.delete(req.params.id);
			res.json({
				message: 'deleted',
				changes: result.changes,
			});
		} catch (error) {
			res.status(400).json({ errors: [error] });
		}
	});
};
