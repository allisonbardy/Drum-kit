function playSound(event) {

    // variable with sound byte assoicated with key
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    // variable with key pressed so we can animate it 
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!sound) return; // stops function for running

    key.classList.add("playing"); // adds animation to the key being pressed
    sound.currentTime = 0; // rewinds it so if key is pressed again the associated audio starts right away, doesn't wait for the first one to finish
    sound.play(); //plays audio sound
};

function removeTransition(event) {

    if (event.propertyName !== "transform")
        return; // if not transform then end
    this.classList.remove("playing"); // takes playing class off
};


// variable stores all the keys on the page
const keys = document.querySelectorAll(".key");
// for each key, event listener listening for transition end which will then run fucntion to remove transition
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// add event listener for keydown to play sound
window.addEventListener("keydown", playSound);
