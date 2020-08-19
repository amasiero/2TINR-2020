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

    findById(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT * 
                    FROM stocks
                    WHERE id = ?
                `,
                [id],
                (err, stock) => {
                    if(err) return reject('Não foi possível encontrar a ação.');
                    resolve(stock);
            });
        });
    }

    update(stock) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE stocks SET
                    code = ?,
                    name = ?,
                    amount = ?,
                    price = ?
                WHERE id = ?
            `,
            [
                stock.code,
                stock.name,
                stock.amount,
                stock.price,
                stock.id,
            ],
            (err) => {
                if (err) {
                    console.error(err);
                    return reject('Não foi possível atualizar sua carteira.');
                }
                resolve();
            })
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                DELETE 
                FROM stocks 
                WHERE id = ?
            `,
            [ id ],
            (err) => {
                if (err) {
                    console.error(err);
                    return reject('Não foi possível remover a ação da sua carteira.');
                }
                resolve();
            })
        });
    }
}

module.exports = StockDao;