const express = require('express');
const app = express();
const boom = require('@hapi/boom');
const ValidationError = require('./errors/validation');

require('dotenv').config();
const port = process.env.NODE_PORT || 3000;

const apiRouter = require('./features/v1/api.router');

app.use(express.json());

app.get('/status', (req, res) => {
    res.status(200).send();
});

app.use(apiRouter);

app.use((err, req, res, next) => {
    let errorToShow = err;

    if (!(err instanceof ValidationError) && !err.isBoom) {
        errorToShow = boom.internal(err.message);
    }

    let statusCode, payload;

    if (err.isBoom) {
        statusCode = errorToShow.output.statusCode;
        payload = errorToShow.output.payload;
    } else {
        statusCode = errorToShow.status;
        payload = errorToShow.toJSON();
    }

    res.status(statusCode).json(payload);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
