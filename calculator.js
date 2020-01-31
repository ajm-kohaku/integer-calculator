const calcField = document.querySelector('#calc-input');
const precisionField = document.querySelector('#calc-precision');
const submitButton = document.querySelector('.calc');
const resetButton = document.querySelector('.reset');
const formBody = document.querySelector('.calc-form');

function validateCalc(event) {
    var regex = new RegExp("^[0-9-%*\(\)\+\.\/]");
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validatePrecision(event) {
    var regex = new RegExp("^[0-4]");
    var key = String.fromCharCode(event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

resetButton.addEventListener("click", (evt) => {
    evt.preventDefault;
    calcField.value = "";
    precisionField.value = "";
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault;
    calcField.value = eval(calcField.value);
    //todo: update to include precision in the calc
    //todo: add validation for invalid math
})

$(".calc-form").submit((e) => {
    e.preventDefault();
});