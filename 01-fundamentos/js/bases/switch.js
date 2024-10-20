const dia = new Date().getDay()


switch (dia) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Lunes')
        break
    default:
        console.log('No es domingo ni lunes')
        break
}