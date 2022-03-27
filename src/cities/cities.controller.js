const express = require('express')
const router = express.Router()
const {getCityByZipCode} = require('./cities.service');

router.get('/cities/:zipCode',  getZipCode)


async function getZipCode(req, res, next){
    try{
        const zipCode = req.params.zipCode;
        const country = await getCityByZipCode(zipCode);
        return res.status(200).send(country);
    }
    catch(err){
        next(err, req, res, next);
    }
}

module.exports = {router};