const rewire = require('rewire')
const {getCityByZipCode} = rewire('./cities.service');
const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");

chai.use(chaiAsPromise);
chai.should();

const city = getCityByZipCode.__set__(zipCode,94122)



