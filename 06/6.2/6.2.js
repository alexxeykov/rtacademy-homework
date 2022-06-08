// 1 варіант. Простий, але жахливий варіант з заміною маленьких літер на великі і навпаки. Працює лише для міста Київ
let cityName = 'киїВ';
cityName = cityName.replace('к', 'К');
let cityNameCapitalized = cityName.replace('В', 'в')

console.log(cityNameCapitalized);

// 2 варіант. На мій погляд найпростіший та найкращий варіант, який підійде для міст з простою назвою, які сладаються з одного слова
cityName = 'лЬвів';
cityNameCapitalized = cityName[0].toUpperCase() + cityName.substring(1).toLowerCase();

console.log(cityNameCapitalized);

//3 варіант. Також буде працювати з простими назвами міст, які сладаються з одного слова
cityName = 'хАРКіВ';
let cityNameFirstLetter = cityName[0];
cityNameCapitalized = cityName.toLowerCase().replace(cityNameFirstLetter, cityNameFirstLetter.toUpperCase());

console.log(cityNameCapitalized);
