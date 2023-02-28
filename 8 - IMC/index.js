/*
Luiz Otávio Miranda tem 30 anos, pesa 84KG, tem 1,80 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1993
*/

const nome = 'Marcos Gabriel';
const sobrenome = 'Pereira Rosa';
const idade = 21;
const peso = 55;
const alturaEmM = 1.71;
let indiceMassaCorporal; // peso / (altura* altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento} e pesa ${peso}KG, tem ${alturaEmM}M e seu IMC é de ${indiceMassaCorporal}.`);