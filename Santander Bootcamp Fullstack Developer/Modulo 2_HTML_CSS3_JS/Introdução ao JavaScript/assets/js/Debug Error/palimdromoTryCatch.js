// Usando a declaração Try Catch com console log
function verificaPalindromoTryCatch(string) {
    if (!string) return "String Inválida";
    console.log(string === string.split("").reverse().join(""));
}
try {
    verificaPalindromoTryCatch("saia");
} catch (error) {
    console.log(Error);
}

// Usando a declaração Try Catch com throw 
function verificaPalindromoTryCatchComThrow(string) {
    if (!string) throw "String Inválida";
    console.log(string === string.split("").reverse().join(""));
}
try {
    verificaPalindromoTryCatchComThrow("saia");
} catch (error) {
    throw (Error);
}