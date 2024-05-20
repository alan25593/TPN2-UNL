/*  Función cuando tocan el boton del Home*/
function mostrarMensaje() {
    document.write("¡Bienvenidos al TP2 - Copia del 1 agregando PHP! || Espere y será redireccionado a la pantalla de contacto");
    setTimeout(function() {
        window.location.href = "contacto.html";
    }, 3000);
}



/*  Función cuando carga la pantalla Home*/
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === '/main.html') {
        alert("Bienvenido TP1! \nAutor: Lampert Alan");
    }
    
});


/*  Función cuando clickeas el sumbit del correo*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitCorreo").addEventListener("click", function(event) {
        event.preventDefault(); 
        mostrarEnvio();
        setTimeout(function() {
            ocultarMensaje();
        }, 3000);
    });
});

function mostrarEnvio() {
    var container = document.createElement("div");
    container.classList.add("message-container");
    var message = document.createElement("p");
    message.textContent = "Simulando envío de correo";
    container.appendChild(message);
    var spinner = document.createElement("div");
    spinner.classList.add("spinner");
    container.appendChild(spinner);
    document.body.appendChild(container);
}

function ocultarMensaje() {
    var container = document.querySelector(".message-container");
    if (container) {
        container.parentNode.removeChild(container);
    }
}
