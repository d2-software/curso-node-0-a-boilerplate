const { CREATED } = require('http-status');
const logger = require('../../../config/winston');
const ValidationError = require('../../../errors/validation');

const asyncFunctionTest = async () => {
    throw new Error('la promesa no está resuelta');
    return Promise.resolve('a');
};

const getTest = (req, res) => {
    res.json({ msg: 'Hello World! TEST.' });
};

const postTest = async (req, res, next) => {
    const { body } = req;
    logger.debug('%o', body);

    try {
        const a = await asyncFunctionTest();
        console.log(a);
    } catch (e) {
        console.log('Ha ocurrido un error asíncrono');
        next(new ValidationError(['test', 'hola']));
        return;
    }

    res.status(CREATED).json(req.body);
};

module.exports = {
    getTest,
    postTest,
}
