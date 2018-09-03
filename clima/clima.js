const axios = require('axios');

const getClima = async(lat, lng) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0bac0bcb124da0b44b4d0baab9d082b0`);
    /* console.log(clima.data); */
    return clima.data.main.temp;
}


module.exports = {
    getClima
}