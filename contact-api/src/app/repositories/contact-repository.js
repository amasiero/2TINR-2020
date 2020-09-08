class ContactRepository {
	constructor(db) {
		this._db = db;
	}

	findAll() {
		return new Promise((resolve, reject) => {
			this._db.all('SELECT * FROM contacts', (err, results) => {
				if (err) return reject('Não foi possível buscar seus contatos');
				return resolve(results);
			});
		});
	}
}

module.exports = ContactRepository;
