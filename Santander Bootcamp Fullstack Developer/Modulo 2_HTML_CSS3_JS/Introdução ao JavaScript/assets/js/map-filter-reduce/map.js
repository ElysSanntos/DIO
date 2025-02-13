const array = [1, 2, 3, 4, 4];


console.log('Array Map original: ', array);

console.log('Array Map modificado: ', array.map((parametroItem) => parametroItem * 2));

/**Mesmo processo com for each */

const arrayForEach = [1, 2, 3, 4, 5];


arrayForEach.forEach((arrayForEach) => arrayForEach * 2);
const meuForEach = [];
console.log('Array for Each: ', meuForEach);