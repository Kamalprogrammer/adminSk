import React from 'react';
import BarChart from './charts/BarChart';
import LineChart from './reCharts/LineChart';
import RangeChart from './reCharts/RangeChart';

const BarChartData = [
    {
        data: [10, 5, 4, 20, 22, 30, 24, 15, 46, 25, 11, 25, 45]
    }
];

const barChartColor = "#4680ff";

export default function AnalyticsTopCard() {
    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3 p-3">

                {/* Card 1: New Orders */}
                <div className="w-full bg-[var(--color-section-bg)]  rounded-2xl shadow-sm border border-[var(--color-border-light)] p-5 flex flex-col justify-between min-h-auto transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-medium text-[.9rem] lg:text-[1rem] text-[var(--color-text-black)]">New Orders</span>
                        <div className="relative">
                            <select className="appearance-none bg-[var(--color-hover-bg)] border border-[var(--color-border-light)] text-[var(--color-text-black)] rounded-xl px-4 py-1 font-medium text-[.7rem] lg:text-[1rem] pr-8 focus:outline-none focus:border-[var(--color-primary)]">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="w-full flex-1 flex items-center justify-center h-[8rem] md:h-[7rem] lg:h-[5rem] ">
                        <BarChart data={BarChartData[0].data} color={barChartColor} />
                    </div>
                    <div className="mt-1 flex flex-col items-center">
                        <div className="flex gap-5 pt-2">
                            <span className="text-[.8rem] lg:text-[1rem] font-bold text-[var(--color-text-black)]">$30200</span>
                            <span className="text-[.8rem] lg:text-[1rem] text-[var(--color-primary)] font-semibold mt-1 flex items-center">↗ <span className="ml-1">30.6%</span></span>
                        </div>

                        <a href="#" className="mt-3 text-[var(--color-primary)] text-[.7rem] lg:text-[1rem] font-semibold hover:text-[var(--color-primary-dark)] transition-colors">View More</a>
                    </div>
                </div>

                {/* Card 2: New Users */}
                <div className="bg-[var(--color-section-bg)] rounded-2xl shadow-sm border border-[var(--color-border-light)] p-5 flex flex-col justify-between transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-medium text-[.9rem] lg:text-[1rem] text-[var(--color-text-black)]">New Users</span>
                        <div className="relative">
                            <select className="appearance-none bg-[var(--color-hover-bg)] border border-[var(--color-border-light)] text-[var(--color-text-black)] rounded-xl px-4 py-1 font-medium text-[.7rem] lg:text-[1rem] pr-8 focus:outline-none focus:border-[var(--color-primary)]">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center h-[8rem] md:h-[7rem] lg:h-[5rem]">
                        <LineChart />
                    </div>
                    <div className="mt-6 flex flex-col items-center">
                        <div className="flex gap-5 pt-2">
                            <span className="text-[.8rem] lg:text-[1rem] font-bold text-[var(--color-text-black)]">$30200</span>
                            <span className="text-[.8rem] lg:text-[1rem] text-[var(--color-success)] font-semibold mt-1 flex items-center">↗ <span className="ml-1">30.6%</span></span>
                        </div>

                        <a href="#" className="mt-3 text-[var(--color-primary)] text-[.7rem] lg:text-[1rem] font-semibold hover:text-[var(--color-primary-dark)] transition-colors">View More</a>
                    </div>
                </div>

                {/* Card 3: Visitors */}
                <div className="bg-[var(--color-section-bg)] rounded-2xl shadow-sm border border-[var(--color-border-light)] p-5 flex flex-col justify-between transition-all hover:shadow-md">
                    <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-[1rem] lg:text-[1rem] text-[var(--color-text-black)]">Visitors</span>
                        <div className="relative">
                            <select className="appearance-none bg-[var(--color-hover-bg)] border border-[var(--color-border-light)] text-[var(--color-text-black)] rounded-xl px-4 font-medium text-[.7rem] lg:text-[1rem] pr-8 focus:outline-none focus:border-[var(--color-primary)]">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center h-[8rem] md:h-[7rem] lg:h-[5rem]">
                        <RangeChart />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex gap-5 pt-2">
                            <span className="text-[.8rem] lg:text-[1rem] font-bold text-[var(--color-text-black)]">$30200</span>
                            <span className="text-[.8rem] lg:text-[1rem] text-[var(--color-danger)] font-semibold mt-1 flex items-center">↘ <span className="ml-1">30.6%</span></span>
                        </div>
                        <a href="#" className="mt-3 text-[var(--color-primary)] text-[.7rem] lg:text-[1rem] font-semibold hover:text-[var(--color-primary-dark)] transition-colors">View More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}