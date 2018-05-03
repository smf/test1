var button = document.getElementById("button");
var buttonTwo = document.getElementById("buttonTwo");


button.addEventListener("click", moveListOne);
buttonTwo.addEventListener("click", moveListTwo);


function moveListOne() {
    var li = document.querySelector("#text-one li");
    var listTwo = document.querySelector("#text-two");
    if (li==null) {
      error();
      return;
    }
    move(li, listTwo);
}


function moveListTwo() {
    var li = document.querySelector("#text-two li");
    var listTwo = document.querySelector("#text-one");
    if (li==null) {
      error();
      return;
    }
    move(li, listTwo);
}

function move(from, to) {
    var info = from.innerText;

    from.parentNode.removeChild(from);

    var liElement = document.createElement("LI");

    liElement.innerText = info;
    to.appendChild(liElement);
}

function error () {
    alert ("No tienes elementos que mover!");
}
