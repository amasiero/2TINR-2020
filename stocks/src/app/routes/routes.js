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
        resp.marko(
            require('../views/portifolio/portifolio.marko'),
            {
                stocks: [
                    {
                        code: 'VVAR3',
                        name: 'Via Varejo',
                        amount: 1000,
                        price: 19.52,
                    },
                    {
                        code: 'BIDI4',
                        name: 'Banco Inter',
                        amount: 1000,
                        price: 20.58,
                    },
                ]
            }
        );
    });
}