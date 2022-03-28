const express = require('express');
const app = express();

const {router} = require('./src/cities/cities.controller');
const errorHandler = require('./src/middleware/error-handler');

app.use(router);
app.use(errorHandler);

app.listen(4000, () => {
    console.log(`Example app listening on port`)
})