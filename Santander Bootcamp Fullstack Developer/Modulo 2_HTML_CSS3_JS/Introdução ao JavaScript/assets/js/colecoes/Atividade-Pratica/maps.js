function getAdms(map) {
    let adms = [];
    for ([key, value] of map) {
        if (value === "ADM") {
            adms.push(key);
        }
    }
    return adms;

}
const usuarios = new Map();

usuarios.set('Elys', 'ADM');
usuarios.set('Cleiton', 'ADM');
usuarios.set('Mariana', 'USER');
usuarios.set('Caleb', 'ADM');

console.log('Users ADM: ', getAdms(usuarios))