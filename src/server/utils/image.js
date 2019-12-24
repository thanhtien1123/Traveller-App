const request = require('request');

const image = (location, callback) => {
    const url = `https://pixabay.com/api/?key=13882714-44968fbaae3e13fed93603545&q=${encodeURIComponent(location)}&image_type=photo`
    request({url, json: true}, (error, {body}) => {
        if(error) { 
            callback(`No internet connection`, undefined) 
        } else if(body.error) {
            callback("Location unknown", undefined)
        } else {
            callback(error, body.hits[0].previewURL)    
        }
    })
}

module.exports = image;