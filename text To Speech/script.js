// const playButton = document.getElementById("start");
// const pauseButton = document.getElementById("pause");
// const stopButton = document.getElementById("stop");
// const textInput = document.getElementById("text");
// const speedInput = document.getElementById("speed");

// playButton.addEventListener("click", () => {
//   playText(textInput.value);
// });
// function playText(text) {
//   if (speechSynthesis.paused && speechSynthesis.speaking) {
//     return speechSynthesis.resume();
//   }
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.rate = parseFloat(speedInput.value) || 1;
//   utterance.addEventListener("end", () => {
//     textInput.disabled = false;
//   });
//   textInput.disabled = true;
//   speechSynthesis.speak(utterance);

//   function pauseText() {
//     if (speechSynthesis.speaking) speechSynthesis.pause();
//   }
//   speechSynthesis.speak(utterance);
//   function stopText() {
//     speechSynthesis.resume();
//     speechSynthesis.cancel();
//   }
// }

const playButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
let currentCharacter;

playButton.addEventListener("click", () => {
  playText(textInput.value);
});
debugger;
pauseButton.addEventListener("click", pauseText);
stopButton.addEventListener("click", stopText);
speedInput.addEventListener("input", () => {
  stopText();
  playText(utterance.text.substring(currentCharacter));
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", () => {
  textInput.disabled = false;
});
utterance.addEventListener("boundary", (e) => {
  currentCharacter = e.charIndex;
});

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = speedInput.value || 1;
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
