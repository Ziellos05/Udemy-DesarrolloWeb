// Selectores de elementos

// querrySelector

const heading = document.querySelector("#heading"); // 0 o 1 elementos
console.log(heading);

heading.textContent = "Nuevo texto";

// querrySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[4]);

// Get Element By ID... Método anticuado

const heading2 = document.getElementById("heading");
console.log(heading2);

// HTML desde JavaScript

const nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "nuevo-enlace.html";
nuevoEnlace.classList.add("navegacion__enlace");
nuevoEnlace.textContent = "Nuevo enlace";

console.log(nuevoEnlace);

// Agregando al documento

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

// Eventos

console.log(1);

window.addEventListener("load", () => console.log(2)); // Espera a que se cargue toda la pag

window.onload = () => {
  console.log(3);
};

document.addEventListener("DOMContentLoaded", () => console.log(4)); // Espera a que se cargue HTML

console.log(5);

// Seleccionar elementos y asociarles un evento

// Como se hace con formulario, para formularios
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar formulario
  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", "error");
    return;
  }

  // Enviar formulario

  mostrarAlerta("Su información se ha enviado correctamente");
  console.log("Enviando formulario");
});

// Creando mostrarError porque nadie observa la consola para ver que dice

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }
  alerta.classList.add("error");

  formulario.appendChild(alerta);

  // Haciendo desaparecer una alerta toda WATAFÁ
  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

// Como se haría con click, para cualquier elemento
/* const botonEnviar = document.querySelector(".boton--primario");
botonEnviar.addEventListener("click", (e) => {
    console.log(e);
    e.preventDefault();
    console.log("Enviando formulario");
}); */

// Eventos de los Inputs y TextArea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}
