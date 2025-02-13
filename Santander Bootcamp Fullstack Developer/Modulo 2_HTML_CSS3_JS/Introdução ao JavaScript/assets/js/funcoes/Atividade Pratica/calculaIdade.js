/*Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this.Crie seus próprios objetos para esta atividade!*/

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "João",
    idade: 16
};
const pessoa2 = {
    nome: "Maria",
    idade: 22
};
const pessoa3 = {
    nome: "Zeca",
    idade: 50
};
const animal1 = {
    nome: "Bolinha",
    idade: 3,
    raca: 'pug'
};
console.log(calculaIdade.call(pessoa1));
console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));