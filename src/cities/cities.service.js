const {getCityDataByZipCode} = require('./cities.repository');

async function getCityByZipCode(zipCode) {
    const result = await getCityDataByZipCode(zipCode);
    return result;
}

module.exports = {getCityByZipCode};