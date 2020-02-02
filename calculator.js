const calcField = document.querySelector('#calc-input');
const precisionField = document.querySelector('#calc-precision');
const submitButton = document.querySelector('.calc');
const resetButton = document.querySelector('.reset');

function validateCalc(event) {
    var regex = new RegExp('^[0-9-%*\(\)\+\.\/]');
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validatePrecision(event) {
    var regex = new RegExp('^[0-9]');
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

resetButton.addEventListener('click', (evt) => {
    evt.preventDefault;
    calcField.value = '';
    precisionField.value = '';
})

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault;
    calculate();
})

function calculate() {
    let calculatedValue = eval(calcField.value);
    let precisionValue = precisionField.value;
    if (!isNaN(calculatedValue)) {
        if(!isNaN(precisionValue) && precisionValue !== '') {
            calcField.value = calculatedValue.toFixed(precisionValue);
        } else {
            calcField.value = calculatedValue;
        }
    }
}

$('#calc-input').keypress((e)=> {
    if (e.keyCode === 13) {
        $('.calc').click();
    }
})

$('#calc-precision').keypress((e) => {
    if (e.keyCode === 13) {
        $('.calc').click();
    }
})

$('.calc-form').submit((e) => {
    e.preventDefault();
})