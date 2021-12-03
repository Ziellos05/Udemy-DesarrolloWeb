// POO

// Object Literal, estático, código duro
const producto = {
    nombre: "Tablet",
    precio:500
};

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
};
const producto2 = new Producto("Monitor", 50000);

console.log(producto2);

// Prototypes

// Prototype es una función asociada a un tipo de objeto
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};
const cliente2 = new Cliente("Roland", "Ortega");

function formatearProducto (producto) {
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
};

console.log(formatearProducto(producto2));
console.log(formatearProducto(cliente2)); // Es undefined el apellido

// Creando una función que sólo aplique a un tipo de objeto
Producto.prototype.formatearProductoInterto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
};

console.log(producto2);
console.log(cliente2);
console.log(producto2.formatearProductoInterto());

// Classes

class ProductoNuevo {
    constructor(nombre, precio) {
        this.nombre=nombre;
        this.precio=precio;
    };
    formatearProductoNuevo() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    };
};

const productoNuevo = new ProductoNuevo("Carlos", 2000);

console.log(productoNuevo);
console.log(productoNuevo.formatearProductoNuevo());

// Herencia

class LibroNuevo extends ProductoNuevo {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    };
    formatearProductoNuevo() {
        return `${super.formatearProductoNuevo()}, ISBN:${this.isbn}`;
    }; // Se puede utilizar la misma función creada anteriormente o modificarla
};

const libroNuevo = new LibroNuevo("Las Mil y Una Noches", 45000, "1234567890");
console.log(libroNuevo);
console.log(libroNuevo.formatearProductoNuevo());