// Arguments que sustenta todos os argumentos enviados.

// function testArguments() {
//     let total = 0;

//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total);
// }

// testArguments(1, 2, 3, 4, 5, 6, 7);

function count (operador, acumulador, ...numeros) {
    for (numero of numeros) {
        if(operador === '+') {
            acumulador += numero;
        }

        if(operador === '-') {
            acumulador -= numero;
        }

        if(operador === '*') {
            acumulador *= numero;
        }

        if(operador === '/') {
            acumulador /= numero;
        }   
    }

    console.log(acumulador);
}

count('*', 1, 10);
