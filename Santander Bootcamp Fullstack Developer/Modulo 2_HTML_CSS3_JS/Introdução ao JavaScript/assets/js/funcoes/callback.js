const calculo = function(operacao, numero1, numero2) {
    return operacao(numero1, numero2);
}
const soma = function(numero1, numero2) {
    return console.log('SOMA: ',
        numero1 + numero2);
}
const subtracao = function(numero1, numero2) {
    return console.log("SUBTRACAO: ", numero1 + numero2);
};
const divisao = function(numero1, numero2) {
    return console.log("DIVISÃO: ", numero1 / numero2);
}
const multiplicacao = function(numero1, numero2) {
    return console.log("MULTIPLICAÇÃO: ", numero1 * numero2);
};
const resultadoSoma = calculo(soma, 1, 2);
const resultadoDivisao = calculo(divisao, 10, 2);
const resultadoSubração = calculo(subtracao, 5, 1);
const resultadoMultipicacao = calculo(multiplicacao, 10, 2);