//Рішення з урахуванням того, що значення можуть бути Integer або Float в заданому інтервалі включно із значеннями min та max
function getRandomInt( min, max ) {
    if ( min > max ) {
        [ min, max ] = [ max, min ]
    }
    return parseInt( Math.floor( Math.random() * ( max - min + 1 ) ) + min );
}

let randomInt = getRandomInt( 1, 100 );
console.log( 'Випадкове число: ' + randomInt );