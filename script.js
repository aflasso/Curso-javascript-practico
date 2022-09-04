const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btnRojo = document.querySelector("#btnColorRojo");
const btnBlanco = document.querySelector("#btnColorBlanco")
const presult = document.querySelector("#result");
const body = document.querySelector("body");
const label = document.querySelector("label");

btnRojo.addEventListener("click", cambiarColorRojo)
btnBlanco.addEventListener("click", cambiarColorBlanco)

function cambiarColorRojo(event) {
   // body.getAttribute("style");
   body.style.backgroundColor = "red"
}

function cambiarColorBlanco(event) {
   //body.getAttribute("style")
   body.style.backgroundColor = "white"
}