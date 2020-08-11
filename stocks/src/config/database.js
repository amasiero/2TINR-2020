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

const STOCKS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS stocks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        amount INTEGER NOT NULL,
        price REAL NOT NULL
    )
`;

const INSERT_USERS = `
    INSERT OR IGNORE INTO users (
        name,
        email,
        password
    ) VALUES (?, ?, ?)
`;

const INSERT_STOCKS = `
    INSERT OR IGNORE INTO stocks (
        code,
        name,
        amount,
        price
    ) VALUES (?, ?, ?, ?)
`;

db.serialize(() => {
    db.run('PRAGMA foreign_key=ON');
    
    db.run(USERS_SCHEMA);
    db.run(INSERT_USERS,[
        'Andrey Masiero',
        'profandrey.masiero@fiap.com.br',
        '123456'
    ]);

    db.run(STOCKS_SCHEMA);
    db.run(INSERT_STOCKS, [
        'VVAR3',
        'Via Varejo',
        1000,
        19.52,
    ]);
    db.run(INSERT_STOCKS, [
        'BIDI4',
        'Banco Inter',
        1000,
        20.58,
    ]);

    db.each('SELECT * FROM stocks', (err, stock) => {
        console.log(`Stock: ${JSON.stringify(stock)}`);
    });
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('DB closed.');
        process.exit(0);
    });
});

module.exports = db;