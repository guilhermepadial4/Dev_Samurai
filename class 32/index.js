function* geradora1() {
    yield 'valor 1';

    yield 'valor 2';

    yield 'valor 3';
}
const g1 = geradora1();

function* geradora2() {
    let i = 1;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}
const g4 = geradora4();

function* geradora5() {
    yield function() {
        console.log('Vim a partir do y1');
    }
    yield function() {
        console.log('Vim a partir do y2');
    }
}
const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
