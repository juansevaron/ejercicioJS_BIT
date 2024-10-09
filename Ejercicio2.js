//Crear un algoritmo que determine si un número ingresado por el usuario es par o impar



let numero = parseInt(prompt("Ingresa un número:"));

if (numero % 2 === 0) {
    console.log(`El número ${numero} es par.`);
} else {
    console.log(`El número ${numero} es impar.`);
}