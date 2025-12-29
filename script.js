let selectedSon = 1;
const title = document.getElementById("title");
const btn = document.getElementById("btn");
const audio = new Audio('./assets/click.wav');

// Store faces in an array (0-indexed)
const faces = ["(0_0)", "(0u0)", "(-_-)", "(^_^)", "(UwU)"];

function pindahAnak() {
  // Play sound
  audio.currentTime = 0; 
  audio.play();

  // Increment
  selectedSon++;

  // Reset to 1 if we exceed the number of faces
  if (selectedSon > faces.length) {
    selectedSon = 1;
  }

  // Update DOM (we use selectedSon - 1 because arrays start at 0)
  btn.innerHTML = selectedSon;
  title.innerHTML = faces[selectedSon - 1];
}
