const pessoa = {
    nome: "Miguel"
};

const animal = {
    nome: "Jolie"
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa);