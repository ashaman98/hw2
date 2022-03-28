const {getCityDataByZipCode} = require('./cities.repository');
const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");

chai.use(chaiAsPromise);
chai.should();

describe('Testing getCityDataByZipCode', function(){
    it('Returns correct data',function(){
        return chai.expect(
            getCityDataByZipCode(94122)
            ).to.eventually.equal("San Francisco, CA, United States")
    })
})