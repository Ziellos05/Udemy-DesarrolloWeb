// Fetch API

function obtenerEmpleados() {
    const url = "../baseDeDatos.json";
    fetch(url) // Aquí va una URL
        .then(resultado => resultado.json())
        .then(datos => {
            const {empleados} = datos;
            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            });
        });
};

obtenerEmpleados();