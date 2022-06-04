function capitalize( str ) {
    const cityToArray = str.split( '-' ) // Назва міста розбивається на масив, де роздільником являється дефіс

    return cityToArray.map( function ( part ) {
        const firstElement = cityToArray[ 0 ];
        const lastElement = cityToArray[ cityToArray.length - 1 ];
        const regExp = /(^.['`"].*)/;   // Якщо елемент масиву починається з одного символу, а за ним слідує апостроф,
                                        // то цей елемент буде починатися з маленької літери, а після апострофу буде велика літера
        if ( part.match( regExp ) ) {
            return part[ 0 ].toLowerCase() + '\'' + part[ 2 ].toUpperCase() + part.substring( 3 ).toLowerCase();
        }

        if ( part === firstElement ) {
            return firstElement[ 0 ].toUpperCase() + part.substring( 1 ).toLowerCase(); // Перший елемент масиву завжди починається з великої літери
        } else if ( part === lastElement ) {
            return lastElement[ 0 ].toUpperCase() + part.substring( 1 ).toLowerCase();  // Останній елемент масиву завжди починається з великої літери
        } else if ( part.length > 3 ) {
            return part[ 0 ].toUpperCase() + part.substring( 1 ).toLowerCase(); // Якщо елемент масиву має довжину більше 3, то цей елемент буде починатися з великої літери
        } else {
            return part.toLowerCase();  //В даниому випадку виходить, що всі елементи масиву, довжина яких менше 4 символів, будуть починатися з маленької літери
        }

    } ).join( '-' );

}

console.log( capitalize( 'київ' ) );
console.log( capitalize( 'нью-йорк' ) );
console.log( capitalize( 'ЛОС-АНДЖЕЛЕС' ) );
console.log( capitalize( 'РіО-дЕ-ЖаНеЙрО' ) );
console.log( capitalize( 'франкФУРТ-НА-майНІ' ) );
console.log( capitalize( 'сен-сатюрнен-лез-апт' ) );
console.log( capitalize( 'лаГАрд-Д\'аПт' ) );
console.log( capitalize( 'скоп\'є' ) );
console.log( capitalize( 'прем\'єР-скоп\'Є' ) );