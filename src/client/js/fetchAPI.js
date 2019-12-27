const messageOne = document.querySelector('.message1-location');
const messageTwo = document.querySelector('.message2-forecast-data');
const image = document.querySelector('.message3-image');
const location = document.querySelector('.city-text');
const date = document.querySelector('.date');

const fetchAPI = () => {
    const unixDate = new Date(date.value).getTime() / 1000;  
    const address = location.value;
    fetch(`http://localhost:3000/forecast?address=${address}&date=${unixDate}`)
    .then((res) => res.json())
    .then((res) => {
        if(res.error) {
            messageOne.textContent = res.error;
        } else {
            const date = new Date(res.date*1000);
            const month = date.getMonth() + 1;
            const day = date.getDate() + 1;
            const year = date.getFullYear();
            
            messageOne.textContent = `Awesome, you are travelling to ${res.location} on ${month}/${day}/${year}.`;
            messageTwo.textContent = `The weather is: ${res.forecastData}`;
            image.src = res.image;
        }
    })
}

export {fetchAPI};
