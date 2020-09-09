const db = require('../../config/database');

class ContactRepository {
	constructor(db) {
		this._db = db;
	}

	findAll() {
		return new Promise((resolve, reject) => {
			this._db.all('SELECT * FROM contacts', (err, results) => {
				if (err) return reject('Não foi possível buscar seus contatos.');
				return resolve(results);
			});
		});
	}

	findById(id) {
		return new Promise((resolve, reject) => {
			this._db.get(`SELECT * FROM contacts WHERE id = ?`, id, (err, result) => {
				if (err) return reject('Contato não encontrado.');
				return resolve(result);
			});
		});
	}

	save(contact) {
		return new Promise((resolve, reject) => {
			const params = [
				contact.name,
				contact.avatar,
				contact.phone,
				contact.cell,
				contact.email,
				contact.favorite,
			];

			this._db.run(
				`INSERT INTO contacts (
					name,
					avatar,
					phone,
					cell,
					email,
					favorite
				) VALUES (?, ?, ?, ?, ?, ?)`,
				params,
				function (err, result) {
					if (err) return reject('Ocorreu um erro ao tentar salvar o contato.');
					resolve({
						id: this.lastID,
					});
				}
			);
		});
	}

	update(contact) {
		return new Promise((resolve, reject) => {
			this._db.run(
				`
				UPDATE contacts SET 
					name = COALESCE(?, name),
					avatar = COALESCE(?, avatar),
					phone = COALESCE(?, phone),
					cell = COALESCE(?, cell),
					email = COALESCE(?, email),
					favorite = COALESCE(?, favorite)
				WHERE id = ?
			`,
				[
					contact.name,
					contact.avatar,
					contact.phone,
					contact.cell,
					contact.email,
					contact.favorite,
					contact.id,
				],
				function (err) {
					if (err) return reject('Ocorreu um erro na atualização do contato.');
					return resolve({ changes: this.changes });
				}
			);
		});
	}

	delete(id) {
		return new Promise((resolve, reject) => {
			db.run(`DELETE FROM contacts WHERE id = ?`, id, function (err) {
				if (err) return reject('Não foi possível excluir o contato.');
				return resolve({ changes: this.changes });
			});
		});
	}
}

module.exports = ContactRepository;
