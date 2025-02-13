// Usando o função return para demonstrar um erro no console
function verificaPalindromoReturn(string) {
    if (!string) return "String Inválida";
    console.log(string === string.split("").reverse().join(""));
}
verificaPalindromoReturn("saia");

// Usando o função throw para demonstrar um erro no console
function verificaPalindromoThrow(string) {
    if (!string) throw "String Inválida";
    console.log(string === string.split("").reverse().join(""));
}
verificaPalindromoThrow("saia");