const palavra = 'melancia';
const nums = [07, 11, 19, 76];

function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra)
    }
}
logLetras(palavra);

function logNumbers(nums) {
    for (num of nums) {
        console.log(num);
    }
}
logLetras(nums);