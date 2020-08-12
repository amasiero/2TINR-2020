class StockDao {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM stocks',
                (err, result) => {
                    if (err) return reject('Não foi possível listar suas ações.');
                    return resolve(result);
                }
            );
        });
    }

    save(stock) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO stocks (
                    code,
                    name,
                    amount,
                    price
                ) VALUES (?, ?, ?, ?)
            `,
            [
                stock.code,
                stock.name,
                stock.amount,
                stock.price
            ],
            (err) => {
                if (err) {
                    console.error(err);
                    return reject('Não foi possível efetuar a compra das ações.');
                }
                resolve();
            })
        });
    }
}

module.exports = StockDao;