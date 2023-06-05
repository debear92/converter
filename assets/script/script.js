document.addEventListener('DOMContentLoaded', function() {
    // Declaration
    const submitButton = document.querySelector('#convert');
  
    // Event listener 
    submitButton.addEventListener('click', convertTemperature);
  
    // Function
    function convertTemperature(e) {
      e.preventDefault();
  
      const convertFrom = parseFloat(document.querySelector('#insert-number').value);
      const fromUnit = document.querySelector('#degrees-from').value;
      const toUnit = document.querySelector('#degrees-to').value;
  
      let result;
  
      // Conversion from Celsius 
      if (fromUnit === 'Celsius') {
        if (toUnit === 'Fahrenheit') {
          result = (convertFrom * 9/5) + 32;
        } else if (toUnit === 'Kelvin') {
          result = convertFrom + 273.15;
        } else {
          result = convertFrom;
        } 
      }
      // Conversion from Fahrenheit
      else if (fromUnit === 'Fahrenheit') {
        if (toUnit === 'Celsius') {
          result = (convertFrom - 32) * 5/9;
        } else if (toUnit === 'Kelvin') {
          result = (convertFrom - 32) * 5/9 + 273.15;
        } else {
          result = convertFrom;
        }
      }
      // Conversion from Kelvin
      else if (fromUnit === 'Kelvin') {
        if (toUnit === 'Celsius') {
          result = convertFrom - 273.15;
        } else if (toUnit === 'Fahrenheit') {
          result = (convertFrom - 273.15) * 9/5 + 32;
        } else {
          result = convertFrom;
        } 
      }
  
      document.getElementById('result').value = result;
    }
  });