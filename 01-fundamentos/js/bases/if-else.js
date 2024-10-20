let a = 5;

if ( a >= 10) {
  console.log("a es mayor o igual a 10");
} else {
  console.log("a es menor a 10 ")
}

console.log("fin de programa");

const hoy = new Date();
let dia = hoy.getDay();


const diaActual= (dia) => {
  if (dia === 0) {
    return "Domingo";
  } else if (dia === 1) {
    return "Lunes";
  } else if (dia === 2) {
    return "Martes"
  } else if (dia === 3) {
    return "Miercoles"
  } else if (dia === 4) {
    return "Jueves"
  } else if (dia === 5) {
    return "Viernes"
  } else if (dia === 6) {
    return "Sabado"
  } 
  
}

console.log(diaActual(dia));

// realizar la misma tarea sin usar if, o switch

const diasDeLasemana = [
  "Domingo", 
  "Lunes", 
  "Martes", 
  "Miércoles", 
  "jueves", 
  "Viernes", 
  "Sábado"
];

console.log("resultado con un array")
console.log(diasDeLasemana[dia]);

const diasLetras = {
  0: "Domingo", 
  1: "Lunes", 
  2: "Martes", 
  3: "Miércoles", 
  4: "jueves", 
  5: "Viernes", 
  6: "Sábado"
}

console.log("resultado con objeto");
console.log(diasLetras[dia]);