// Get the username and password input elements and login sound element
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginSound = document.getElementById("loginSound");

// Create an array to store audio elements
const audioElements = [];

// Function to handle input events and play the sound
function playLoginSound() {
    const newLoginSound = loginSound.cloneNode(true);

    audioElements.push(newLoginSound);

    newLoginSound.play();

    newLoginSound.addEventListener("ended", () => {
        const index = audioElements.indexOf(newLoginSound);
        if (index !== -1) {
            audioElements.splice(index, 1);
        }
    });
}

// Add input event listeners to both username and password inputs
usernameInput.addEventListener("input", playLoginSound);
passwordInput.addEventListener("input", playLoginSound);
