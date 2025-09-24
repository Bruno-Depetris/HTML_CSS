import { Inquilinos } from "./api.js";

function abrirModal(nombre) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("nombre").value = nombre; 
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}


window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    cerrarModal();
  }
}


function eliminiar(){
    alert("desea eliminar?")
}


async function cargarDatos() {
  const tbody = document.querySelector("table tbody");
  tbody.innerHTML = ""; // limpia filas anteriores

  try {
    // Traer todos los inquilinos desde la API
    const inquilinos = await Inquilinos.getAll();

    inquilinos.forEach(inq => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${inq.nombre}</td>
        <td>${inq.email ?? "-"}</td>
        <td>${inq.telefono ?? "-"}</td>
        <td>${inq.codigoPropiedad ?? "-"}</td>
        <td>${inq.direccion ?? "-"}</td>
        <td>${inq.vencimiento ?? "-"}</td>
        <td>
          <button class="btn edit" onclick="abrirModal('${inq.nombre}')">✏️</button>
        </td>
        <td>
          <button class="btn delete" onclick="eliminar(${inq.id})">🗑️</button>
        </td>
      `;

      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error("Error cargando datos:", err.message);
    tbody.innerHTML = `<tr><td colspan="8" style="color:red">Error al cargar datos</td></tr>`;
  }
}

// Llamar cuando cargue la página
document.addEventListener("DOMContentLoaded", cargarDatos);

// Eliminar (ejemplo)
async function eliminar(id) {
  if (confirm("¿Seguro que querés eliminar este inquilino?")) {
    try {
      await Inquilinos.remove(id);
      alert("Eliminado con éxito ✅");
      cargarDatos(); // recargar la tabla
    } catch (err) {
      alert("Error eliminando: " + err.message);
    }
  }
}

// Exponer funciones al HTML
window.abrirModal = function(nombre) {
  alert("Editar: " + nombre);
};

window.eliminar = eliminar;
