var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lilist = document.getElementByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


function addListAfterKeypress(evt) {
    if (inputLength() > 0 && evt.keyCode === 13) {
        createListElement();
    }
}



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < lilist.length; i++) {
    lilist[i].addEventListener("click", addClassAfterClick(){
        lilist[i].classList.toggle("done");
    });
}