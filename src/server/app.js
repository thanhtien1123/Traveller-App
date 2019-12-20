const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const image = require('./utils/image')
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

//setup static directory to serve
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

//app.com
app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

//app.com/forecast
app.get('/forecast', (req, res) => {
    //If user did not enter address. It will send an error that requires adress
    if(!req.query.address) {
        return res.send({
            error: 'Address must be provided'
        })
    } else {
        geocode(req.query.address, (error, {latitude, longtitude, location}) => {
            if(error) {
                return res.send({
                    error: error
                })
            } else {
                console.log(longtitude, latitude);
                
                forecast(latitude, longtitude, (error, forecastData) => {
                    if(error) {
                        return res.send({
                            error: error
                        })
                    } else {
                        image(req.query.address, (error, image) => {
                            if(error) {
                                return res.send({
                                    error
                                })
                            } else {
                                console.log(image, forecastData, location);
                                res.send({
                                    image,
                                    location,        
                                    forecastData,  
                                })
                            }
                        })
                    }
                })
            }
        }) 
    }
})


app.get('*', (req, res) => {
    res.send('Error')
})

app.listen(8081, () => {
    console.log('Server is up on port 8081')
})