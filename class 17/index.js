const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of num) {

    if(number === 2) {
        console.log('Número 2 pulado!');
        continue;
    }

    if (number === 7) {
        console.log('Número 7 enconrado.');
        break
    }

    console.log(number);
}
