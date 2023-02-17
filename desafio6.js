//Faça um programa onde os jurados vão dar a explicação para cada nota dada.
//São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
    case 0:
        console.log ('Nota zerada. Desclassificado')        
        break;
    case 5:
        console.log ('Nota 5. Resultado mediano. Se esforce mais.')        
        break;
    case 10:
        console.log ('Nota 10. Resultado excelente. Parabéns!')        
        break;
    
    default: console.log ('Nota não cadastrada')
        break;
}