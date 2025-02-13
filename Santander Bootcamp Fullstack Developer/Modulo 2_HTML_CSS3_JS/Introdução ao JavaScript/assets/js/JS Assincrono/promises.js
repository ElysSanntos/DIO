//Estrutura
async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve("Resolvida.");
        }, 2000);
    });

    let result;
    try {
        result = await myPromise
            .then((result) => result + "Passando pelo then")
            .then((result) => result + "e agora acabou.")
            .catch((error) => console.log(error.message));
    } catch (error) {
        result = error.message;
    }


    return console.log(resolved);
}