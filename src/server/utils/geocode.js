const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGhhbmh0aWVuMTEyMyIsImEiOiJjazJ0YXZkODAxOWM5M2RxdjJ2cWM2dWZkIn0.rMQgKnyLxSKTxMM62YaecQ`;
    request({url, json: true}, (error, {body}) => {
        if(error) { //if there is no internet
            callback(`Unable to connect to internet`, undefined)        
        } else if (body.features.length === 0) { //if the location is invalid
            callback(`Unable to find location, try another search`, undefined)
        } else { //if everything goes well
            const data = {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
    
} 

module.exports = geocode;