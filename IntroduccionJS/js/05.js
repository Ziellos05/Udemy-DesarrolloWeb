// Métodos de propiedad (Funciones - Métodos)

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar : function() {
        console.log("Pausando");
    }
}

// Se pueden agregar nuevas funciones a ese más
reproductor.borrarCancion = function(id) {
    console.log(`Borrando la canción con el ID: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);

// Arroy functions

// Función clásica
const sumar = function (n1, n2) {
    console.log(n1+n2);
}
sumar(1,2);

// Arroy style
const sumarArroy = (n1, n2) => console.log(n1+n2); // Corchetes necesarios con más de 1 linea
sumarArroy(1,2);

// Si sólo tenemos un parámetro
const aprendiendo = tecnología => console.log(`Aprendiendo: ${tecnología}`);
aprendiendo("Javascript");

// Si no tiene parámetros
const nada = () => console.log("Ésta función no hace nada");
nada();