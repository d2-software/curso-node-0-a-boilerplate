const { UNPROCESSABLE_ENTITY } = require('http-status');
const BaseError = require('./base');

class ValidationError extends BaseError {
    constructor(fields) {
        const internalMessage = 'Error de validación en los atributos: ' + JSON.stringify(fields);
        super(internalMessage, UNPROCESSABLE_ENTITY);

        this.name = this.constructor.name;
    }
}

module.exports = ValidationError;
