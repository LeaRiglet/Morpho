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

// Simulated number of print jobs per month
const queries = [1, 5, 10, 15, 20];

function generateROIData(cost) {
  // assume revenue of 200€ per job
  return queries.map(q => ((q * 200) - cost) / cost * 100);
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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'ROI estimé en fonction du nombre de requêtes',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Requêtes/mois"
      }
    },
    y: {
      title: {
        display: true,
        text: "ROI (%)"
      }
    }
  }
};

export default function ROIChart() {
  return (
    <div style={{ width: "100%", maxWidth: 1000, margin: "0 auto", height: 400 }}>
      <Line data={data} options={options} height={400} width={1000} />
    </div>
  );
}
