const router = require('express').Router();
const passport = require("../../../config/passport");

const { getTest, postTest } = require('./tests.controller');
const { consoleLog } = require('./tests.middleware');
const { testTokenValidator } = require('./tests.validator');

router.get('/', consoleLog, getTest);
router.post('/', passport.authenticate('local', { session: false }), consoleLog, testTokenValidator, postTest);

module.exports = router;
