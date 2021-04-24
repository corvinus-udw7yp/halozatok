// JavaScript source code
var kérdések;
var aktuális;
var maximum;
//var nincsképkép;

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

fetch('/questions/4')
    .then(response => response.json())
    .then(data => console.log(data)
);

fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
    );

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    if (document.getElementById("kép").src.exists()) {
        
    }
    else {
        //document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + nincsképkép;
        document.getElementById("kép").remove();
    }
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}

window.onload = () => { letoltes(); aktuális = 0; kérdésMegjelenítés(aktuális);  }