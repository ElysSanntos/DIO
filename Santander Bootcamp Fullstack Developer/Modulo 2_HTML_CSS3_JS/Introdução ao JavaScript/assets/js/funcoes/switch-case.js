function getAnimal(id) {
    switch (id) {
        case 1:
            return console.log('O animal 1 selecionado é: cão');
        case 2:
            return console.log("O animal 2 selecionado é: gato");
        case 3:
            return console.log("O animal 3 selecionado é: pássaro");
        default:
            return console.log("O animal default é: peixe");

    }
}
getAnimal(1);
getAnimal(2);
getAnimal(3);
getAnimal(0);
getAnimal("banana");