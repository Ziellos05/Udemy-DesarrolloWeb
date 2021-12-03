// APIs: Notification API

const boton = document.querySelector("#boton");

boton.addEventListener("click", function() {
    console.log("Diste click");
    Notification.requestPermission()
        .then(result=>console.log(`El resultado es ${result}`));
});

if (Notification.permission == "granted") {
    new Notification("Esta es una notificación"), {
        icon: "../img/snk.png",
        body: "Aprendiendo a programar"
    }
}