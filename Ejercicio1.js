// 1. Crear un algoritmo que solicite al usuario un número n y calcule la suma de todos los números del 1 a n.

let n = (prompt("Ingresa un número"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += i;
}

console.log(`La suma de los números del 1 a ${n} es: ${suma}`);