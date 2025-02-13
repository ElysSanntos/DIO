/*Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring"
para manipular as propriedades desejadas de cada aluno.*/
const alunos = [{
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Maria',
        nota: 6,
        turma: '1C'
    },
    {
        nome: 'Zeca',
        nota: 8,
        turma: '2B'
    },
]

function alunosAprovados(array, media) {
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
        const { nota, nome } = array[i];
        if (nota >= media) {
            aprovados.push(nome);
        }

    }
    return aprovados;

}
console.log(alunosAprovados(alunos, 5))