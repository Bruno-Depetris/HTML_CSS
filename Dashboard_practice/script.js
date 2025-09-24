// import { mostrarNotificacion } from "./src/notification/notif.js";


let currentCSS = null;
let currentScript = null;
//loadView('dashboardView');
loadView('inquilinoView')

let ultimoBotonClickeado = null;
let boton = null;

document.getElementById("btn-dashboard").addEventListener("click", () => {

  botonClickeado("btn-dashboard");
  loadView('dashboardView')
  
  // mostrarNotificacion("Contrato vencido en 3 días", "warning");
});


document.getElementById("btn-clientes").addEventListener("click", () => {
  botonClickeado("btn-clientes");
  loadView('inquilinoView')
});

document.getElementById("btn-propiedades").addEventListener("click", () => {
  botonClickeado("btn-propiedades");
  loadView('propiedadesView')
});

document.getElementById("btn-contratos").addEventListener("click", () => {
  botonClickeado("btn-contratos");
  loadView('contratosView')
});

document.getElementById("btn-notificaciones").addEventListener("click", () => {
  botonClickeado("btn-notificaciones");
});

document.getElementById("btn-ayuda").addEventListener("click", () => {
  botonClickeado("btn-ayuda");
});

function loadView(viewName) {
  const main = document.getElementById('main-content');

  fetch(`src/views/${viewName}.html`)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;

      //limpiar CSS anterior (pq sino se rompe el muy mogolico)
      if (currentCSS) currentCSS.remove();
      currentCSS = document.createElement('link');
      currentCSS.rel = 'stylesheet';
      currentCSS.href = `src/css/${viewName}.css`;
      document.head.appendChild(currentCSS);

      // Limpiar JS anterior
      if (currentScript) currentScript.remove();
      currentScript = document.createElement('script');
      currentScript.type = 'module';
      currentScript.src = `src/js/${viewName}.js`;
      document.body.appendChild(currentScript);

      // Espera que el script cargue
      if (viewName === 'dashboardView') {
        setTimeout(renderDashboardCharts, 50);
      }
    })
    .catch(err => console.error(err));
}

function botonClickeado(botonId) {
  
  const botones = document.querySelectorAll(".lateral-buttons");
  botones.forEach(boton => boton.classList.remove("activo"));

  const botonActual = document.getElementById(botonId);
  if (botonActual) {
    botonActual.classList.add("activo");

    ultimoBotonClickeado = botonId;
  }
}
