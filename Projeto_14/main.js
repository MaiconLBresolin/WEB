let cor = ' ';
let corList = [];
let corCounter = 0;
for (var i = 0; i<3; i++){
    corCounter = corCounter+1;
    cor = prompt(`Please enter your color number ${corCounter}: `)
    corList.push(cor)
}

alert(`Your color list is composed by ${corList[0]}, ${corList[1]} e ${corList[2]}`) 