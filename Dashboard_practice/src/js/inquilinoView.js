async function cargarInquilinos() {
  try {
    const inquilinos = await window.AppServices.InquilinoService.getAll();
    const tbody = document.querySelector("#clientes-tabla tbody");
    tbody.innerHTML = ""; // limpiar tabla antes de cargar

    inquilinos.forEach(inquilino => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${inquilino.nombre}</td>
        <td>${inquilino.email}</td>
        <td>${inquilino.telefono}</td>
        <td>${inquilino.codigoPropiedad}</td>
        <td>${inquilino.direccion}</td>
        <td>${inquilino.vencimiento}</td>
        <td>
          <button class="btn edit" data-nombre="${inquilino.nombre}">✏️</button>
        </td>
        <td>
          <button class="btn delete" data-nombre="${inquilino.nombre}">🗑️</button>
        </td>
      `;

      tbody.appendChild(tr);
    });
  } catch (err) {
    console.error("Error cargando inquilinos:", err);
  }
}

// Delegación de eventos para botones edit y delete
document.addEventListener("click", e => {
  if (e.target.matches(".btn.edit")) {
    const nombre = e.target.dataset.nombre;
    abrirModal(nombre);
  }

  if (e.target.matches(".btn.delete")) {
    const nombre = e.target.dataset.nombre;
    eliminar(nombre);
  }
});

function abrirModal(nombre) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("nombre").value = nombre;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function eliminar(nombre) {
  if (confirm(`¿Desea eliminar a ${nombre}?`)) {
    console.log("Eliminar:", nombre);
    // Aquí podrías llamar a window.AppServices.InquilinoService.delete(nombre) o id
  }
}

// Ejecutar la carga al mostrar la vista
cargarInquilinos();
