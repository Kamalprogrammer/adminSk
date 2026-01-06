import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const hexToRgba = (hex, alpha) => {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getCssVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
};

const LineChart = ({ 
    labels, 
    data: chartData, 
    color = '#3b82f6', 
    lineColor,
    min, 
    max, 
    label = 'Repeat customer rate',
    showXAxis = true,
    showYAxis = true,
    width = '100%',
    height = 'auto'
}) => {
    const textColorGray = getCssVariable('--color-text-gray') || '#9ca3af';
    const borderColorLight = getCssVariable('--color-border-light') || '#f3f4f6';

    const data = {
        labels: labels || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label,
                data: chartData || [],
                fill: true,
                backgroundColor: (context) => {     
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    const startColor = color.startsWith('#') ? hexToRgba(color, 0.2) : color;
                    const endColor = color.startsWith('#') ? hexToRgba(color, 0) : 'rgba(255, 255, 255, 0)';
                    gradient.addColorStop(0, startColor);
                    gradient.addColorStop(1, endColor);
                    return gradient;
                },
                borderColor: lineColor || color,
                tension: 0.4, // Smooth curve
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: lineColor || color,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            display: false,
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#fff',
                titleColor: '#1f2937',
                bodyColor: '#1f2937',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                label: (context) => `${context.parsed.y}%`
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false
                },
                ticks: {
                    display: showXAxis,
                    color: textColorGray
                }
            },
            y: {
                min: min,
                max: max,
                grid: {
                    display: false,
                    borderDash: [4, 4],
                    color: borderColorLight,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: showYAxis,
                    stepSize: 10,
                    color: textColorGray
                }
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };

    return (
        <div style={{ width, height }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
