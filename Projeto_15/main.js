let fruitList = ['Banana','Avocado','Mango','Apple','Orange','Papaya','Grape','Blueberry','Cherry',]
let numberList = document.getElementById("numberList")

for(i=0; i<=(fruitList.length-1); i++){
    let listItem = document.createElement('li')
    listItem.textContent = `This is a ${fruitList[i]}`
    numberList.appendChild(listItem);
}