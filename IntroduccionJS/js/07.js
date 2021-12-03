// For Loop

for(let i=1; i<=10; i++) {
    if (i%2===0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}

const accesorios = [
    { nombre: "Cadena", valor: 10},
    { nombre: "Vaso", valor: 3},
    { nombre: "Anillo", valor: 5},
    { nombre: "Carta", valor: 10},
    { nombre: "Franela", valor: 6},
    { nombre: "Blusa", valor: 3},   
]

for(let i=0; i<accesorios.length; i++) {
    console.log(accesorios[i]);
}

// While Loop

let i = 4;

while(i<=10) {
    console.log(i);
    i++; // Incremento
}

// Do While Loop

let e = 1000;

do {
    console.log(e);
 
    e++; // Incremento
} while(e<=10);