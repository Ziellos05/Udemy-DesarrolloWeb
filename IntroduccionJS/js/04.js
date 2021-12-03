// Funciones

// Declaración de funciones

// Esta forma declarada se corre así se llame la función antes
sumar(10, 10);
function sumar (a, b) {
    console.log(a+b);
}

// Expresión de la función

const sumar2 = function(a, b) {
    console.log(a+b);
}

sumar2(10, 10);

// IIFE
// Sirve para no leer variables de otros archivos

(function() {
    console.log("Esto es una función");
})();

// Métodos

const n1=20;
const n2="20";

console.log(parseInt(n2)); // Esto es una función
console.log(n1.toString()); // Esto es un método

function sumar3 (a, b) {
    return a+b;
}

console.log(sumar3(50, 50));