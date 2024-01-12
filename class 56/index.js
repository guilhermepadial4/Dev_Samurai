const rand = (min = 0, max = 3) => {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

const wait = (mensage, temp) => {
    return new Promise((resolve, reject) => {
        if (typeof mensage !== 'string') {
            reject('ERROR');
            return;
        }

        setTimeout(() => {
            resolve(mensage.toUpperCase() + ' - Passei na promisse');
            return;
        }, temp);
    });
}

// wait('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return wait('Fase 2', rand()); 
//     })

//     .then(valor => {
//         console.log(valor);
//         return wait('Fase 3', rand()); 
//     })

//     .then(valor => {
//         console.log(valor); 
//     })

//     .catch(error => {
//         console.log(error);
//     })

const execute = async () => {
    try{
        const fase1  = await wait('Fase 1', rand());
        console.log(fase1);
        
        const fase2  = await wait('Fase 2', rand());
        console.log(fase2);
    
        const fase3  = await wait('Fase 3', rand());
        console.log(fase3);
    } catch (error) {
        console.log(error);
    }
}

execute();