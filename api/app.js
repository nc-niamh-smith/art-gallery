const express = require('express');
const { getGenres } = require('./controllers/genres.controller');
const { serverError } = require('./errors/errors');

const app = express();

app.get('/api/genres',getGenres)

app.use(serverError)

module.exports = app;