function findMax() {
    let max = -Infinity; // todos os numeros infinitos negativos

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = console.log(arguments[i]);
        }
    }
    return max;
}

function showArgs() {
    return console.log(arguments);
}