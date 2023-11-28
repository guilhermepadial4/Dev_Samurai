const rand = (min, max) => {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

const wait = (msg, temp) => {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, temp);

    });
}

wait('Conexão com a BD', rand(1, 3))
    .then(response => {
        console.log(response);
        return wait('Buscando dados da BASE', rand(1, 3));
    })
    .then(response => {
        console.log(response);
        return wait(3, rand(1, 3));
    })
    .then(response => {
        console.log(response);
    })
    .catch(e => {
        console.log('ERROR: ' + e);
    })
