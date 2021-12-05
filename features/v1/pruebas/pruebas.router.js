const router = require('express').Router();

const { postPrueba } = require('./pruebas.controller');

router.post('/', postPrueba);

module.exports = router;
