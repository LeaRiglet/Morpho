import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const queries = [1, 3, 5, 8, 12];

function generateROIData(cost) {
  // assume profit per print of 20€
  return queries.map(q => ((q * 20) - cost) / cost * 100);
}

const data = {
  labels: queries.map(q => `${q} requêtes/mois`),
  datasets: [
    {
      label: 'Ender 3',
      data: generateROIData(200),
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: 'Prusa i3',
      data: generateROIData(800),
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      label: 'Ultimaker S5',
      data: generateROIData(6000),
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'ROI estimé en fonction du nombre de requêtes',
    },
  },
};

export default function ROIChart() {
  return <Line data={data} options={options} />;
}
