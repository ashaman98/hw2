const { httpError } = require('./httpError');

module.exports = (err, req, res, next) => {
    console.log('Catching error in the global catcher.');
    if (err instanceof httpError) {
        console.log(err.message);
        res.status(err.status).send(err.message);
    }
    else {
        res.status(500).send('internal error');
    }

}