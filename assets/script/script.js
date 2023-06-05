//declaration
const convertFrom = parseFloat(document.querySelector('#insert-number').innerText);
const fromUnit = document.querySelector('#degrees-from');
const toUnit = document.querySelector('#degrees-to');
const submitButton = document.querySelector('#convert')

//event listner 
submitButton.addEventListener('click', convertTemperature)

//functions
function convertTemperature(e){
    e.preventDefault();

    let result;
    //Conversion from Celsius 
    if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
            result = (convertFrom * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
            result = convertFrom + 273.15;
        } else {
            result = convertFrom;
        } 
    //Conversion from Fahrenheit
        if (fromUnit === 'Fahrenheit') {
            if (toUnit === 'Celsius') {
            result = (convertFrom - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
            result = (convertFrom - 32) * 5/9 + 273.15;
        } else {
            result = convertFrom;
        }
    }
    //Conversion from Kelvin
        if (fromUnit === 'Kelvin') {
            if (toUnit === 'Celsius') {
                result = convertFrom - 273.15;
            } else if (toUnit === 'Fahrenheit') {
                result = (convertFrom - 273.15) * 9/5 + 32;
            } else {
                result = convertFrom;
            } 
        }
    }   
    document.getElementById('result').innerText = result;
}