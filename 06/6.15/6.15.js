// -----Завдання 2. XMLHttpRequest-----

let xhr = new XMLHttpRequest ();
xhr.open ('GET', 'countries.json');
xhr.responseType = 'json';
xhr.send ();
xhr.onload = function () {
    if ( xhr.status === 200 ) {
        console.log (xhr.response);

    } else {
        console.error ('Сталася помилка ' +
            xhr.status + ': ' + xhr.statusText);
    }
};
xhr.onerror = function () {
    console.error ('Сталася помилка при виконанні запита до сервера');
};

// -----Завдання 2. jQuery-----

$.ajax (
    {
        'method': 'GET',
        'url': 'countries.json',
        'dataType': 'json',
        'success': function (jsonContents) {
            console.log (jsonContents);
        },
        'error': function (jqXHR, textStatus, errorThrown) {
            console.error (textStatus);
        },
    }
);

// -----Завдання 2. fetch-----

(async function () {
    let response = await fetch ('countries.json');
    if ( response.ok ) {
        let jsonContents = await response.json ();
        listOfCountries (jsonContents);
    } else {
        console.error ('Сталася помилка ' + response.status + ': ' + response.statusText);
    }
}) ();

// -----Завдання 3-----

function listOfCountries (countries) {

    const form = document.createElement ("form");
    const h2 = document.createElement ("h2");
    const title = document.createTextNode ("Список країн: ");
    const input = document.createElement ("input");
    const datalist = document.createElement ("datalist");

    form.setAttribute ("method", "get");
    input.setAttribute ("list", "countries");
    datalist.setAttribute ("id", "countries");

    document.body.append (form);
    form.append (h2);
    form.append (input);
    form.append (datalist);
    h2.append (title);

    $.each (countries, function (key, value) {
        key += 1;
        const option = document.createElement ("option");
        option.setAttribute ("value", key + '. ' + value.Code + ' - ' + value.Name);
        datalist.append (option);
    });
}

