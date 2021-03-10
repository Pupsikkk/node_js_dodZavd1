const index = require('./node_modules/math/index')

let arr = [0,1,2,3,4]

console.log(`\nМассив: ${arr}\n`)
console.log(`Минимальное значение массива: ${index.min(arr)}`)
console.log(`Сумма масива: ${index.sum(arr)}`)
let rnd_numb = (Math.floor(Math.random()*100))*-1
console.log(`\nСлучайно сгенерированое число: ${rnd_numb}\nЧисло по модулю: ${index.abs(rnd_numb)}`)

