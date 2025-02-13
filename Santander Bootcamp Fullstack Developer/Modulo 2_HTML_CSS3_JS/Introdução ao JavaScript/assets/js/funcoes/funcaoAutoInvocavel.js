(function() {
    let name = console.log("Bootcamp Fullstack Santander - DIO");
    return name;
})();

/**Segunda forma */
(function() {
    return console.log("Bootcamp Fullstack Santander - DIO");
})();

/* Com passagem de parametros*/
(function(a, b) {
    return console.log(a + b);
})(1, 2);



/**Armazenada em variável */

const divisao = (function() {
    return a / b;
})(10, 2);
console.log(divisao);