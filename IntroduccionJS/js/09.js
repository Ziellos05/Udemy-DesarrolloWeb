// This

window.cosa = "LoQueSea";

const reservacion = {
    nombre: "Roland",
    apellido: "Ortega",
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y debe pagar ${this.total}`);
        // Si se hace arrow function, se busca es window.dato en la ventana global
    },
    arrowEjemplo: () => {
        console.log(`Observe como llamo a window global: ${window.cosa}`);
    }
};

reservacion.informacion();
reservacion.arrowEjemplo();
