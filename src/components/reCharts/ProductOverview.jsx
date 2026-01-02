import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';

// Colors from index.css
const COLORS = [
    'var(--color-chart-blue)',
    'var(--color-chart-green)',
    'var(--color-chart-orange)',
    'var(--color-chart-red)'
];

const data = [
    {
        name: 'Product A',
        value: 400,
        target: 500,
        achieved: 400,
        description: 'Premium Electronics'
    },
    {
        name: 'Product B',
        value: 300,
        target: 400,
        achieved: 300,
        description: 'Home & Garden'
    },
    {
        name: 'Product C',
        value: 300,
        target: 350,
        achieved: 300,
        description: 'Fashion & Beauty'
    },
    {
        name: 'Product D',
        value: 200,
        target: 300,
        achieved: 200,
        description: 'Sports & Outdoors'
    },
];

const renderActiveShape = (props) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        value,
        percent,
        midAngle,
    } = props;

    const RADIAN = Math.PI / 180;
    // Calculate coordinates
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);

    // Calculate connection points
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            {/* 1. Center Text - Clean and Information Dense */}
            <text x={cx} y={cy} textAnchor="middle" dy={-5}>
                <tspan x={cx} dy="0" fill="var(--color-text-gray)" fontSize={12} fontWeight={500}>
                    {payload.name}
                </tspan>
                <tspan x={cx} dy="24" fill="var(--color-text-black)" fontSize={24} fontWeight={700}>
                    {value.toLocaleString()}
                </tspan>
            </text>

            {/* 2. The Main Active Sector with Shadow */}
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 4} // Slightly expand
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                style={{ filter: 'url(#shadow)' }} // Apply shadow
            />

            {/* 3. The Outer Ring Effect (Optional visual flair) */}
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 12}
                outerRadius={outerRadius + 14}
                fill={fill}
                fillOpacity={0.3}
            />

            {/* 4. Connector Lines - Subtle and Thin */}
            <path
                d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                stroke="var(--color-border-light)"
                strokeWidth={2}
                fill="none"
            />

            {/* 5. End Dot */}
            <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />

            {/* 6. Outer Label - Value */}
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                textAnchor={textAnchor}
                fill="var(--color-text-black)"
                fontSize={14}
                fontWeight={600}
                dy={4}
            >
                {`PV ${value}`}
            </text>

            {/* 7. Outer Label - Percentage */}
            <text
                x={ex + (cos >= 0 ? 1 : -1) * 12}
                y={ey}
                dy={20}
                textAnchor={textAnchor}
                fill="var(--color-text-gray)"
                fontSize={12}
            >
                {`(${(percent * 100).toFixed(1)}%)`}
            </text>
        </g>
    );
};

export default function ProductOverview({ isAnimationActive = true, defaultIndex = 0 }) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    const activeData = data[activeIndex];
    const achievementPercent = ((activeData.achieved / activeData.target) * 100).toFixed(1);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6 bg-white rounded-xl p-4 md:p-6 border border-[var(--color-border-light)]">
            {/* Left Side - Pie Chart (120% larger) */}
            <div className="flex-1 flex items-center justify-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        {/* Definition for the drop shadow filter */}
                        <defs>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                                <feOffset dx="0" dy="3" result="offsetBlur" />
                                <feFlood floodColor="rgba(0,0,0,0.2)" result="color" />
                                <feComposite in="color" in2="blur" operator="in" result="shadow" />
                                <feMerge>
                                    <feMergeNode in="shadow" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={110}
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                            isAnimationActive={isAnimationActive}
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                    stroke="none"
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>


            <div className="w-full lg:w-80 flex flex-col gap-4">
                <div className="pb-4 border-b border-[var(--color-border-light)]">
                    <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-black)] mb-1">
                        {activeData.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--color-text-gray)]">
                        {activeData.description}
                    </p>
                </div>


                <div className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-primary)]/10 rounded-lg p-3 md:p-4">
                    <p className="text-xs font-semibold text-[var(--color-text-gray)] uppercase tracking-wide mb-2">
                        Value Achieved
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
                            {activeData.achieved.toLocaleString()}
                        </span>
                        <span className="text-xs md:text-sm text-[var(--color-text-gray)]">units</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[var(--color-hover-bg)] rounded-lg p-3">
                        <p className="text-xs font-semibold text-[var(--color-text-gray)] mb-1">
                            Target
                        </p>
                        <p className="text-base md:text-lg font-bold text-[var(--color-text-black)]">
                            {activeData.target.toLocaleString()}
                        </p>
                    </div>
                    <div className="bg-[var(--color-hover-bg)] rounded-lg p-3">
                        <p className="text-xs font-semibold text-[var(--color-text-gray)] mb-1">
                            Achievement
                        </p>
                        <div className="flex items-center gap-1">
                            <p className="text-base md:text-lg font-bold text-[var(--color-text-black)]">
                                {achievementPercent}%
                            </p>
                            <TrendingUp size={16} className="text-green-500" />
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-semibold text-[var(--color-text-gray)]">
                            Progress
                        </p>
                        <p className="text-xs font-bold text-[var(--color-primary)]">
                            {achievementPercent}%
                        </p>
                    </div>
                    <div className="w-full h-2 bg-[var(--color-border-light)] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/70 rounded-full transition-all duration-300"
                            style={{ width: `${achievementPercent}%` }}
                        />
                    </div>
                </div>

                {/* Status */}

            </div>
        </div>
    );
}