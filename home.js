
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


const textArray = ["Web Developer", "Python Programmer", " AI / ML Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 140; 
const autoTextElement = document.getElementById("auto-text");

function updateText() {
    const currentText = textArray[textIndex];

    if (!isDeleting) {
        // Typing effect
        autoTextElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(() => {}, 3000); 
        }
    } else {
        
        autoTextElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; 
        }
    }
}


setInterval(updateText, speed);
