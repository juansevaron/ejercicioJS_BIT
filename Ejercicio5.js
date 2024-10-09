
function mostrarTablaMultiplicar() {

    const numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
    const limite = parseInt(prompt("Ingresa el límite de la tabla de multiplicar:"));

 
    let total = 0;

    console.log(`Tabla de multiplicar del ${numero}:`);
    
   
    for (let i = 1; i <= limite; i++) {
        const resultado = numero * i;
        total += resultado;
        console.log(`${numero} x ${i} = ${resultado}`);
    }

  
    console.log(`El total de las multiplicaciones es: ${total}`);
}


mostrarTablaMultiplicar();


