const meusNumeros = [6, 8, 10, 12, 16, 18, 20, 22];

function multiplicacaoPorDois(array) {
    let multiplicados = [];

    for (let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
    }
    return console.log(multiplicados);
}

multiplicacaoPorDois(meusNumeros);