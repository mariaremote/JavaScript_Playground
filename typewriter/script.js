const techStack = ['Python', 'Flask', 'Javascript', 'HTML', 'CSS'];
const techStackSpan = document.getElementById('typewriter');
const pauseBetweenWords = 1500;
const typingInterval = 150;
let indexTechStack = 0;
let indexWord = 0;

function typeTechStack() {
    if (indexWord < techStack[indexTechStack].length) {
        // Add next character
        techStackSpan.textContent += techStack[indexTechStack].charAt(indexWord);
        indexWord++;
        setTimeout(typeTechStack, typingInterval);
    } else {
        // Pause after typing a word
        setTimeout(() => {
            techStackSpan.textContent = ''; // Clear the span
            indexWord = 0; // Reset character index
            indexTechStack = (indexTechStack + 1) % techStack.length; // when last index modulo array length is zero = reset index
            typeTechStack(); // Start typing the next word
        }, pauseBetweenWords);
    }
}
document.addEventListener('DOMContentLoaded', typeTechStack);

// my original cripply code
// function updateTechStack() {
//     techStackSpan.innerText = techStack[indexTechStack];
//     if (indexTechStack < techStack.length - 1) {
//         indexTechStack++;
//     } else {
//         indexTechStack = 0;
//     }
// }
// document.addEventListener('DOMContentLoaded', setInterval(updateTechStack, pauseBetweenWords));
