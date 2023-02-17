// Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
// Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES 
//Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. 
//Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const one = 24
const two = 37
const three = 8
const four = 46

if (one % 2 === 0 && two % 2 === 0 && three % 2 === 0 && four % 2 === 0) {
    console.log ('Todos os números são pares')
}
else if (one % 2 !== 0 && two % 2 !== 0 && three % 2 !== 0 && four % 2 !== 0) {
    console.log ('Todos os números são ímpares')
}
else { 
    console.log ('Há pares e impares misturados')
}