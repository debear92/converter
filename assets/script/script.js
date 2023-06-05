//declaration
const convertFrom = parseFloat(document.querySelector('#insert-number').value);
const fromUnit = document.querySelector('#degrees-from');
const toUnit = document.querySelector('#degrees-to');
const submitButton = document.querySelector('#convert')

//event listner 
submitButton.addEventListener('click', convertTemperature)

//functions
function convertTemperature(){
    let result;
    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            result = (convertFrom * 9/5) + 32;
        }
    }
}