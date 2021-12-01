const express = require('express');
const app = express();
const port = 3000;

const { getTest, postTest } = require('./controlador_test');
const { postPrueba } = require('./controlador_prueba');
const { funcionMiddleware } = require('./middlewares');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World! Hola2.');
});

app.get('/test', getTest);
app.post('/test', funcionMiddleware, postTest);

app.post('/prueba', funcionMiddleware, postPrueba);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
