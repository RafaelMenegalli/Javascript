var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} Horas.`)
if(hora < 12){
    console.log('Bom Dia!')
} else if(hora < 18){
    console.log('Boa Tarde!')
} else if(hora <= 24) {
    console.log('Boa Noite!')
} else if(hora > 24){
    console.log('Esse horário não existe')
}