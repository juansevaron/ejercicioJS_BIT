// La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
// a. Si el usuario tiene 10 años o menos, recibe un jugo.
// b. Si el usuario es mayor de 18 años, recibe una cerveza.
// c. Si el usuario es mujer, además recibe una porción de pizza Hawaiana.
// d. Si el usuario es hombre, además recibe una porción de pizza de tres
// carnes.
// e. Si el usuario no cumple con ninguna condición, se le debe informar que no




let edad =  prompt ("ingrese edad") 
let genero = prompt ("ingrese M/F").toLowerCase();

if (edad <= 10 && genero === "M"){
    alert ("recibe jugo y pizza de 3 carnes")
} else if (edad > 18 && genero === "M") { 
    alert ("recibe cerveza y pizza de 3 carnes")
} else if (edad <=10 && genero === "F") {
    alert ("recibe un jugo y una pizza hawaiana")
} else if (edad > 18 && genero === "F") {
    alert ("recibe una cerveza y una pizza hawaiana")
} else ("no gana nada")
    alert ("no ganda nada")