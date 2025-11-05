  const ctx = document.getElementById('line-chart');

  new Chart(ctx, {
  type: 'line',
  data: {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  datasets: [{
  label: 'Sales',
  data: [12000, 15000, 13000, 17000, 20000, 22000, 25000, 24000],
  borderColor: 'rgba(13,110,253,1)',
  backgroundColor: 'rgba(13,110,253,0.1)',
  tension: 0.4,
  fill: true,
  pointRadius: 4,
  pointBackgroundColor: 'rgba(13,110,253,1)',
  pointHoverRadius: 6
  }]
  },
  options: {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
  legend: { display: false },
  },
  scales: {
  y: { beginAtZero: true },
  x: { grid: { display: false } }
  }
  }
  });