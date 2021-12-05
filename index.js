const express = require('express');
const app = express();
const port = 3000;

const apiRouter = require('./features/v1/api.router');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! Hola2.');
});

app.use(apiRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
