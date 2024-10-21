const carros = ["ferrari", "lamborghini", "porsche", "bugatti", "koenigsegg"];

console.warn("While");
 let i = 0;

// while (i < carros.length) {
//   console.log(carros[i]);
//   i++;
// }


// while (carros.length > 0) {
//   console.log(carros.pop());
// }

//se puede hacer de la siguente forma

while (carros[i] ) { //mientras exista un elemento en la posición i, es decir si es undefined se detiene
  console.log(carros[i]);
  i++;
}


console.warn("Do While");

let j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);