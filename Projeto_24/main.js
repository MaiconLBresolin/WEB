let startInput = document.getElementById('start');
let endInput = document.getElementById('end');
let num = [];

function showOddNumbers() {
  let start = Number(startInput.value);
  let end = Number(endInput.value);

  let i = start;
  if (i % 2 !== 0){
    do{
        num.push(i); 
        i = i + 2;
    } while (i <= end)
  }else{
    i++
  }
  document.getElementById("oddNumbers").innerHTML = num;
}