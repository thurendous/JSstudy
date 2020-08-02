var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

css.textContent = "linear-gradient(to right, red, yellow)" + ";";

console.log("This is some test for the programme")
console.log(css);
console.log(color1);
console.log(color2);
randomColor(getRandomColor(), getRandomColor());

function randomColor(c1, c2) {
    body.style.background =
        "linear-gradient(to right, "
        + c1
        + ","
        + c2
        + ")";
    css.textContent = body.style.background + ";";
}

function changeColor() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ","
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

// We do not use "changeColor()" cuz we do not wnt the function to run when it appears. we want it ti be listened.
color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}