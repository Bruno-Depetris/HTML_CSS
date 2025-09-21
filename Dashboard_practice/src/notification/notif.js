export function mostrarNotificacion(mensaje, tipo = "info") {
    let contenedor = document.getElementById("notificaciones");

    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "notificaciones";
        document.body.appendChild(contenedor);
    }

    const noti = document.createElement("div");
    noti.classList.add("notificacion-msj");

    let icono = "info";
    if (tipo === "warning") icono = "warning";
    if (tipo === "success") icono = "check_circle";
    if (tipo === "error") icono = "error";

    noti.innerHTML = `<span class="material-icons">${icono}</span> ${mensaje}`;
    contenedor.appendChild(noti);

    setTimeout(() => {
        noti.remove();
    }, 5000);
}
