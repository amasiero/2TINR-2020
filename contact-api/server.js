const app = require('./src/config/express');

const hostname = 'localhost';
const port = '8000';

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
