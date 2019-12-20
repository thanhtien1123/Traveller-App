import './styles/main.scss';

// import {handleEvent} from './js/formHandler'
const form = document.querySelector('.form');
const location = document.querySelector('.city-text');
const messageOne = document.querySelector('.message1-location');
const messageTwo = document.querySelector('.message2-forecast-data');
const image = document.querySelector('.image');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = location.value;
    fetch(`http://localhost:8081/forecast?address=${address}`)
        .then((res) => res.json())
        .then((res) => {
            if(res.error) {
                messageOne.textContent = res.error;
            } else {
                messageOne.textContent = res.location;
                messageTwo.textContent = res.forecastData;
                image.src = res.image;
            }
        })
})