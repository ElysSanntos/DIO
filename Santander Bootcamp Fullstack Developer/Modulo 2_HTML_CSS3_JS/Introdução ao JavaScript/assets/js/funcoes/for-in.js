const meuObj = {
    nome: 'Elys',
    idade: 45,
    cidade: 'Campinas',
    estado: 'São Paulo'
}

function forInExemplo(obj) {
    for (propriedadeDoObj in obj) {
        console.log('Propriedade:  ', propriedadeDoObj);
    }
}
forInExemplo(meuObj);

/**Acessando o conteúdo da  propriedade do objeto*/

function forInExemplo2(obj) {
    for (acessarPropriedadeDoObj in obj) {
        console.log('Conteúdo da propriedade: ', obj[acessarPropriedadeDoObj]);
    }
}
forInExemplo2(meuObj);