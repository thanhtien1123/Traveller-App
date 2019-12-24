const request = require('request');

const forecast = (latitude, longitude, date, callback) => {
    const url = `https://api.darksky.net/forecast/9f26f96a547de7e8bdcada87f84ad93b/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)},${encodeURIComponent(date)}`
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback(`No internet connection`, undefined) 
        } else if(body.error) {
            callback("Date is needed", undefined)
        } else {
            callback(error, `${body.daily.data[0].summary} It will be ${body.currently.apparentTemperature} degrees out. There is ${body.currently.precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast;
