const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-type', 'text/html');
    let html = '';
    if (req.url === '/') {
        html = `
            <html>
                <head>
                    <title>Stocks Motion</title>
                </head>
                <body>
                    <h1>Stocks Rocks!</h1>
                </body>
            </html>
        `;
    } else if (req.url === '/stocks') {
        html = `
            <html>
                <head>
                    <title>Stocks Motion</title>
                </head>
                <body>
                    <h1>Stocks Portifolio</h1>
                </body>
            </html>
        `;
    }
    resp.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}.`);
});