const express = require('express');
const app = express();
const port = 3000;

const apiRouter = require('./features/v1/api.router');

app.use(express.json());

app.get('/status', (req, res) => {
    res.status(200).send();
});

app.use(apiRouter);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
