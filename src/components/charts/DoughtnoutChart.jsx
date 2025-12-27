import React, { useState, useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughtnoutChart = () => {
    const [centerText, setCenterText] = useState({ label: 'Total Income', value: '23,876' });
    const [isHovered, setIsHovered] = useState(false);

    const data = useMemo(() => ({
        labels: ['Income', 'Rent', 'Download', 'Views'],
        datasets: [
            {
                data: [30, 23, 25, 17],
                backgroundColor: [
                    '#4680ff', // Income - Blue
                    '#f97316', // Rent - Orange
                    '#22c55e', // Download - Green
                    '#e8f0ff', // Views - Light Blue
                ],
                borderWidth: 3,
                borderColor: '#fff',
                hoverOffset: 8,
                hoverBorderWidth: 0,
            },
        ],
    }), []);

    const options = useMemo(() => ({
        cutout: '70%',
        animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1000,
            easing: 'easeOutQuart',
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
                backgroundColor: (context) => {
                    if (context.tooltipItems && context.tooltipItems.length > 0) {
                        const item = context.tooltipItems[0];
                        const bgColor = item.dataset.backgroundColor[item.dataIndex];
                        return bgColor;
                    }
                    return '#fff';
                },
                displayColors: false,
                padding: 12,
                cornerRadius: 8,
                titleFont: {
                    size: 0,
                },
                bodyFont: {
                    size: 13,
                    weight: 'bold',
                },
                callbacks: {
                    title: () => '',
                    label: (context) => {
                        return `${context.label}:  ${context.raw}`;
                    },
                    labelTextColor: () => '#fff',
                }
            },
        },
        onHover: (event, elements) => {
            if (elements && elements.length > 0) {
                const index = elements[0].index;
                const label = data.labels[index];
                const value = data.datasets[0].data[index];
                setCenterText({ label, value });
                setIsHovered(true);
            } else {
                setCenterText({ label: 'Total Income', value: '23,876' });
                setIsHovered(false);
            }
        },
        maintainAspectRatio: false,
        responsive: true,
    }), [data]);

    return (
        <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '100%',
        }}>
            <Doughnut data={data} options={options} />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${isHovered ? 1.05 : 1})`,
                textAlign: 'center',
                pointerEvents: 'none',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}>
                <div style={{ 
                    color: isHovered ? '#4680ff' : '#8a9bab', 
                    fontSize: '14px', 
                    marginBottom: '4px',
                    transition: 'color 0.3s ease',
                    fontWeight: '500',
                }}>
                    {centerText.label}
                </div>
                <div style={{ 
                    color: '#222c36', 
                    fontSize: '24px', 
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                }}>
                    {centerText.value}
                </div>
            </div>
        </div>
    );
};

export default DoughtnoutChart;
