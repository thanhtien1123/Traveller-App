const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9f26f96a547de7e8bdcada87f84ad93b/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback(`No internet connection`, undefined) 
        } else if(body.error) {
            callback("Latitude or longitude required", undefined)
        } else {
            callback(error, `${body.daily.data[0].summary} It is currently ${body.currently.apparentTemperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast;
