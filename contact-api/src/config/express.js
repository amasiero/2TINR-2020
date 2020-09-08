const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contactResource = require('../app/resources/contact-resource'); // Rotas referente a lista de contatos

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
contactResource(app);

module.exports = app;
