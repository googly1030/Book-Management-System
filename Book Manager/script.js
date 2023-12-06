var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")

var booktitle=document.getElementById("Book_Title")
var bookauthor=document.getElementById("Book_Author")
var textarea=document.getElementById("area")
var continer=document.querySelector(".container")
var addbtn=document.getElementById("addbtn")

function show() {
    $(".overlay, .popup").fadeIn("slow");
}

function close1(event) {
    event.preventDefault();
    $(".overlay, .popup").fadeOut("slow");
}

function delete1(event) {
    var targetDiv = $(event.target).closest("div");
    targetDiv.fadeOut("slow", function() {
        targetDiv.remove();
    });
}


var addbtn = document.getElementById("addbtn"); 

addbtn.addEventListener("click", function(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-continer");
    div.innerHTML = `
    <h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${textarea.value}</p>
    <button onclick="delete1(event)">Delete</button>`;
    continer.appendChild(div);
    overlay.style.display="none"
    popup.style.display="none"
    
});




