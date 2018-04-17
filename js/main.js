var button = document.getElementById("button");


button.addEventListener("click", moveList);


function moveList() {
    var listOne = document.querySelector("#text-one li");
    var info = listOne.innerText;

    listOne.parentNode.removeChild(listOne);
    
    var listTwo = document.querySelector("#text-two li");
    var liElement = document.createElement("LI");
    
    liElement.innerText = info;
    listTwo.append(liElement); 
}
    



