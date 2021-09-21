let images = [
    "dice 1.svg",
    "dice 2.svg",
    "dice 3.svg",
    "dice 4.svg",
    "dice 5.svg",
    "dice 6.svg",
];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    setTimeout(function() {
    dice.forEach(function(die) {
        die.classList.remove("shake");
    });
    let dieOnevalue = Math.floor(Math.random()*6);
    let dieTwovalue = Math.floor(Math.random()*6);
    
    document.querySelector("#die-1").setAttribute("src",images[dieOnevalue]);
    document.querySelector("#die-2").setAttribute("src",images[dieTwovalue]);
    document.querySelector("#total").innerHTML = "You rolled  " + ((dieOnevalue +1 + dieTwovalue +1)) + "!";
        
    },
    1000
    );
}