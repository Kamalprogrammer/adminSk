import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const BarChart = ({ data = [], color = "#4f46e5" }) => {
    const chartData = {
        labels: data.map(() => ""), // Empty labels
        datasets: [
            {
                data: data,
                backgroundColor: color,
                borderRadius: 4,
                barThickness: 6, // Thinner bars like in the image
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            tooltip: {
                enabled: true,
                backgroundColor: '#fff',
                titleColor: '#000',
                bodyColor: '#000',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 8,
                displayColors: false,
                callbacks: {
                    title: () => null,
                    label: (context) => context.raw,
                }
            },
        },
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                display: false, // Hide y-axis
                min: 0,
            },
        },
        layout: {
            padding: 0,
        }
    };

    return (
        <div className="w-full h-30 sm:h-full">
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarChart;
