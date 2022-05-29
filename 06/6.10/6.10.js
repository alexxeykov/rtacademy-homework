//Варіант 1. Рішення з використанням рекурсивної функції
function sum( firstNum, secondNum ) {
    if ( firstNum < secondNum ) {
        return secondNum + sum( firstNum, secondNum - 1 )
    }
    return firstNum
}

console.log( 'Варіант 1. Рішення з використанням рекурсивної функції:' );
console.log( sum( 1, 3 ) ); // 6
console.log( sum( 1, 10 ) ); // 55
console.log( sum( 100, 1000 ) ); // 495550


//Варіант 2. Рішення з використанням стрілкової рекурсивної функції
const sum2 = ( firstNum, secondNum ) => {
    if ( firstNum < secondNum ) {
        return secondNum + sum( firstNum, secondNum - 1 )
    }
    return firstNum
}

console.log( '\nВаріант 2. Рішення з використанням стрілкової рекурсивної функції:' );
console.log( sum2( 1, 3 ) ); // 6
console.log( sum2( 1, 10 ) ); // 55
console.log( sum2( 100, 1000 ) ); // 495550


//Варіант 3. Рішення з використанням стрілкової рекурсивної функції та тернарного оператора
const sum3 = ( firstNum, secondNum ) => ( firstNum < secondNum ) ? secondNum + sum( firstNum, secondNum - 1 ) : firstNum;

console.log( '\nВаріант 3. Рішення з використанням стрілкової рекурсивної функції та тернарного оператора:' );
console.log( sum3( 1, 3 ) ); // 6
console.log( sum3( 1, 10 ) ); // 55
console.log( sum3( 100, 1000 ) ); // 495550