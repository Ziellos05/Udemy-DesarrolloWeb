// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros); // Imprime más bonito
console.log(numeros[4]); // Accede al índice en cuestión

// Un arreglo puede poseer lo que sea
const arreglo = ["Hola", 10, true, "si", null, {nombre: "Roland", trabajo: "Programador"}, [1,2,3]];

// Conocer extensión de un arreglo
console.log(numeros.length);

// Modificar lineas en un array
numeros[5]=60; // Una forma poco usada de agregar elementos
numeros.push(70, 80, 90); // Forma que agrega sin saber número de elementos
numeros.unshift(-30, -20, -10); // Forma que agrega al principio
numeros.pop(); // Elimina el último elemento
numeros.shift(); // Elimina el primer elemento
numeros.splice(0, 2); // Eliminar en el sitio marcado el número de elementos dado


// Iterar alrededor de un array
numeros.forEach(function(numero){
    console.log(numero);
});

// Rest Operator o Spread Operator
const nuevoNumeros = [...numeros, 90]; // Nuevo arreglo con agregado al final
const otroNuevoNumeros = [0, ...nuevoNumeros]; // Nuevo arreglo con agregado al principio

console.log(otroNuevoNumeros);

//Array methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre:"Monitor 20 pulgadas", precio: 500},
    {nombre:"Table", precio:20},
    {nombre:"Bocinas", precio:10}
];

meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo sí existe");
    }
});

// Includes
let existencia = meses.includes("Marzo"); // Determina si el objeto existe en una lista

// Some: Para arreglos de objetos 
existencia = carrito.some(function(producto){
    return producto.nombre === "Table";
})

console.log(existencia);

// Reduce: Para hacer cálculos alrededor de los elementos de un array de objetos

// const precioFinal = carrito.reduce(function(total, producto) {
//     return total + producto.precio;
// }, 0);

// Ejemplo de transformación a Arroy Funtion

const precioFinal = carrito.reduce( (total, producto) => total + producto.precio, 0);

console.log("El precio final es "+precioFinal);

// Filter: Para obtener elementos específicos

existencia = carrito.filter(function(producto){ //>, <, ===, !==...
    return producto.precio>15;
});

console.log(existencia);