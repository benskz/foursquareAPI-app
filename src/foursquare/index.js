const request = require('request')

class Foursquare {
  constructor () {
    this.clientId = 'BGQ1EX1WJXJK1EDLFTL2TEBZEJSGWR1DJ43KKE1ZBEGC4IDD'
    this.clientSecret = 'X3P5TJWTRUPRN1YYCSRA0QNACEOOOMV5UJ4EC55MZV143C3T'
    this.url = 'https://api.foursquare.com/v2/'
    this.v = '20170901'
  }

  api (endpoint, parameters) {
    let path = `${this.url + endpoint}?`

    Object.keys(parameters).forEach((key) => {
      path += `${key}=${parameters[key]}&`
    })

    return `${path}client_id=${this.clientId}&client_secret=${this.clientSecret}&v=${this.v}`
  }

  search (location, callback) {
    request(this.api('venues/explore', { near: location }), (error, response, body) => {
      if (!error && response && response.statusCode === 200) callback(JSON.parse(body).response)
    })
  }
}

export default new Foursquare()
