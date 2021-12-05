const router = require('express').Router();

const { getTest, postTest } = require('./tests.controller');
const { consoleLog } = require('./tests.middleware');
const { funcionMiddleware } = require('../../../middlewares');

router.get('/', consoleLog, getTest);
router.post('/', consoleLog, funcionMiddleware, postTest);

module.exports = router;
