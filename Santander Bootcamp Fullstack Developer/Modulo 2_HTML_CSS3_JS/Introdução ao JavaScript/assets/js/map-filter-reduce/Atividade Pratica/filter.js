const array = [1, 2, 3, 5, 8, 10, 12, 14, 16, 20, 22, 33, 51, 28, 7, 698, 22, 45, 20, 85, 76];

function filtraPares(array) {
    return array.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}
/**Filtra Impares */

function filtraImpares(array) {
    return array.filter(callbackImpar)
}

function callbackImpar(item) {
    return item % 2 !== 0;

}

console.log('Filtra pares: ', filtraPares(array));
console.log('Filtra Impares: ', filtraImpares(array));