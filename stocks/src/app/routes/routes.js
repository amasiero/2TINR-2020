const db = require('../../config/database');
const StockDao = require('../infra/stock-dao');

module.exports = (app) => {
    

    app.get('/', (req, resp) => {
        resp.send(`
            <html>
                <head>
                    <title>Stocks Motion</title>
                </head>
                <body>
                    <h1>Stocks Rocks!</h1>
                </body>
            </html>
        `);
    });

    app.get('/stocks', (req, resp) => {
        const dao = new StockDao(db);
        dao.list()
            .then(stocks => resp.marko(
                    require('../views/portifolio/portifolio.marko'),
                    { stocks }
            ))            
            .catch(err => console.error(err));
        
    });

    app.get('/stocks/buy', (req, resp) => 
        resp.marko(require('../views/portifolio/new.marko'), { stock: {} })
    );

    app.get('/stocks/buy/:id', (req, resp) => {
        const id = req.params.id;
        const stockDao = new StockDao(db);
        
        stockDao.findById(id)
            .then(stock => resp.marko(
                require('../views/portifolio/new.marko'),
                { stock }
            ))
            .catch(err => console.error(err));
    });

    app.post('/stocks', (req, resp) => {
        console.log(req.body);
        const dao = new StockDao(db);
        dao.save(req.body)
            .then(resp.redirect('/stocks'))
            .catch(err => console.error(err));

    });

    app.put('/stocks', (req, resp) => {
        console.log(req.body);
        const dao = new StockDao(db);
        dao.update(req.body)
            .then(resp.redirect('/stocks'))
            .catch(err => console.error(err));
    });

    app.delete('/stocks/:id', (req, resp) => {
        const id = req.params.id;
        
        const stockDao = new StockDao(db);
        stockDao.delete(id)
            .then(resp.status(200).end())
            .catch(err => console.error(err));
    });
}