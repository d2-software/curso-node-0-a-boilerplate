const router = require('express').Router();

const { getTest, postTest } = require('./tests.controller');
const { consoleLog } = require('./tests.middleware');
const { testTokenValidator } = require('./tests.validator');

router.get('/', consoleLog, getTest);
router.post('/', consoleLog, testTokenValidator, postTest);

module.exports = router;
