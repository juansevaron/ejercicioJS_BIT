let letras = "juan"
let num2 = 31
let boolean = true 
let object = {
    nombre: "david",
    apellido: "perez",
    edad: "29"
}
let undefi



//console.log sirve para ver en la consola de la pagina web el resolutado 
//typeof es para saber que tipo de dato es (string, number, object, boolean, undefined)
console.log(typeof streing);
console.log(typeof num2);
console.log(typeof object);
console.log(typeof boolean);
console.log(typeof undefi);

//opearaciones aritmeticas 
let suma = 4 + 7
console.log(suma);

let resta = 10 - 11
console.log(resta);

let multiplicacion = 3 * 4 
console.log(multiplicacion);

let division = 144 / 12
console.log(division);


//se pueden sumar mismos tipos de datos 
let names = "juan " 
let apellido = "varon"
console.log(names + apellido);


//metodos de string 
console.log(apellido.length); //longitud del string o tipo de dato se mide con .lenght
console.log(names.split("")); //.split es para saber cuanto tiene 


//metodos de arrays y arrays
let array =[1, 2, true, "juan",  [1, 2, 3]]
console.log(array);
array.push("push") //.push añade un elemnto al final
array.unshift("unshift") //.unshift añade un elemnto al princio
array.shift("") //elimina un elemento un elemento del comienzo 
array.pop("") //elimina un elemnto del final
array.splice("") //elimina un elemento escogido tiene 3 parametros 


//funciones 
function mensaje (x, y){
}



//investigar que es el switch / do while / while / for of / for in y su diferencias 

// == es para comparar sin tomar el cuento el tipo de dato
// === es para comparar tomando en cuenta el tipo de dato y valor
// != es para comparar sin tomar el cuento el tipo de dato
// !== es para comparar tomando en cuenta el tipo de dato




let dia = prompt ("insert day of the week")
  switch (dia) { 
    case "lunes":
        console.log("dias entre semana");
        break;
    case "martes":
        console.log("dias entre semana");
        break;  
    case "miercoles":
            console.log("dias entre semana");
        break;
    case "jueves":
        console.log("dias entre semana");
        break;
    case "viernes":
        console.log("dias entre semana");
        break;
    case "sabado":
        console.log("fin de semana");
        break;
    case "domingo":
        console.log("fin de semana");
        break;


    default: console.log("error!!!");
        
  }

  //////////////////////////////////////////////////////////////////

// 1. Crear un algoritmo que solicite al usuario un número n y calcule la suma de todos los números del 1 a n.

let numero = prompt ("inserte un numer")