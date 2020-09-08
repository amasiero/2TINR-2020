const md5 = require('md5');
const fetch = require('node-fetch');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

const USERS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
`;

const CONTACTS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        avatar TEXT,
        phone TEXT UNIQUE,
        cell TEXT UNIQUE,
        email TEXT UNIQUE,
        favorite NUMERIC
    )
`;

const DROP_CONTACTS_SCHEMA = `
    DROP TABLE IF EXISTS contacts
`;

const USER_INSERT = `
    INSERT OR IGNORE INTO users (
        name,
        email,
        password
    ) VALUES (?, ?, ?)
`;

const CONTACT_INSERT = `
    INSERT OR IGNORE INTO contacts (
        name,
        avatar,
        phone,
        cell,
        email,
        favorite
    ) VALUES (?, ?, ?, ?, ?, ?)
`;

const capitalize = (text) =>
	text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

const mapContact = (contact) => {
	const { name, picture, phone, cell, email } = contact;
	return {
		name: `${capitalize(name.first)} ${capitalize(name.last)}`,
		avatar: picture.large,
		phone,
		cell,
		email,
		favorite: Math.random() >= 0.5, // gera um número aleatório entre 0 e 1
	};
};

const fetchContacts = async () => {
	const size = 10;
	const response = await fetch(
		`https://randomuser.me/api/?results=${size}&seed=fullstackio`
	);
	const contactData = await response.json();

	return contactData.results.map(mapContact);
};

db.serialize(async () => {
	db.run('PRAGMA foreign_keys=ON');
	db.run(USERS_SCHEMA);
	db.run(USER_INSERT, ['Andrey Masiero', 'me@andreymasiero.com', md5('1234')]);
	db.run(DROP_CONTACTS_SCHEMA);
	db.run(CONTACTS_SCHEMA);

	try {
		const contacts = await fetchContacts();
		contacts.forEach((contact) => {
			db.run(CONTACT_INSERT, [
				contact.name,
				contact.avatar,
				contact.phone,
				contact.cell,
				contact.email,
				contact.favorite,
			]);
		});
	} catch (e) {
		console.log(`Ocorreu um erro na operação: ${e.message}`);
	}

	db.each('SELECT * FROM contacts', (err, contact) => {
		console.log(`Contact: ${JSON.stringify(contact)}`);
	});
});

process.on('SIGINT', () => {
	db.close(() => {
		console.log('DB closed');
		process.exit(0);
	});
});

module.exports = db;
