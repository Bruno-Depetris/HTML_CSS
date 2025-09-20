let currentCSS = null;
let currentScript = null;
loadView('dashboardView');

function loadView(viewName) {
  const main = document.getElementById('main-content');

  fetch(`src/views/${viewName}.html`)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;

      // Limpiar CSS anterior
      if (currentCSS) currentCSS.remove();
      currentCSS = document.createElement('link');
      currentCSS.rel = 'stylesheet';
      currentCSS.href = `src/views/${viewName}.css`;
      document.head.appendChild(currentCSS);

      // Limpiar JS anterior
      if (currentScript) currentScript.remove();
      currentScript = document.createElement('script');
      currentScript.src = `src/views/${viewName}.js`;
      document.body.appendChild(currentScript);

      // Espera que el script cargue
      if (viewName === 'dashboardView') {
        setTimeout(renderDashboardCharts, 50);
      }
    })
    .catch(err => console.error(err));
}


