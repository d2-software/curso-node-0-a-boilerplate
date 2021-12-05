const joi = require('joi');
const { validate } = require('express-validation');

const testTokenValidator =
    validate({
        body: joi.object({
            token: joi.string().min(0),
            hola: joi.string(),
            test: joi.string(),
        })
    },
    {
        statusCode: 422
    });

module.exports = {
    testTokenValidator,
}
