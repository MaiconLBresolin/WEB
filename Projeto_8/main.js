let grade = parseInt(prompt("Please enter your grade: "));
let gradeLetter = " ";

if (grade > 100){
    alert("Invalid grade, grades can't be higher than 100")
} else if (grade >= 90 ) {
    alert("A")
} else if (grade >= 80) {
    alert("B")
} else if (grade >= 70) {
    alert("C")
} else if (grade >= 60) {
    alert("D")
} else if (59 > grade) {
    alert("F")
}