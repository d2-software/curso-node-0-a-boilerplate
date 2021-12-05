const router = require('express').Router();

const pruebaRouter = require('./pruebas/pruebas.router');
const testRouter = require('./tests/tests.router');

const baseRoute = '/';

router.use(`${baseRoute}pruebas`, pruebaRouter);
router.use(`${baseRoute}tests`, testRouter);

module.exports = router;
