"use strict"; // Este comando solo ejecuta el código si se siguen buenas prácticas

const producto = {
  nombreProducto: 'Monitor de 20 "',
  precio: 20000,
  disponible: true,
};

// Forma antigua de llamar propiedades de un objeto
const precioProducto = producto.precio;
console.log(precioProducto);

// Nueva forma de llamar propiedades de un objeto
// Destructuring

const { precio, nombreProducto } = producto;
console.log(precio);

//Object.freeze(producto); // Congela el objeto, no agregar, eliminar ni modificar propiedades
Object.isFrozen(producto); // Devuelve true si el objeto está congelado

// producto.sexo="Masculino"; // Bota error porque está congelado

Object.seal(producto); // Permite modificar propiedades

producto.precio = 25000;

console.log(producto);

// Unir dos Objetos

const medidas = {
  peso: "1kg",
  medida: "1m"
};

const productoInfo = {...producto, ...medidas};

console.log(productoInfo);