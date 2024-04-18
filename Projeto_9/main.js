let age = parseInt(prompt("Please enter your age: "));
let titulo = prompt("Do you have your voter registration card: y or n");

if (18 <= age && titulo==="y"){
    alert("You can vote")
} else if (18 <= age && titulo==="n"){
    alert("You need the voter registration card to be able to vote")
} else if (18 > age){
    alert("You are not old enough to vote")
}