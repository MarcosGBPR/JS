/*
Luiz Otávio Miranda tem 30 anos, pesa 84KG, tem 1,80 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1993
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; // peso / (altura* altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 1993 - idade;

console.log(imc);