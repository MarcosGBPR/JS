const nome = ['Marcos', 'Gabriel', 'Pereira', 'Rosa'];

// for Clássico - Geralmente com iteráveis (array ou strings)
//for (let i = 0; i < nome.length; i++){
//    console.log(nome[i]);
//}

// for In - Retorna o índice ou chave (string, array ou objetos)
// for (let i in nome) {
//     console.log(nome[i]);
// }

// for Of - Retorna o valor em sí (iteráveis, arrays ou strings)
// for (let valor of nome) {
//     console.log(valor);
// }

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});