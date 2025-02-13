console.log(`Trabalhando com listas`);



const listaDeDestinos = new Array(

    `Salvador `,
    `São Paulo`,
    `Rio de Janeiro`

);
listaDeDestinos.push(`Curitiba`);
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);