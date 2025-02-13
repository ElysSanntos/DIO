const retornaNomes = function() {
    return console.log(this.nome);
};
let bruno = retornaNomes.bind({ nome: 'Bruno' });

bruno();