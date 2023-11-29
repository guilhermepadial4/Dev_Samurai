const rand = (min, max) => {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

const wait = (msg, temp) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(msg);
        }, temp);

    });
}

async function executa() {
    try {
        const test1 = await wait('Fase 1', rand(1, 3));
        console.log(test1);

        const test2 = await wait('Fase 2', rand(1, 2));
        console.log(test2);

        const test3 = await wait('Fase 3', rand(1, 4));
        console.log(test3);

        console.log('Terminamos na fase: ' + test3);
    }
    catch(e) {
        console.log(e);
    }
}

executa();
