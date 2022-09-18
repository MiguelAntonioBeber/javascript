var valores = [8, 1, 7, 4, 9]
//console.log(valores) Feia
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3]) Maneira burra || preguiçosa
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)  Maneira inteligente, mas não otimizada
}
*/
valores.sort()
for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Maneira inteligente && otimizada
}