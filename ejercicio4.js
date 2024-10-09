
const menu = [
    { nombre: "hamburguesa", precio: 20000 },
    { nombre: "papas", precio: 7000 },
    { nombre: "gaseosa", precio: 5000 },
    { nombre: "agua", precio: 4000 },
    { nombre: "perro caliente", precio: 1700 }
];


function mostrarMenu() {
    alert("Menú de productos: \n hamburguesa \n papas \n gaseosa \n agua \n perro caliente");
    menu.forEach(producto => {
        console.log(`${producto.nombre}: $${producto.precio}`);
    });
}


function iniciarCompra() {
    let total = 0;
    let seleccion;

    mostrarMenu();

    while (true) {
        seleccion = prompt("Escriba que quiere ordenar (o 'pagar' para finalizar):");

     
        if (seleccion.toLowerCase() === 'pagar') {
            break;
        }

   
        const producto = menu.find(item => item.nombre.toLowerCase() === seleccion.toLowerCase());

        if (producto) {
            total += producto.precio;
            console.log(`Has añadido: ${producto.nombre}. Total actual: $${total.toFixed(2)}`);
        } else {
            console.log("Producto no encontrado. Por favor, intenta de nuevo.");
        }
    }

    console.log(`El total a pagar es: $${total.toFixed(2)}`);
}


iniciarCompra();


