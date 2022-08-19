const operand1 = document.getElementById ("operand1");
const operand2 = document.getElementById ("operand2");
const buttonCalc = document.getElementById ("button-result");
const result = document.getElementById ("result");
const operator = document.getElementById ("action");

buttonCalc.onclick = calculate;

function calculate () {

    validation ();

    let num1 = parseFloat (operand1.value);
    let num2 = parseFloat (operand2.value);
    let calcResult;
    const regexpN = /n$/;

    if ( operand1.value.match (regexpN) || operand2.value.match (regexpN) ) {
        num1 = BigInt (num1);
        num2 = BigInt (num2);
    }

    switch ( operator.value ) {
        case 'plus':
            calcResult = num1 + num2;
            break;
        case 'subtraction':
            calcResult = num1 - num2;
            break;
        case 'multiplication':
            calcResult = num1 * num2;
            break;
        case 'division':
            if ( num2 === 0 ) {
                operand2.style.border = "2px solid red";
                calcResult = NaN;
            } else {
                calcResult = num1 / num2;
            }
            break;
        case 'reminder':
            calcResult = num1 % num2;
            break;
        case 'exponentiation':
            calcResult = num1 ** num2;
            break;
        default:
            break;
    }

    if ( typeof calcResult === 'bigint' ) {
        return result.value = BigInt (calcResult) + 'n';
    } else if ( isNaN (num1) || isNaN (num2) || !operator.value || isNaN (calcResult) ) {
        return result.value = null;
    }

    result.value = parseFloat (calcResult.toFixed (10));

}

function validation () {

    replaceComma ();

    const regexpNumber = /^-?[0-9]+(\.)?[0-9]*n?$/gim;

    if ( operand1.value.match (regexpNumber) && operand2.value.match (regexpNumber) && operator ) {

        operand1.style.border = "2px solid #777";
        operand2.style.border = "2px solid #777";
        operator.style.border = "2px solid #777";

        if ( !operator.value ) {
            operator.style.border = "2px solid red";
        }

    } else if ( !operand1.value.match (regexpNumber) ) {
        operand1.style.border = "2px solid red";
    } else if ( !operand2.value.match (regexpNumber) ) {
        operand2.style.border = "2px solid red";
    }

}

function replaceComma () {
    if ( operand1.value ) {
        operand1.value = operand1.value.replace (',', '.');
    }
    if ( operand2.value ) {
        operand2.value = operand2.value.replace (',', '.');
    }
}

