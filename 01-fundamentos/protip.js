// function crearPersona(nombre, apellido) {
//   return { 
//     nombre, 
//     apellido };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido }); // Se puede hacer de esta forma si es una sola línea

const persona = crearPersona('Ulises', 'Desentis');
console.log(persona);


function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = ( edad, ...args) => { // las funciones flecha no tienen la propiedad arguments pero podemos usar el operador rest  que son los 3 puntos
  // console.log({edad});
  // console.log(args);
  return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Ulises', 'Hola');
console.log( { casado, vivo, nombre, saludo } );

const { apellido: lastName } = crearPersona ('Ulises', 'Desentis');
console.log(lastName);

const doom = {
  nombre: 'Victor Von Doom',
  codeName: 'Doom',
  vivo: true,
  //edad: 30,
  habilidades: [
    "Genius-level intellect",
    "Mastery of dark magic",
    "Technopathy",
    "Skilled hand-to-hand combatant",
    "Superhuman strength",
    "Superhuman durability",
    "Superhuman agility",
    "Superhuman reflexes",
    "Superhuman stamina",
    "Superhuman speed",
    "Teleportation",
    "Energy projection",
    "Force fields",
  ]
};

// const imprimePropiedades = ( personaje ) => {
//   console.log(personaje.nombre);
//   console.log(personaje.codeName);
//   console.log(personaje.vivo);
//   console.log(personaje.edad);
//   console.log(personaje.habilidades);

// }



//esto mismo se puedo realizar de la siguiente forma con desestructuracion de objetos

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 0, habilidades }) => { //se puede definir un valor por defecto para evitar undefined en este caso con la edad

  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ habilidades });
}

imprimePropiedades(doom)