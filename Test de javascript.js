// pregunta 2

/*
nombre: Andres tipo "string"
apellido: lasso tipo "string"
nombre de usuario en platzi: aflasso tipo "string"
edad: 18 tipo "numero"
correo electronico: andresfelipe.lasso@gmail.com tipo "string"
mayor de edad: si tipo "boleano(verdad)"
dinero ahorrado: 50000 tipo "numero"
deudas: 10000 tipo "numero"


*/

//3
var nombre = "Andres"
var apellido = "lasso"
var usuario = "aflasso"
var edad = 18
var correo = "andresfelipe.lasso@gmail.com"
var mayor = true
var ahorrado = 50000
var deudas = 10000

//4

var nombre_completo = nombre + " " + apellido
console.log(nombre_completo)

var dinero_real = ahorrado - deudas
console.log(dinero_real)

//Funciones

//1

/*
-que es una funcion:
una funcion es una varieble que hace una tarea especifica

-cuando me sirve hacer una funcion en mi codigo
cuando quiero realizar una tarea varias veces asi no tengo la necesidad de copiar el mismo codigo repetidamente

-diferencia entre parametro y argumento
el parametro son las variables que necesito para una funcion y los argumentos son los valores que se le dan a esas variables

*/

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// en funcion

function miNombreEs(name, lastname, nickname){
    var completeName = name + " " + lastname;
    console.log("Mi nombre es" + completeName + ", pero prefiero que me digas" + nickname + ".")
}

//condicionales

/*

-que es un condicional
un condicional es un operador que verifica si algo es verdadero o falso, si es verdadero realizara una tarea sino no hara nada

-que condicionales existen

existe el if que es para validar una condicion, el else que es lo que se haria si una condicion previa no se cumple
y el switch que verifica una cantidad de casos

*/

const tipoDeSuscripcio = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//2. solucion con if, else if, else

var tipoDeSuscripcion = "Basic"

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
}
else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion === "EspertPlus") {
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de PlatZI por un año")
}

//3. solución solo if

var tipoDeSuscripcion = "Basic"

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
}
if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion === "EspertPlus") {
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de PlatZI por un año")
}

//Ciclos

// 1.

// Un ciclo es una parte de codigo que se repite una y otra vez si se cumple una condición.

// Existe el ciclo while, for y for of(arrays)

// Un ciclo infinito es una accion que no tiene fin, quedandose atascada y dañando el programa.

// Si

// 2. Usando while

var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

var i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

var respuesta = 0;

while (respuesta != 4) {
    respuesta = prompt("Cuanto es 2 + 2")
    if (respuesta == 4) {
    console.log("Muy bien!")
    }
    else {
        console.log("Muy mal!")
    }
}

//Listas

// 1. 

// Un arrey es una variable tipo objeto que puede almacenar una lista de variables

// Un objeto es una variable tipo objeto que puede almacenar un objeto y subdividirlo
// en sus categorias o caracteristicas principales

// Los arrays son para listas simples y los objetos son para productos que necesitan saber sus caracteristicas.

// Creo que si

// 2. Función para imprimir el primer elemento de un arry dado.

var frutas = ["manzana", "pera", "piña"]

function imprimir(arrey) {
    console.log(arrey[0])
}

// 3. Imprimir todos los elementos del array uno por uno

function imprimir(arrey) {
    for (fruta of arrey) {
        console.log(fruta)
    }
}


// 4. imprimir todos los elementos de un objeto uno por uno

let obj = {
    nombre: "Andres",
    edad: 18,
    estado: "soltero",
};

const arr = Object.values(obj);

function imprimirObjetos (obj) {
    const arr = Object.values(obj);

    for (elemento of arr) {
        console.log(elemento);
    }
}
