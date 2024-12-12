document.getElementById("confirmbutton").addEventListener("click", function () {
    let titre = document.getElementById("titrePost").value
    let post = document.getElementById("textPost").value
    if (titre != "" && post != "") {
        document.getElementById("posts").innerHTML += `
        <div class="mypost">
        <button id="closePost" onclick="supprimer(this)">x</button>
            <div id="postName">${titre}</div>
            <div id="postTexte">${post}</div>
        </div>
    `
        document.getElementById("titrePost").value = ""
        document.getElementById("textPost").value = ""
    }
   
})

function supprimer(element) {
    element.parentElement.remove()
}

// function supprimer () {
//     document.getElementById("posts").remove(".mypost");
// }


// Annuler la saisie 

document.getElementById("clearbutton").addEventListener("click", function () {
    let texte = document.getElementById("titrePost").value = ""
    let post = document.getElementById("textPost").value = ""
})

// Fermer la fenêtre 

document.getElementById("exit").addEventListener("click", function () {
    document.querySelector(".desk").style.visibility = 'hidden'
})

document.getElementById("blocnote").addEventListener("click", function () {
    document.querySelector(".desk").style.visibility = 'visible'
})

// let text = ["text1", "tex2", "text3", "text4"];
// text.forEach(function(el) {
//     var div = document.createElement("div");
//     div.className = "mypost";
//     div.innerHTML = el;
//     document.body.appendChild(div);
// });