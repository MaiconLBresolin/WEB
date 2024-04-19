let cor = ' ';
let corList = [];
let corCounter = 0;
for (var i = 0; i<3; i++){
    corCounter = corCounter+1;
    cor = prompt(`Digite sua cor numero ${corCounter}: `)
    corList.push(cor)
}

alert(`Sua lista de cores é ${corList[0]}, ${corList[1]} e ${corList[2]}`) 