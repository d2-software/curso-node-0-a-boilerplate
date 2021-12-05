const router = require('express').Router();

const { postPrueba } = require('./pruebas.controller');
const { funcionMiddleware } = require('../../../middlewares');

router.post('/', funcionMiddleware, postPrueba);

module.exports = router;
