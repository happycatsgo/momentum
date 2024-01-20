const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImage}`;

document.body.appendChild(bgImage);
