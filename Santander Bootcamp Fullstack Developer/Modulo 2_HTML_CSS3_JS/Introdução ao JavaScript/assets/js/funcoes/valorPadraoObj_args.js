/**Antes do ES2015 */

function exponencialPre(array, num) {
    if (num === undefined) {
        num = 1;
    }
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] ** num);
    }
    return console.log('Pré ES2015', resultado);
}
// teste para o numero undefined - Resultado esperado [ 1, 2, 3, 4 ]
exponencialPre([1, 2, 3, 4]);

//Teste para numero definido - Resultado esperado [ 1, 4, 9, 16 ] 
exponencialPre([1, 2, 3, 4], 3);


/**Depois do ES2015 */
function exponencialPos(array, num = 1) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] ** num);
    }
    return console.log("Pós ES2015", resultado);
}
// teste para o numero undefined - Resultado esperado Pós ES2015[ 1, 2, 3, 4 ]
exponencialPos([1, 2, 3, 4, 5]);

//Teste para numero definido - Resultado esperado Pós ES2015 [ 1, 4, 9, 16 ]
exponencialPos([1, 2, 3, 4], 2);