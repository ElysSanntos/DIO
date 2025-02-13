function numPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;
    const intervalo = num > 0 && num < 10;


    if (ehNegativo) {
        return console.log(num, 'é um número negativo.')
    } else
    if (!ehNegativo && maiorQueDez) {
        return console.log(num, 'é num numero positivo e maior que 10.')
    } else if (intervalo) {
        return console.log(num, 'é um numero positivo, e menor que 10.')
    }
    return console.log(num, ' é um numero positivo.')
}
numPositivo(2);
numPositivo(11);
numPositivo(-6);
numPositivo(10);