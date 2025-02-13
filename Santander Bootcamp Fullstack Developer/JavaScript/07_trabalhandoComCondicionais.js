console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador `,
    `São Paulo`,
    `Rio de Janeiro`);



const idadeComprador = 15;
const estaAcompanhada = false;

console.log(`Destinos possiveis: `);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {

//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);

// } else if (estaAcompanhada) {
//     console.log("Comprador é menor de idade, mas está acompanhado.");
//     listaDeDestinos.splice(1, 1);
// } else {
//     cconsole.log("Comprador menor de idade, venda negada!");
// }
// console.log(`Destinos possiveis: `);
// console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1);
} else {
    cconsole.log("Comprador menor de idade, venda negada!");
}
console.log(`Destinos possiveis: `);
console.log(listaDeDestinos);