let csvFileContent = `
Kyiv,50.4334,30.5166,Ukraine,2709000
Kharkiv,50.0000,36.2500,Ukraine,1461000
Dnipro,48.4800,35.0000,Ukraine,1050000
Odesa,46.4900,30.7100,Ukraine,991000
Donets’k,48.0000,37.8300,Ukraine,988000
L’viv,49.8350,24.0300,Ukraine,803880
Zaporizhzhya,47.8573,35.1768,Ukraine,788000
Kryvyy Rih,47.9283,33.3450,Ukraine,652380
Mykolayiv,46.9677,31.9843,Ukraine,510840
`;

function parseCSV( csvFileContent ) {

    const wrongType = 'Очікую вхідні дані у вигляді рядка'

    if ( typeof csvFileContent !== 'string' ) {
        return wrongType
    }

    const resultArray = [];
    const cityArray = csvFileContent.split( "\n" );

    for ( let i = 0; i < cityArray.length; i++ ) {

        const getValue = cityArray[ i ].split( ',' );

        if ( cityArray[ i ].length < 10 ) {
            continue
        }

        resultArray.push(
            {
                'city': getValue[ 0 ].toString().trim(),
                'latitude': parseFloat( getValue[ 1 ] ),
                'longitude': parseFloat( getValue[ 2 ] ),
                'country': getValue[ 3 ].toString().trim(),
                'population': parseInt( getValue[ 4 ] ),
            } );
    }
    return resultArray
}

let result = parseCSV( csvFileContent );
console.log( result );
