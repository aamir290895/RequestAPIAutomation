const request = require('request')
const assert = require('assert-plus')


const BASE_URL = 'https://gorest.co.in/public/v2'
const TOKEN = '299320ac7a244d4406b2f73d57b8317e6ede756d87b92f0355a0ff00e603145c'
describe('API Test Automation Using Request', () => {
  it('Test DELETE Request', () => {
    request
      .delete(BASE_URL + '/users/100',{
        'auth': {
          'bearer': TOKEN,
        }
      }).on('response', function (response) {

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        assert.equal(response.statusCode,204);
      

      })
  })
})
