
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