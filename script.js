/* Función cuando tocan el botón del Home */
function mostrarMensaje() {
    document.write("¡Bienvenidos al TP2 - Copia del 1 agregando PHP! || Espere y será redireccionado a la pantalla de contacto");
    setTimeout(function() {
        window.location.href = "contacto.html";
    }, 3000);
}

function irGithub() {
    var githubUrl = "https://github.com/alan25593/TPN2-UNL";
    window.open(githubUrl, '_blank');
}

/* Función cuando carga la pantalla Home */
document.addEventListener("DOMContentLoaded", function() {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    const cookieName = "first_visit";
    if (!getCookie(cookieName)) {
        alert("Bienvenidos a mi página personal");
        setCookie(cookieName, "1", 30); 
    }
});


/* Validación del formulario de contacto */
const submitValidación = document.getElementById("validarSubmit");
if (submitValidación) {
    submitValidación.addEventListener("click", function(event) {
        event.preventDefault(); 
        if (validarFormulario()) {
            mostrarEnvio();
            enviarFormulario();
        }
    });
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var direccion = document.getElementById("direccion").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var consulta = document.getElementById("consulta").value.trim();

    // Validar campos vacíos
    if (!nombre || !direccion || !telefono || !correo || !consulta) {
        mostrarMensajeError("Todos los campos son obligatorios");
        return false;
    }

    // Validar tamaño de los campos
    if (nombre.length > 30 || correo.length > 50 || consulta.length > 100) {
        mostrarMensajeError("Los campos exceden el tamaño permitido: Nombre y apellido max 30, Mail max 50, Consulta max 100");
        return false;
    }

    // Validar formato del correo electrónico
    var formatoCorreo = /^[^\s@]+@[^\s@]+\.(com|gob|edu)$/;
    if (!formatoCorreo.test(correo)) {
        mostrarMensajeError("Por favor, introduce un correo electrónico válido. EJ alan@gmail.com");
        return false;
    }

    // Validar que el teléfono sea numérico
    if (!/^\d+$/.test(telefono)) {
        mostrarMensajeError("El teléfono debe contener solo números.");
        return false;
    }

    ocultarMensajes();
    return true;
}
/* Mensaje Error */
function mostrarMensajeError(mensaje) {
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.innerText = mensaje;
    mensajeError.style.display = "block";
    // Ocultar el mensaje de error después de 5 segundos
    setTimeout(function() {
        mensajeError.style.display = "none";
    }, 3000);
}

function ocultarMensajes() {
    var mensajeError = document.getElementById("mensaje-error");
    mensajeError.style.display = "none";
}
/* Limpiar Campos */
function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("consulta").value = "";
}



/* SIMULACIÓN ENVÍO */ 
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

function mostrarMensajeExito(mensaje) {
    var mensajeExito = document.getElementById("mensaje-exito");
    mensajeExito.innerText = mensaje;
    mensajeExito.style.display = "block";
    // Ocultar el mensaje de éxito después de 5 segundos
    setTimeout(function() {
        mensajeExito.style.display = "none";
    }, 3000);
}

function enviarFormulario() {
    var form = document.getElementById("contactoForm");
    var formData = new FormData(form);

    fetch('contacto.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        ocultarMensaje();
        if (data.message) {
            mostrarMensajeExito(data.message);
            limpiarCampos();
        }
    })
    .catch(error => {
        ocultarMensaje();
        mostrarMensajeError("Ocurrió un error al enviar la consulta. Por favor, inténtelo de nuevo más tarde.");
    });
}
