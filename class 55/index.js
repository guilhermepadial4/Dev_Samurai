const rand = (min, max) => {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random () * (max - min) + min);
}

const wait = (mensage, temp) => {
    return new Promise((resolve, reject) => {
        if(typeof mensage !== 'string'){
            reject('Erro');
            return;  
        } 

        setTimeout(() => {
            resolve(mensage.toUpperCase() + ' - Passei na promisse');
            return;
        }, temp);
    });
}

// const promises = [
//     wait('Promise 1', 3000),
//     wait('Promise 2', 500),
//     wait('Promise 3', 1000),
//     // wait(1000, 1000),
// ];

// Promise.race(promises)

// .then((resolve) => {
//     console.log(resolve);
// })

// .catch((error) => {
//     console.log(error);
// })

const downPage = () => {
    const cache = false;

    if(cache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return wait('Baixando a pagina', 3000);
    }
}

downPage()
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((error) => {
        console.log(error);
    }) 
