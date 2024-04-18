let value = parseFloat(prompt("Please enter how expensive was your dinner: "));
let tip = parseInt(prompt("Please enter how much % you want to tip: "));

let totalPrice = parseFloat(value * ((tip * 0.01) + 1));

alert(`Your total expenses would be ${totalPrice.toFixed(2)}`);