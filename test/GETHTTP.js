const assert = require('assert-plus')
const request = require('request')

const BASE_URL = 'https://gorest.co.in/public/v2/users'
const TOKEN = '299320ac7a244d4406b2f73d57b8317e6ede756d87b92f0355a0ff00e603145c'
describe('API Test Automation Using Request', () => {
  it('Test GET Request', () => {
    request.get(BASE_URL).on('response', function (response) {
     
      console.log('statusCode:', response && response.statusCode); 
      assert.equal(response.statusCode,200);

    })
  })
})
