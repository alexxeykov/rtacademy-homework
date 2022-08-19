const date1El = document.getElementById ("start-date");
const date2El = document.getElementById ("end-date");
const years = ["рік", "роки", "років"];
const months = ["місяць", "місяці", "місяців"];
const days = ["день", "дні", "днів"];
const hours = ["годину", "години", "годин"];
const minutes = ["хвилину", "хвилини", "хвилин"];

function DateDiff () {
    const d1 = date1El.value;
    const d2 = date2El.value;
    const date1 = new Date (d1).getTime ();
    const date2 = new Date (d2).getTime ();

    let calc;

    if ( date2 >= date1 ) {
        calc = new Date (date2 - date1);
    } else {
        calc = new Date (date1 - date2);
    }

    const getDate = calc.getUTCMinutes () + '-' + calc.getUTCHours () + '-' + calc.getUTCDate () + '-'
        + (calc.getUTCMonth () + 1) + '-' + calc.getUTCFullYear ();
    const getDateArr = getDate.split ("-");

    const minutes_passed = parseInt (Math.abs (getDateArr[0]));
    const hours_passed = parseInt (Math.abs (getDateArr[1]));
    const days_passed = parseInt (Math.abs (getDateArr[2] - 1));
    const months_passed = parseInt (Math.abs (getDateArr[3] - 1));
    const years_passed = parseInt (Math.abs (getDateArr[4] - 1970));

    const yearsResult = ((years_passed == 1) ? years_passed + ' ' + years[0] + ' ' : (years_passed > 1 && years_passed < 5) ?
        years_passed + ' ' + years[1] + ' ' : (years_passed >= 5) ? years_passed + ' ' + years[2] + ' ' : '');
    const monthsResult = ((months_passed == 1) ? months_passed + ' ' + months[0] + ' ' : (months_passed > 1 && months_passed < 5) ?
        months_passed + ' ' + months[1] + ' ' : (months_passed >= 5) ? months_passed + ' ' + months[2] + ' ' : '');
    const daysResult = ((days_passed == 1) ? days_passed + ' ' + days[0] + ' ' : (days_passed > 1 && days_passed < 5) ?
        days_passed + ' ' + days[1] + ' ' : (days_passed >= 5) ? days_passed + ' ' + days[2] + ' ' : '');
    const hoursResult = ((hours_passed == 1) ? hours_passed + ' ' + hours[0] + ' ' : (hours_passed > 1 && hours_passed < 5) ?
        hours_passed + ' ' + hours[1] + ' ' : (hours_passed >= 5) ? hours_passed + ' ' + hours[2] + ' ' : '');
    const minutesResult = ((minutes_passed == 1) ? minutes_passed + ' ' + minutes[0] + ' ' : (minutes_passed > 1 && minutes_passed < 5) ?
        minutes_passed + ' ' + minutes[1] + ' ' : (minutes_passed >= 5) ? minutes_passed + ' ' + minutes[2] + ' ' : '');

    let result = yearsResult + monthsResult + daysResult + hoursResult + minutesResult;

    clearResult ();

    const resultBlock = document.createElement ("div");
    resultBlock.setAttribute ('class', 'result-block');
    document.body.append (resultBlock);

    const header = document.createElement ("h2");
    header.append (document.createTextNode ('Різниця між датами'));
    resultBlock.append (header);

    let resultDate1 = new Date (d1);
    let resultDate2 = new Date (d2);
    const formatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    resultDate1 = resultDate1.toLocaleDateString ('ua-UA', formatOptions);
    resultDate2 = resultDate2.toLocaleDateString ('ua-UA', formatOptions);
    resultDate1 = resultDate1.replace (',', '');
    resultDate2 = resultDate2.replace (',', '');

    result = 'Різниця між ' + resultDate1 + ' та ' + resultDate2 + ' становить ' + result;

    let resultText = document.createElement ("p");
    resultText.append (document.createTextNode (result));
    resultBlock.append (resultText);

    return result;
}

const clickResultButton = document.getElementById ("result-button");

clickResultButton.onclick = result;

function result () {
    if ( date1El.value && date2El.value ) {
        DateDiff ();
    }
}

function clearResult () {
    if ( document.querySelector ('.result-block') ) {
        document.querySelector ('.result-block').remove ();
    }
}