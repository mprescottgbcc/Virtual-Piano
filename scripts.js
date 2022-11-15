let pianoKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];

window.onload = () => {
    document.onkeydown = (event) => {
        let letter = event.key.toUpperCase();
        if (pianoKeys.includes(letter)) {
            let sound = new Audio(`audio/${letter}.mp3`);
            sound.play().then(() => console.log(letter));
        } else {
            console.log("I don't recognize that key!");
        }
    }
    document.getElementById("U").style.left = "16.8em";
    document.getElementById("Y").style.left = "14.4em";
    document.getElementById("T").style.left = "12em";
    document.getElementById("E").style.left = "5.6em";
    document.getElementById("W").style.left = "3.2em";
};
