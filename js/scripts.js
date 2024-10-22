const texts = [
    "Frontend Developer",
    "Web Developer",
    "IT Enthusiastic",
    "Django Developer",
    "SAP Support Consultant"
    
];
let index = 0;
let charIndex = 0;
const speed = 100; // Typing speed in milliseconds
const textElement = document.getElementById("text");

function type() {
    if (charIndex < texts[index].length) {
        textElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
    } else {
        setTimeout(deleteText, speed + 1000); // Pause before deleting
    }
}

function deleteText() {
    if (charIndex > 0) {
        textElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, speed);
    } else {
        index = (index + 1) % texts.length; // Cycle through texts
        setTimeout(type, speed + 500); // Pause before starting to type again
    }
}

// Start typing
type();
