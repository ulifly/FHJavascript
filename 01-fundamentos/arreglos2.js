let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger', 'Zelda'];
console.log('Largo:', videoJuegos.length);

let primero = videoJuegos[0];
let ultimo = videoJuegos[videoJuegos.length - 1];

console.log({primero, ultimo});

videoJuegos.forEach((juego, indice) => { 
    console.log({ indice, juego});
 } 
);

let nuevaLongitud =  videoJuegos.push('F-Zero');//metodo push agrega un elemento al final del arreglo
console.log(nuevaLongitud);
console.log({videoJuegos});

videoJuegos.unshift('Fire Emblem');//metodo unshift agrega un elemento al inicio del arreglo
console.log({videoJuegos});


juegoEliminado = videoJuegos.pop();//metodo pop elimina el ultimo elemento del arreglo
console.log({juegoEliminado});
console.log(videoJuegos);

let juegosEliminados = videoJuegos.splice(1, 2);//metodo splice elimina elementos del arreglo
console.log(juegosEliminados);
console.log(videoJuegos);

let buscarJuego = videoJuegos.indexOf('Zelda');//metodo indexOf busca un elemento en el arreglo
console.log({buscarJuego});

