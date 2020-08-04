const app = require('./src/config/express');

const hostname = 'localhost';
const port = 3000;


app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}.`);
});