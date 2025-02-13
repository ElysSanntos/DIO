function validaArray(array, num) {
    try {
        if (!array && !num) throw ReferenceError("Envie os parametros");

        if (typeof array !== "object")
            throw new TypeError("Array precisa ser do tipo object");
        if (typeof num !== "number")
            throw new TypeError("Array precisa ser do tipo number");

        if (array.lenght !== num) throw new RangeError("Tamanho inválido");

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este é um ReferenceError!");
            console.log(error.message);
            //console.log(error.name);
            //console.log(error.stack);
        } else if (error instanceof TypeError) {
            console.log("Este é um TypeError!");
            console.log(error.message);
            //console.log(error.name);
            //console.log(error.stack);
        } else if (error instanceof RangeError) {
            console.log("Este é um RangeError!");
            console.log(error.message);
            //console.log(error.name);
            //console.log(error.stack);
        } else {
            console.log("Erro inesperado: " + error);
        }
    }

}
console.log('Nada enviado: ', validaArray());
console.log('Enviado numero: ', validaArray(5, 5));
console.log('Enviado [] e string: ', validaArray([], 'a'));
console.log('Enviado [] e 5: ', validaArray([], 5));
console.log('Enviado [1,2] e 2: ', validaArray([1, 2], 2));