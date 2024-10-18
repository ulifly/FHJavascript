// function crearPersona(nombre, apellido) {
//   return { 
//     nombre, 
//     apellido };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Ulises', 'Desentis');
console.log(persona);


function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  console.log(args);
}

imprimeArgumentos(10, true, false, 'Ulises', 'Desentis');