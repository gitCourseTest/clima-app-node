const axios = require('axios');


let getLugarLatLng = async(direccion) => { //esta funcion que creamos regresa una promesa(por anteponerle async)
    let encodedUrl = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`); //Devuelve una promesa
    if (respuesta.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontró informacion para la dirección ${direccion}`);
    } else {
        let location = respuesta.data.results[0];
        return {
            direccion: location.formatted_address,
            lat: location.geometry.location.lat,
            lng: location.geometry.location.lng
        }
    }
}

module.exports = {
    getLugarLatLng
}