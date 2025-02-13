// Usando a declaração Try Catch com finally
function verificaPalindromoComFinally(string) {
    if (!string) throw "String Inválida";
    console.log(string === string.split("").reverse().join(""));

    try {
        verificaPalindromoComFinally(string);
    } catch (error) {
        throw Error;
    } finally {
        console.log("a string enviada foi" + string);
    }
}
verificaPalindromoComFinally('ala');