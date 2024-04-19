let colorList = ['blue','grey','red','orange','brown','green','turquoise']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function changeColor(){
    bgColor = colorList[getRandomInt(colorList.length-1)];
    document.body.style.backgroundColor = bgColor;
}
