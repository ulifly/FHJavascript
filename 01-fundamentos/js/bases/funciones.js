function saludar(nombre) {
    console.log(`Hola ${nombre}`);
    console.log(arguments);
    return 10;
}

saludar('Ulises', 41, true, 'México');


const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const retornoDeSaludar = saludar('Ulises', 41, true, 'México');
console.log(retornoDeSaludar); // 10

const sumar2Numeros = (a, b) => {
   return a + b;
}

console.log(sumar2Numeros(1, 2)); // 3

const numRandom = () => Math.random();


console.log(numRandom()); // 0.123456789