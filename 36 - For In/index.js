// for in = lê os índices ou chaves do objeto
const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Gabriel',
    idade: 21
}

//for (let i = 0; i < frutas.length; i++) {
//    console.log(frutas[i]);
//}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}