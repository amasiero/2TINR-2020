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
}

module.exports = StockDao;