let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
}
console.log(personaje);

console.log(personaje.nombre);

personaje.edad

console.log(personaje.coords.lat);

numeroDeTrajes = personaje.trajes.length;
console.log(numeroDeTrajes);

console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);


// Más detalles

delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;
console.log(personaje);

Object.freeze(personaje);
