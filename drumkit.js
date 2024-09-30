

let len = document.querySelectorAll(".drum").length;

for (let i = 0; i < len; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.classList[0]; // Get the class name of the button (e.g., "W", "A", "S", etc.)

        playSound(buttonInnerHTML);

        //key 

       
    }
    )
}

document.addEventListener("keypress", function (event) {
    playSound(event.key);

});



function playSound(key) {
    switch (key) {
        case "W":
            var audio = new Audio('sounds/tom-1.mp3');
            // tom1.play();
            break;
        case "A":
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case "S":
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case "D":
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case "J":
            var audio = new Audio('sounds/snare.mp3');
            break;
        case "K":
            var audio = new Audio('sounds/crash.mp3');
            break;
        case "L":
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        case "M":
            var audio = new Audio('sounds/cheek-dum-dum.mp3');
            break;
        default:
            console.log(key);
    }

    if (audio) {
        audio.play();
    }
}


// animation
// function buttonAnimation(value) {
//     var animation = document.querySelector("." + value);
//     animation.classList.add("pressed");
//     setTimeout(function () {
//         animation.classList.remove("pressed");
//     }, 100);

// }
