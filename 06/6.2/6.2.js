// Простий, але не дуже гарний варіант з заміною маленьких літер на великі і навпаки лише для міста Київ
let cityName = 'киїВ';
cityName = cityName.replace('к', 'К');
cityNameCapitalized = cityName.replace('В', 'в')

console.log(cityNameCapitalized);

// Більш кращий варіант, який підійде майже для будь-якого міста
// Львів
cityName = 'лЬвів';
let cityNameCapitalized2 = cityName[0].toUpperCase() + cityName.substring(1).toLowerCase();

console.log(cityNameCapitalized2);

//Одеса
cityName = 'одеСА';
let cityNameCapitalized3 = cityName[0].toUpperCase() + cityName.substring(1).toLowerCase();

console.log(cityNameCapitalized3);

//Харків
cityName = 'хАРКіВ';
let cityNameCapitalized4 = cityName[0].toUpperCase() + cityName.substring(1).toLowerCase();

console.log(cityNameCapitalized4);