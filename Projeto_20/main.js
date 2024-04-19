let random = Math.floor(Math.random() * 100)+1;
let guessCounter = 0;
let guessLimit = 10;
console.log(random)

function checkGuess(){
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    guessCounter++;
    //guessLimit = guessLimit - guessCounter;
    console.log(guessCounter)
    if (guess == random){
        message.innerHTML = `Congratulations, you got it right in ${guessCounter} tries`
    } else if (guess > random){
        message.innerHTML = `Your guess is too high, try again`//, you have ${guesslimit} tries`
    } else if (guess < random){
        message.innerHTML = `Your guess is too low, try again`//, you have ${guesslimit} tries`
    }
}