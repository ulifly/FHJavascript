const elMayor = (a, b) => numMayor = (a > b) ? a : b;

const tieneMembresia = ( membresia ) => membresia ? "20 pesos" : "50 pesos"


console.log(elMayor(19, 28));

console.log(tieneMembresia(undefined));

const amigo = true;

const amigosArr = [
  "peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Thor" : "Loki",
  (()=>"Nick Fury")(),
  elMayor(10, 15)
]

console.log(amigosArr);

//ternario con multiples opciones

const nota = 85;
const grado = nota >= 95 ? "A+" :
              nota >= 90 ? "A" :
              nota >= 85 ? "B+" :
              nota >= 80 ? "B" :
              nota >= 75 ? "C+" :
              nota >= 70 ? "C" : "F";
console.log({ nota, grado});