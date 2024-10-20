const regresaTrue = () =>{
  console.log("regresa True");
  return true
}

const regresaFalse = () => {
  console.log("regresa Flase");
  return false
}

console.warn('Probando la negacion' );
console.log(true);
console.log(!true);

console.log("probando las funciones y negandolas");

console.log(regresaTrue());
console.log("negada");
console.log(!regresaTrue());

console.log(regresaFalse());
console.log("negada");
console.log(!regresaFalse());

console.log('======&&======');

regresaFalse() && regresaTrue()

regresaTrue() && regresaFalse()

console.warn("or");
console.log(true || false);


console.warn('asiganciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;


const a1 = true && "Hola mundo" && 150; //se asigna la ultima variable si es true en el and
const a2 = "Hola" && "mundo" && soyFalse && true;
const a3 = soyFalse || 'ya no soy falso'; // las asignacione con or son mas comunes
const a4 = soyFalse || soyNull || soyUndefined || 'ya no soy falso again'// esto es util para asignar valores validando varias entradas
const a5 = soyFalse || soyNull || regresaTrue() || 'ya no soy falso again' || true 

console.log(a1, a2, a3, a4, a5);

