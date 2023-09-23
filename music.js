// Get the username input element and login sound element
const usernameInput = document.getElementById("username");
const loginSound = document.getElementById("loginSound");

// Add an input event listener to the username input
usernameInput.addEventListener("input", () => {
    // Play the login sound
    loginSound.play();
});
