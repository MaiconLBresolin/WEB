let celsius = parseFloat(prompt("Please enter the temperature you want to convert to fahrenheit: "));
let fahrenheit = (celsius * 1.8) + 32;

alert(`A temperatura ${celsius} °C represente ${fahrenheit.toFixed(2)} °F`);