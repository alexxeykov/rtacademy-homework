let age = 17;
let withParents = true;
let accessAllowed;

//Варіант 1. Рішення з вкладеними if-else
if ( age > 18 ) {
    accessAllowed = 'Yes';
} else {
    if (withParents) {
        accessAllowed = 'Yes';
    } else {
        accessAllowed = 'No';
    }
}

console.log( 'accessAllowed = ' + accessAllowed );

//Варіант 2. Рішення для завдання із * з використанням одного if
accessAllowed = 'No';

if ( age > 18 || withParents ) {
    accessAllowed = 'Yes';
}

console.log( 'accessAllowed = ' + accessAllowed );