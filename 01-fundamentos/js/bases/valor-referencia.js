let a = 10
let b = a
a=30

console.log({a,b})

let juan = {nombre: 'Juan'};
let ana = {...juan}
ana.nombre = 'Ana'

console.log({juan, ana})


const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony'
    return persona
}

let peter = {nombre: 'Peter'}
let tony = cambiaNombre({persona: peter})

console.log({peter, tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña']

console.time("spread");
const otrasFrutas = [...frutas]
console.timeEnd("spread");

console.time("slice");
const otrasFrutas2 = frutas.slice()
console.timeEnd("slice");


otrasFrutas.push('Mango')
console.table({frutas, otrasFrutas})