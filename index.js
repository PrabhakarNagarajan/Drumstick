const Akey = document.getElementById("a");
const Skey = document.getElementById("s");
const Dkey = document.getElementById("d");
const Fkey = document.getElementById("f");
const Gkey = document.getElementById("g");
const Hkey = document.getElementById("h");
const Jkey = document.getElementById("j");
const Kkey = document.getElementById("k");
const Lkey = document.getElementById("l");

const soundcon = document.getElementsByClassName("drum-container");

const aKeyAudio = new Audio("./sounds/boom.wav");
const sKeyAudio = new Audio("./sounds/clap.wav");
const dKeyAudio = new Audio("./sounds/hihat.wav");
const fKeyAudio = new Audio("./sounds/kick.wav");
const gKeyAudio = new Audio("./sounds/ride.wav");
const hKeyAudio = new Audio("./sounds/openhat.wav");
const jKeyAudio = new Audio("./sounds/tom.wav");
const kKeyAudio = new Audio("./sounds/snare.wav");
const lKeyAudio = new Audio("./sounds/tink.wav");

document.addEventListener("keypress", (e) => {
  const keyEntered = e.key;
  e.preventDefault();
  soundmake(keyEntered);
});

function soundmake(key) {
  if (key === "a") {
    aKeyAudio.play();
  } else if (key === "s") {
    sKeyAudio.play();
  } else if (key === "d") {
    dKeyAudio.play();
  } else if (key === "f") {
    fKeyAudio.play();
  } else if (key === "g") {
    gKeyAudio.play();
  } else if (key === "h") {
    hKeyAudio.play();
  } else if (key === "j") {
    jKeyAudio.play();
  } else if (key === "k") {
    kKeyAudio.play();
  } else if (key === "l") {
    lKeyAudio.play();
  } else {
    console.log("You pressed the Wrong Key");
  }
}

// switch (soundmake) {
//   case 0:
//     Akey = "a";
//     aKeyAudio.play();
//     break;
// }

// Akey.addEventListener("click", () => {
//   soundmake(Akey.id);
// });
// Skey.addEventListener("click", () => {
//   soundmake(Skey.id);
// });
// Dkey.addEventListener("click", () => {
//   soundmake(Dkey.id);
// });
// Fkey.addEventListener("click", () => {
//   soundmake(Fkey.id);
// });
// Gkey.addEventListener("click", () => {
//   soundmake(Gkey.id);
// });
// Hkey.addEventListener("click", () => {
//   soundmake(Hkey.id);
// });
// Jkey.addEventListener("click", () => {
//   soundmake(Jkey.id);
// });
// Kkey.addEventListener("click", () => {
//   soundmake(Kkey.id);
// });
// Lkey.addEventListener("click", () => {
//   soundmake(Lkey.id);
// })

for (let i = 0; i < 9; i++) {
  soundcon[i].addEventListener("click", (e) => {
    const button = e.target;
    const key = button.id;
    soundmake(key);
  });
}
