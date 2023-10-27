const comparison = (n1, n2) => {
    if (n1 > n2) {
        console.log(`${n1} maior que ${n2}`);
    }else if (n2 > n1) {
        console.log(`${n2} maior que ${n1}`);
    }else if (n1 == n2) {
        console.log(`${n1} e ${n2} são iguais`);
    }else {
        console.log('Número indefinido');
    }
}

comparison(5, 10);
