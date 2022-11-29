const images = ["00.png", "03.png", "06.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//랜덤섬
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //body안에 추가해줌