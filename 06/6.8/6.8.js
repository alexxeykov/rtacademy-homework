//Рішення з урахуванням того, що значення можуть бути Integer, Float, BigInt або String в заданому інтервалі включно із значеннями min та max
function getRandomInt( min, max ) {

    if ( min > max ) {
        [ min, max ] = [ max, min ]
    }

    if ( typeof min === 'bigint' || typeof max === 'bigint' ) {
        min = parseFloat( min );
        max = parseFloat( max );

        let bigIntRandom = Math.floor( Math.random() * ( max - min + 1 ) + min );
        bigIntRandom = BigInt( bigIntRandom );
        return bigIntRandom

    } else if ( typeof min === 'number' && typeof max === 'number' ) {

        return Math.floor( Math.random() * ( max - min + 1 ) + min );

    } else if ( typeof min === 'string' && typeof max === 'string' ) {
        min = parseFloat( min );
        max = parseFloat( max );

        return Math.floor( Math.random() * ( max - min + 1 ) + min );

    } else {
        return 'Невірний тип даних'
    }
}

let randomInt = getRandomInt( 1, 100 );
console.log( 'Випадкове число: ' + randomInt );

randomInt = getRandomInt( 1n, 100n );
console.log( 'Випадкове BigInt: ' + randomInt );

randomInt = getRandomInt( 111.1, 999.99 );
console.log( 'Випадкове число: ' + randomInt );

randomInt = getRandomInt( '100', '10' );
console.log( 'Випадкове число: ' + randomInt );

randomInt = getRandomInt( false, '10' );
console.log( 'Випадкове число: ' + randomInt );

