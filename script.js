// TypeAnimation
const typeText = document.getElementById('typing-text')
const typeAnimation = [
    "WEB DESIGN",
    "PROGRAMMER",
    "WEB DEV"
];

let textIndex = 0;
let startIndex = 0;

function typeContainer() {
    if (startIndex < typeAnimation[textIndex].length) {
        typeContainer.g += typeAnimation[textIndex].charAt(startIndex);
        startIndex++
        setTimeout(typeText, 100);
    }
    else {
        setTimeout(eraseText, 200);
    }
}

function eraseText() {
    if (typeContainer.innerHTML.length > 0) {
        typeContainer.innerHTML = Caret.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else {
        textIndex = (textIndex + 1) % typeAnimation.length;
        startIndex = 0;
        setTimeout(typeText, 500);
  }
}
