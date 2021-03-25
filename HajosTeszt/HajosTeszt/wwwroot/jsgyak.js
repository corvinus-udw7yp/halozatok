/*function f1(nev) { console.log(`Hello ${nev}!`); }
f1("Joe")

var f2 = function (nev) { console.log(`Hello ${nev}!`);}
f2("Jack")
var f3 = (n) => { console.log(`Hello ${nev}!`); }
var f3 = (n) =>  console.log(`Hello ${nev}!`); 
f3("Jane")
*/
/*
for (i = 0; i < 10; i++) { console.log(i + 1) }
for (let i = 0; i < 10; i++) { console.log(i + 1) }
for (var i = 0; i < 10; i++) { console.log(i+1)}
*/

window.onload = () => {
    console.log("betöltődött")


/*for (var sor = 0; sor < 10; sor++) {
    //új div létrehozása az új sornak
    //új div osztálylistájához add hozzá a "sor"-t
    //új div-et add hozzá a "pascal" gyermekeihez
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        //új div létrehozása az új elemnek
        //új elem div osztálylistájához add hozzá az "elem"-et
        //teszteléshet .innerHTML = `${sor}:${oszlop}`
        //új elem div-et vedd fel a sor elemei közé
    }
}*/
var faktorialis = function (n) {
    let eredmeny = 1;
    for (let i = 2; i <= n ; i++) {
        eredmeny = eredmeny * 1;
    }
    return eredmeny;
}

let hova = document.getElementById("ide")

for (var s = 0; s < 10; s++) {

    let sor = document.createElement("div");
    hova.appendChild(sor);
    sor.classList.add(".sor");


    for (var o = 0; o < 10; o++) {
        let szam = document.createElement("div");
        hova.appendChild(szam);
        szam.innerText = (s + 1) * (o + 1);
        szam.classList.add(".doboz");
        szam.style.color = "fuchsia";
        szam.style.color = `rgb(${255 / 10 * s},0,${255 / 10 * s})`

    }

   }

}