// Try Catch
n1 = 1;
n3 = 3;

console.log(n1);
try {
  console.log(n2);
} catch (error) {
  console.log("ERROR");
}
console.log(n3);

// Promises

const usuarioAutentificado = new Promise((resolve, reject) => {
  const auth = true;
  if ((auto = false)) {
    resolve("Usuario autenticado");
  } else {
    reject("No es posible iniciar sesión");
  }
});

console.log(usuarioAutentificado);

// En los promises existen tres valores posibles
// Pending: En espera
// Fullfilled: Aceptado y cumplido
// Rejected: Rechazado

// Para recibir algún parámetro resultado del promises

usuarioAutentificado
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
