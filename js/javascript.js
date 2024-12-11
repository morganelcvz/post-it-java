document.getElementById("confirmbutton").addEventListener("click", function () {
    let titre = document.getElementById("titrePost").value
    let post = document.getElementById("textPost").value
    if (titre != "" && post != "") {
        document.getElementById("posts").innerHTML += `
        <div class="mypost">
            <div id="postName">${titre}</div>
            <div id="postTexte">${post}</div>
        </div>
    `
        document.getElementById("titrePost").value = ""
        document.getElementById("textPost").value = ""
    }
})

document.getElementById("clearbutton").addEventListener("click", function () {
    let texte = document.getElementById("text").value = ""
    document.getElementById("display-toto").innerText = ""
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