/*Exemplo retorna um set com valores unicos*/
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5, 7, 11, 25, 04];

function valoresUnicos(array) {
    const mySet = new Set(array);

    return mySet;
}
console.log(valoresUnicos(meuArray));

/*Exemplo retorna um novo array com valores unicos*/

const meuArray2 = [30, 30, 40, 5, 223, 2049, 3034, 5, 7, 11, 25, 04];

function valoresUnicos2(array) {
    const mySet2 = new Set(array);

    return [...mySet2];
}
console.log(valoresUnicos2(meuArray2));