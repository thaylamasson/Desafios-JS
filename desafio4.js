// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, e qual é o menor.

const numberOne = 27
const numberTwo = 8
const numberThree = 12

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log ('O primeiro número é maior')
}
else if (numberTwo > numberThree){
    console.log ('O segundo número é maior')
}
else {
    console.log ('O terceiro número é maior')
}

if (numberOne < numberTwo && numberOne < numberThree) {
    console.log ('O primeiro número é menor')
}
else if (numberTwo < numberThree){
    console.log ('O segundo número é menor')
}
else {
    console.log ('O terceiro número é menor')
}