
function calcularMatricula() {
    const matriculaBase = 1000000; 
    const promedio = parseFloat(prompt("Ingresa el promedio del estudiante:"));

    let descuento = 0;

    
    if (promedio < 3) {
        descuento = 0; 
    } else if (promedio >= 3 && promedio <= 4) {
        descuento = 0.05; 
    } else if (promedio > 4) {
        descuento = 0.50; 
    }

  
    const totalAPagar = matriculaBase * (1 - descuento);
    
    console.log(`Promedio: ${promedio}`);
    console.log(`Valor de matrícula a pagar: $${totalAPagar.toFixed(2)}`);
}


calcularMatricula();
