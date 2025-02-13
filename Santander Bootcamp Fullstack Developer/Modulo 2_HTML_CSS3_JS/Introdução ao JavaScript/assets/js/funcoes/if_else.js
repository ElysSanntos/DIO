function numPositivo(num) {
    let resultado;
    if (num < 0) {
        resultado = console.log('O numero', num, 'é positivo ? ', false);
    } else {
        resultado = console.log('O numero', num, 'é positivo ? ', true);
    }

    return resultado;
}
numPositivo(-2) // recebe false
numPositivo(5) //recebe true


function numPositivo3(num) {
    const ehNegativo = num < 0;
    if (ehNegativo) {
        return console.log(num, 'ehNegativo? = ', true);
    }
    return console.log(num, 'ehNegativo? = ', false);
}
numPositivo3(15) // recebe false
numPositivo3(-8) //recebe true