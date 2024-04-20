let startInput = document.getElementById('start');
let endInput = document.getElementById('end');
let outputDiv = document.getElementById('output');
let num = [];

function showEvenNumbers() {
  let start = Number(startInput.value);
  let end = Number(endInput.value);

  let i = start;

  i = 2 * Math.round(i / 2);
  while (i <= end){
    num.push(i); 
    i = i + 2;
  }
  document.getElementById("evenNumbers").innerHTML = num;
  
}