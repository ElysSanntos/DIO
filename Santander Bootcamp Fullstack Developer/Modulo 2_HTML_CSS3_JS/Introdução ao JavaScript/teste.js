//Comentário de linha
/* Comentários de várias linhas*/

console.log("Hello world!")



function returnEvenValues(array) {

    let evenNums = [];
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são: ', evenNums);

}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

returnEvenValues(array);