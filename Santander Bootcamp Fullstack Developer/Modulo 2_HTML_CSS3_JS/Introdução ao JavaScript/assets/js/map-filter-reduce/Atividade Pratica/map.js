const maca = {
    value: 3
}
const banana = {
    value: 4,
};
const laranja = {
    value: 5,
};

const nums = [1, 2, 3];

function mapComthis(array, thisArgs) {
    return array.map(function(item) {
        return item * this.value;
    }, thisArgs);
}
console.log('Array original', nums)
console.log('this = maçã: ', mapComthis(nums, maca));
console.log('this = banana: ', mapComthis(nums, banana));
console.log('this = laranaja: ', mapComthis(nums, laranja));

/**função simples optando por não usar o argumento this */

function mapSemThis(array) {
    return array.map(function(laranja) {
        return laranja * 2;
    });
}

console.log('Sem this = array: ', mapSemThis(nums));