const request = require('request');

const geocode = (address, callback) => {
    const url = `http://api.geonames.org/searchJSON?q=${encodeURI(address)}&maxRows=10&username=thanhtien1123`;
    request({url, json: true}, (error, {body}) => {
        if(error) { //if there is no internet
            callback(`Unable to connect to internet`, undefined)        
        } else if (body.geonames.length === 0) { //if the location is invalid
            callback(`Unable to find location, try another search`, undefined)
        } else { //if everything goes well
            const data = {
                latitude: body.geonames[0].lat,
                longtitude: body.geonames[0].lng,
                location: body.geonames[0].toponymName
            }
            callback(undefined, data)
        }
    })
    
} 

module.exports = geocode;