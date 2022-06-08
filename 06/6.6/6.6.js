function capitalize( cityNameCapitalized ) {
    if ( typeof cityNameCapitalized === 'string' ) {
        return cityNameCapitalized[ 0 ].toUpperCase() + cityNameCapitalized.substring( 1 ).toLowerCase();   //Повертає назву міста з великої летери для рядка
    } else if ( typeof cityNameCapitalized === 'object' ) {
        return cityNameCapitalized.map( function ( capitalize ) {  //Прийшлося трошки погуглити, щоб знайти спосіб вирішення цього завдання для масиву. Тому тут і з'явився .map
            return capitalize[ 0 ].toUpperCase() + capitalize.substring( 1 ).toLowerCase();
        } )
    } else {
        return notAString;  //Повертає повідомлення про невірно вказаний тип міста
    }
}

let cityNameCapitalized = capitalize('стОКГольМ');
console.log( cityNameCapitalized );  //==> Стокгольм

let notAString = 'Невірно вказано тип міста!'
cityNameCapitalized = capitalize(123);
console.log( cityNameCapitalized ); // ==> Невірно вказано тип міста!

cityNameCapitalized = capitalize( [ "лЬвів", "одеСА", "хАРКіВ" ] );
console.log( cityNameCapitalized ); // ==> ['Львів', 'Одеса', 'Харків']



