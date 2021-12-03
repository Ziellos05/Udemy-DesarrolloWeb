// Variables

var a = "Letra A"; // Creando variable

var b; // Creando variable sin asignar

a = true; // Reasignando variable

var producto1 = "Computadora",
  disponible1 = true,
  categoria1 = "Computadoras";

var _disponible = false; // Así se puede nombrar una variable
var camelCase = "Así se nombra una variable con varios nombres";

console.log(camelCase);

// Variables con let

// Let es la misma mierda que el var.

// Const

const variableConConst = 23;

const p1 = 'Monitor de 20 pulgadas (20")';
const p2 = String("Monitor de 20 pulgadas");
const p3 = new String("Monitor de 20 pulgadas");

console.log(p1);
console.log(typeof p1);

// Métodos para Strings

console.log(p1.length);

console.log(p1.indexOf("20"));

console.log(p1.includes("21"));

// Números

const n1 = 100;
const n2 = "100";
const n3 = 3;

// Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(4.5); // Redondea al más cercano
resultado = Math.ceil(2.1); // Redondea pa arriba
resultado = Math.floor(2.9); // Redondea pa abajito
resultado = Math.sqrt(2.9); // Raiz cuadrada
resultado = Math.abs(-2000);
resultado = Math.min(3, 2, 6, 124, 5, 7);
resultado = Math.max(3, 2, 6, 124, 5, 7);
resultado = Math.random();

console.log(resultado);

// Operaciones

resultado = 20 + 30 * 2;

console.log(resultado);

// Incrementos

let puntaje = 10;

puntaje++; //Primero imprime y luego incrementa, aplica igual para puntaje--
++puntaje; // Primero incrementa y luego imprime, aplica igual para --puntaje

puntaje += 10; // Así se puede sumar un número al puntaje

// Concatenación

const nombre = "Juan";
const correo = "juancorreo@correo.com";

console.log(nombre, " ", correo); // Se pueden poner + o , para concatenar

// Template Strings - Strings Literals

console.log(`Nombre cliente: ${nombre} Email: ${correo}`);

// Boleanos

const boolean1 = true;
const boolean2 = false;

// Objetos

const producto = {
  nombreProducto: 'Monitor de 20 "',
  precio: 20000,
  disponible: true,
};

console.log(producto.precio); // Como acceder a una propiedad específica del objeto
console.log(producto["precio"]); // Lo mismo pero más engorroso
console.log(producto);

producto.imagen = "imagen.jpeg"; // Se agrega una propiedad al objeto
delete producto.disponible; //Se elimina dicha propiedad al objeto
console.log(producto);
