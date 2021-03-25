// JavaScript source code
var kérdések;
var aktuális;
var maximum;

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
}

var letoltes = function () {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
    );
    maximum = data.length;
}



var kérdésMegjelenítés = function (kérdés) {
    let hely = document.getElementById("külső");

    let behelyez = document.createElement("div");
    behelyez.innerHTML = kérdések[kérdés].questionText;
    hely.appendChild(behelyez)
}

document.getElementById("vissza").click = function () {
    if (aktuális == 0) {
        aktuális = maximum;
    }
    else {
        aktuális = aktuális - 1;
    }
    kérdésMegjelenítés(aktuális);
   
}

document.getElementById("előre").click = function () {
    if (aktuális == maximum) {
        aktuális = 0;
    }
    else {
        aktuális = aktuális + 1;
    }
    kérdésMegjelenítés(aktuális);
}

document.getElementById("válasz1").click = function () {
    
}


window.onload = () => { letoltes(); aktuális = 0; kérdésMegjelenítés(aktuális);  }