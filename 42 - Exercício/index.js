// Escreva uma função que recebe 2 números e retorne o maior deles

/* function numeros(x, y) {
    if (x > y) return x;
    return y;
} */

/* function numeros(x, y) {
    return x > y ? x : y;
} */

const numeros = (x, y) => {
    return x > y ? x : y;
}

console.log(numeros(1, 2))