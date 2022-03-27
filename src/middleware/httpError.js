class httpError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class NotFoundError extends httpError {
    constructor(message){
        super(message, 404);
    }
}

module.exports={httpError, NotFoundError};