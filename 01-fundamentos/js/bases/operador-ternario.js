/** 
 * de lunes a viernes e abre a las 11
 * fines de semana se abre a las 9
 * validar si el sitio esta abierto
 * */

const dia = 1;
const horaActual = 10;

let horaApertura, mensaje;

// if (dia == 0 || dia == 6 ){
//   console.log('fin de semana');
//   horaApertura = 9
// } else {
//   console.log("entre semana");
//   horaApertura = 11
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11

// if (horaActual >= horaApertura){
//   mensaje = "esta abierto"
// } else {
//   mensaje = `esta cerrado, abrimos a las ${horaApertura}`
// }

mensaje = (horaActual >= horaApertura) ? "esta abierto" : `esta cerrado abrimos a las ${horaApertura}`

console.log( {horaApertura}, mensaje);