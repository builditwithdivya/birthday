// ----- Slideshow -----
const photos = ['img1.jpg', 'img2.jpg', 'img3.jpg','img4.jpg','img5.jpg']; // Add more photo names
let index = 0;
const photoElement = document.getElementById("photo");

setInterval(() => {
  index = (index + 1) % photos.length;
  photoElement.src = photos[index];
}, 3000);

// ----- Typing Effect -----
const message = `To the one who brightens every space she walks into
Today is your canvas: your smile, your light, your journey.
                       🎉 Happy Birthday!
I’m grateful just to know you… and even more grateful to call you a friend.
Each laugh, every quirk, every shared moment — you're a rare kind of magic.
May this year bring you closer to your dreams, fill your days with calm, and wrap your nights in warmth.
🎶 Hear that guitar? That’s me, strumming what words can't say.
                                               — Yours, always respectfully,
                                               A Friend Who Cares 💫`;

let i = 0;
const speed = 30;
const typedText = document.getElementById("typed-text");

function typeWriter() {
  if (i < message.length) {
    typedText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
