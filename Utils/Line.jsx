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
  Legend,
);

const options = {
  scales: {
    y: {
      ticks: { beginAtZero: true },
    },
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart = ({ stats }) => {
  return (
    <div className="p-5 md:px-10 py-5 bg-white dark:bg-night-blue text-white">
      <div style={{ height: '350px', width: ' 100%' }}>
        <Line
          data={{
            labels: stats.labels,
            datasets: [
              {
                label: 'Shipments',
                data: stats.ShipmentStats,
                fill: true,
                borderColor: 'rgba(44, 217, 197, 1)',
                backgroundColor: 'rgba(44, 217, 197, 0.4)',
                tension: 0.2,
                borderWidth: 1,
              },
              {
                label: 'Vehicles',
                data: stats.VehicleStats,
                fill: true,
                borderColor: 'rgba(102, 114, 251, 1)',
                backgroundColor: 'rgba(102, 114, 251, 0.4)',
                tension: 0.2,
                borderWidth: 1,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default LineChart;
