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
        resp.send(`
            <html>
                <head>
                    <title>Stocks Motion</title>
                </head>
                <body>
                    <h1>Stocks Portifolio</h1>
                </body>
            </html>
        `);
    });
}