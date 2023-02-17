// Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, 
//a pessoa deve ser maior de idade e brasileira para ser aprovada.


const studentOne = { 
    nome: 'Thayla', 
    idade: '29', 
    sexo: 'feminino', 
    profissão: 'programadora', 
    nacionalidade: 'brasileira'}

if (studentOne.idade >=18 && studentOne.nacionalidade === 'brasileira') {
    console.log ('Você passou no processo!')
}
else { console.log ('Você NÃO passou no processo')}