// Async/Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes");

    setTimeout(() => {
      resolve("Sus clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
    return new Promise((resolve) => {
      console.log("Descargando pedidos");
  
      setTimeout(() => {
        resolve("Sus pedidos fueron descargados");
      }, 3000);
    });
  }

async function app() {
  try {
    // const clientes = await descargarNuevosClientes();
    // const pedidos = await descargarUltimosPedidos();
    // console.log("Código que espera hasta que se ejecute");
    // console.log(clientes);
    // console.log(pedidos);

    const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
    console.log(resultado);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();

console.log("Código corriendo mientras otras cosas pasan");