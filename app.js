const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
    /*,
        latitud: {
            alias: 'lat',
            desc: 'Latitud de la direccion a obtener',
            demand: true
        },
        longitud: {
            alias: 'lng',
            desc: 'Longitud de la direccion a obtener',
            demand: true
        }*/
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${coords.direccion} es de ${temp} grados centigrados.`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}.`;
    }

}


getInfo(argv.direccion)
    .then((mensaje) => {
        console.log(mensaje);
    }).catch((err) => {
        console.log(err);
    });


/*
lugar.getLugarLatLng(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log('Error !! ', err);
});

clima.getClima(15.7489259, -96.4672856).then((temp) => {
    console.log(temp);
}).catch((err) => {
    console.log('Error!! ', err);
});
*/



/*
const axios = require('axios');

let encodedUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    .then((result) => {

        let location = result.data.results[0];

        // console.log(JSON.stringify(result.data, undefined, 2));
        console.log('Direccion: ', location.formatted_address);
        console.log('Latitud: ', location.geometry.location.lat);
        console.log('Longitud: ', location.geometry.location.lng);
        console.log(result.status);
    }).catch((err) => {
        console.log("Error ", err);
    });

*/