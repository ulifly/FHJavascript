const heores = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');

for (let i = 0; i < heores.length; i++) {
    console.log(heores[i]);
}

console.warn('For in');

for (let i in heores) {
    console.log(heores[i]);
}

console.warn('For of');

for (let heroe of heores) {
    console.log(heroe);
}