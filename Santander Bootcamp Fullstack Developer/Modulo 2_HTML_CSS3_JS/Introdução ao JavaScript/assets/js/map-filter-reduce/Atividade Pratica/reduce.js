/**Soma todos os itens do array */


function somaNumeros(array) {
    return array.reduce(function(prev, current) {

        console.log({ prev });
        console.log({ current });

        return prev + current;
    }, 0);
}
const array = [1, 2];
console.log("", somaNumeros(array));