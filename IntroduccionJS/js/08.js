const accesorios = [
    { nombre: "Cadena", valor: 10},
    { nombre: "Vaso", valor: 3},
    { nombre: "Anillo", valor: 5},
    { nombre: "Carta", valor: 10},
    { nombre: "Franela", valor: 6},
    { nombre: "Blusa", valor: 3},   
];

// For Each: Para mostrar elementos en pantalla o mostrar
accesorios.forEach( elementoDelArregloSobreelCualVaIterando => {
    console.log("Imprime una vez por cada elemento");
    console.log(elementoDelArregloSobreelCualVaIterando);
    console.log(elementoDelArregloSobreelCualVaIterando.nombre); // Eligo una propiedad
})

// map: Para enviar otra lista de elementos
accesorios.map(producto => console.log(producto.valor));

// Uso de map para crear un nuevo arreglo
const valores = accesorios.map(producto => producto.valor);
console.log(valores);

// Ejemplo creando nuevo arreglo
const arregloBonito = accesorios.map(producto => `${producto.nombre} - ${producto.valor}`);
console.log(arregloBonito);