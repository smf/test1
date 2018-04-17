var button = document.getElementById("button");


button.addEventListener("click", moveListOne);


function moveListOne() {
    var li = document.querySelector("#text-one li");
    var listTwo = document.querySelector("#text-two");

    move(li, listTwo);
}

function move(from, to) {
    var info = from.innerText;

    from.parentNode.removeChild(from);
    
    var liElement = document.createElement("LI");

    liElement.innerText = info;
    to.appendChild(liElement); 
}



