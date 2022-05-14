//Варіант 1 з виведенням всіх парних чисел та з використанням циклу for
let pairNum;

for ( let i = 1; i <= 32; i++ ) {
    if ( i % 2 === 0 ) {
        pairNum = i;
        if ( i % 4 === 0 ) {
            pairNum += '*';
        }
        if ( i % 10 === 0 ) {
            pairNum += '^';
        }
        console.log( pairNum );
    }
}

//Варіант 2 з виведенням всіх парних чисел та з використанням циклу while
let i = 1;
while( i <= 32 )
{
    if ( i % 2 === 0 ) {
        pairNum = i;
        if ( i % 4 === 0 ) {
            pairNum += '*';
        }
        if ( i % 10 === 0 ) {
            pairNum += '^';
        }
        console.log( pairNum );
    }
    i++;
}


