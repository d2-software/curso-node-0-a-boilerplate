class BaseError extends Error {
    constructor(message, status) {
        super(message);

        this.name = this.constructor.name;
        this.status = status;
        
        Error.captureStackTrace(this, this.constructor);
    }

    toJSON() {
        return {
            status: this.status,
            error: this.name,
            message: this.message,
        };
    }
}

module.exports = BaseError;
