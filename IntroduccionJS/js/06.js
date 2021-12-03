// Estructuras de control

const puntaje = 1000;

if(puntaje !== 1000) {
    console.log("Sí, el puntaje es 1000");
} else {
    console.log("El número NO es 1000");
}

const efectivo = 1000;
const carrito = 800;

if(efectivo>carrito) {
    console.log("Tiene fondos suficientes");
} else {
    console.log("Tiene fondos insuficientes");
}

const rol = "Editor";

if(rol==="Administrador") {
    console.log("Acceso a todo el sistema");
} else if(rol==="Editor") {
    console.log("Acceso a edición de texto");
} else {
    console.log("No tienes acceso");
}

// Uso de SWITCH

const metodoPago = "Perrito";

switch(metodoPago) {
    case "Tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "Perrito":
        console.log("Pagaste con un perrito XD");
        break;
    default:
        console.log("Aún no has pagado");
        break;
}