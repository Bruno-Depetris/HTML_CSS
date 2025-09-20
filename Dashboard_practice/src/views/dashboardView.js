function renderDashboardCharts() {
  // Ventas
  const salesCtx = document.getElementById('salesChart')?.getContext('2d');
  if (salesCtx) {
    new Chart(salesCtx, {
      type: 'line',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          label: 'Ventas ($)',
          data: [1200, 1900, 3000, 5000, 2300, 3400],
          borderColor: '#1b60f7',
          backgroundColor: 'rgba(27, 96, 247, 0.2)',
          tension: 0.4
        }]
      },
      options: { responsive: true }
    });
  }

  // Clientes
  const clientsCtx = document.getElementById('clientsChart')?.getContext('2d');
  if (clientsCtx) {
    new Chart(clientsCtx, {
      type: 'bar',
      data: {
        labels: ['Clientes A', 'Clientes B', 'Clientes C', 'Clientes D'],
        datasets: [{
          label: 'Cantidad de Clientes',
          data: [12, 19, 7, 14],
          backgroundColor: ['#1b60f7','#34c759','#ff9500','#ff3b30']
        }]
      },
      options: { responsive: true }
    });
  }
}
