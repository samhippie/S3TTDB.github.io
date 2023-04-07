function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    const list = document.getElementById("allCards");
    if(ev.currentTarget.childElementCount == 1 && ev.target.id != "allCards"){
        alert("That slot is already taken!");
        return;
    }
    if(ev.currentTarget.id == "allCards"){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        list.insertBefore(document.getElementById(data),list.children[0] );
        return;
    }
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function generateCards(){
    for(var i = 1; i <= 162; i++){

        generateCard(i);

    }
}

function generateCard(num){
    var card = document.createElement("img");
    var srcGet = "../resources/images/cards/"+num+".png";
    card.setAttribute("src", srcGet);
    card.setAttribute("id", "card"+num);
    card.setAttribute("class", "card");
    card.setAttribute("draggable", "true");
    card.setAttribute("ondragstart", "drag(event)");
    document.getElementById("allCards").appendChild(card);
}

function clearFunct() {
    if (dName.value == "Enter the name of your deck...") {
       dName.value = "";
    }
 }