const db = require('../../config/database');
const ContactRepository = require('../repositories/contact-repository');

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
			res.status(400).json({ error: error.message });
		}
	});
};
