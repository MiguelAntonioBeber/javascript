var ag = new Date()
var h  = ag.getHours()
var m = ag.getMinutes()
console.log(`Agora São exatamente ${h} horas e ${m} Minutos.`)
if (h < 12) {
    console.log('Bom dia!')
} else if (h <= 18) {
    console.log('Boa tarde!')
} else if (h >= 19) {
    console.log('Boa noite!')
} 