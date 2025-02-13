const lista = [
    { produto: "Leite em pó", preco: 15 },
    { produto: "Chocolate", preco: 11 },
    { produto: "Café", preco: 17 },
    { produto: "arroz", preco: 23 },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {

        console.log('Rodada: ', index + 1);
        console.log('Saldo ', { prev });
        console.log('debito', { current });

        console.log('=======================================================')

        return prev - current.preco;

    }, saldoDisponivel)
}

console.log('Saldo disponivel: ', calculaSaldo(saldoDisponivel, lista));