const axios = require('axios');
const {NotFoundError} = require('../middleware/httpError')

async function getCityDataByZipCode(zipCode){
    
    try{
        const result = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
        const country = result.data.country;

        const place = result.data.places[0];
        const placeName = place['place name'];
        const stateAbr = place['state abbreviation'];
    
        const formattedData = `${placeName}, ${stateAbr}, ${country}`
        return formattedData;
    }
    catch(err) {
        
        throw new NotFoundError('No cities found!');
    }
}

module.exports = {
    getCityDataByZipCode
}