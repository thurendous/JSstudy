var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(css);
console.log(color1);
console.log(color2);

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
// color1.addEventListener("input", changeColor);

// color2.addEventListener("input", changeColor);

