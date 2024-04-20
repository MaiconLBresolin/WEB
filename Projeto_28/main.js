const images = [
    "images/coffee-time.jpg",
    "images/fruits.jpg",
    "images/gremio.jpg"
]

let currentIndex = 0;

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function(){
    currentIndex = Math.floor(Math.random() * (images.length))
    imageElement.src = images[currentIndex]
})