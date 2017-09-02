const request = require('request')

class Foursquare {
  constructor () {
    this.clientId = 'BGQ1EX1WJXJK1EDLFTL2TEBZEJSGWR1DJ43KKE1ZBEGC4IDD'
    this.clientSecret = 'X3P5TJWTRUPRN1YYCSRA0QNACEOOOMV5UJ4EC55MZV143C3T'
  }

  search (location, callback) {
    console.log(location)
    request(`https://api.foursquare.com/v2/venues/explore?near=${location}&client_id=${this.clientId}&client_secret=${this.clientSecret}&v=20170901`, (error, response, body) => {
      if (!error && response && response.statusCode === 200) callback(JSON.parse(body).response)
    })
  }
}

export default new Foursquare()
