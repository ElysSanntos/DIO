/*Sintaxe*/
new Error(message, fileName, lineNumber);


const meuErro = new Error('Mensagem inválida');

throw meuErro;

/**Nomeando o Error */

const nomeError = new Error("Mensagem inválida");
nomeError.name = 'InvalidMessage';

throw nomeError;