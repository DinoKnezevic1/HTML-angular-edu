//console.log("sta ima")

//var a = 1;

//let b = 2;
//const c = 3;

// function mojaFunkcija(){
//     var a = prompt();
//     if(+a>10){
//         return "veci od 10";
//     }
//     return "manji"
// }

// console.log(mojaFunkcija());

var polje = [1.2, '13', 55, 22, 1]; //array ->skup istih tipova vrijednosti
// polje[55] = 1000;
var objekt = {};  //object -> skup razlicitih tipova vrijednosti

// for(let i = 0;i<polje.length;i++){
//     console.log(polje[i ]);
// }

// function ispisiSveDoPredanog(broj){
//     for(let i=0;i<broj;i++){
//         console.log(i)
//     }
// }
// ispisiSveDoPredanog(25);
// var osoba = {
//     ime: "Dino",
//     prezime: "Dinovski",
// };

// var zivotinja = {
//     ime: "Konj",
//     brzina: "brz",
//     meso:"brutalno",
//     cijena:"skup"
// };

// var zivotinje = [
//     {
//         vrsta:"Konji",
//     },
//     {
//         vrsta:"Kornjace",
//     },
//     {
//         vrsta:"Majmuni",
//     },
// ];

// console.log(zivotinje)


// function ispisiImeIPrezime(osoba){
//     console.log(osoba.ime +" "+ osoba.prezime)
// }
// ispisiImeIPrezime(osoba)

// console.log("ime: "+ zivotinja.ime)
// console.log("Brzina: "+ zivotinja.brzina)
// console.log("meso: "+ zivotinja.meso)
// console.log("cijena: "+ zivotinja.cijena)

// function  ispisVremena(){
//     console.log(new Date().toLocaleTimeString())
// }

// //setTimeout(ispisVremena,5000);

// var a = setInterval(ispisVremena,2000);
// var b = setInterval(ispisVremena,2000);

// setTimeout(()=>{
//     clearInterval(a);
//     clearInterval(b);
// },10000)

// console.log(a)
// console.log(b)

// var osoba = {
//     ime: "Pero",
//     prezime:"Peric",
//     godine:"22",
//     ispisiIme: function (){
//         console.log(this.ime);
//     },
//     ispisOsobina: function(){
//         console.log(this.ime + " "+this.godine + " "+this.prezime);
//     },
// };

// console.log(osoba)
// osoba.ispisiIme();
// osoba.ispisOsobina();

var pravokutnik = document.getElementsByClassName('pravokutnik');
console.log(pravokutnik);

for (var i = 0; i < pravokutnik.length; i++) {
    console.log(pravokutnik[i].innerHTML);
    pravokutnik[i].style.backgroundColor = prompt();    
}

