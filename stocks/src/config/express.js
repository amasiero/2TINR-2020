require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use('/resource', express.static('src/app/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride((req, resp) => {
    if(req.body &&
        typeof req.body === 'object' &&
        '_method' in req.body) {
            const method = req.body._method;
            delete req.body._method;
            return method;
    }
}));

const routes = require('../app/routes/routes');
const { a } = require('marko/src/runtime/html/helpers');
routes(app);

module.exports = app;