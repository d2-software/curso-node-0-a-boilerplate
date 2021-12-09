class BaseError extends Error {
    constructor(message, status) {
        super(message);

        this.name = this.constructor.name;
        this.status = status;
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
