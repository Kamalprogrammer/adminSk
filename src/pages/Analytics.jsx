import BarChart from "../components/charts/BarChart.jsx"
import LineChart from "../components/reCharts/LineChart.jsx"
import RangeChart from "../components/reCharts/RangeChart.jsx"
import CategoryChart from "../components/reCharts/CategoryChart.jsx"
import { BarChart3, TrendingUp, ShoppingCart, BadgeDollarSign } from "lucide-react";
const BarChartData = [
    {
        data: [10, 5, 4, 20, 22, 30, 24, 15, 46, 25, 11, 25, 45]
    }
]


const overViewSide = [
    {
        "id": 1,
        "icon": <BarChart3 />,
        "title": "Total Sales",
        "mainValue": "1,800",
        "change": "-245",
        "changeColor": "red",
        "changePercent": "-30.6%",
        "changePercentColor": "red"
    },
    {
        "id": 2,
        "icon": <TrendingUp />,
        "title": "Revenue",
        "mainValue": "$5667",
        "change": "+$2100",
        "changeColor": "green",
        "changePercent": "30.6%",
        "changePercentColor": "green"
    },
    {
        "id": 3,
        "icon": <ShoppingCart />,
        "title": "Abandon Cart",
        "mainValue": "128",
        "change": "-26",
        "changeColor": "orange",
        "changePercent": "5%",
        "changePercentColor": "orange"
    },
    {
        "id": 4,
        "icon": <BadgeDollarSign />,
        "title": "Ads Spent",
        "mainValue": "$2500",
        "change": "$200",
        "changeColor": "green",
        "changePercent": "10.6%",
        "changePercentColor": "green"
    }
]

export default function Analytics() {
    return (
        <div className="bg-[#f7f9fb] min-h-screen w-full p-6">
            {/* heading */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Analytics</h1>
            </div>
            {/* smallGraphs */}




            <div className="w-full grid gap-8 md:grid-cols-3">

                {/* Card 1: New Orders */}
                <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between min-h-auto transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-xl text-gray-900">New Orders</span>
                        <div className="relative">
                            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-1 text-base font-medium pr-8 focus:outline-none">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <BarChart data={BarChartData[0].data} color="#4f46e5" />
                    </div>
                    <div className="mt-1 flex flex-col items-center   ">
                        <div className="flex gap-5">
                            <span className="text-2xl font-extrabold text-gray-900">$30200</span>
                            <span className="text-sm text-blue-600 font-semibold mt-1 flex items-center">↗ <span className="ml-1">30.6%</span></span>
                        </div>

                        <a href="#" className="mt-3 text-blue-600 text-base font-semibold hover:underline">View More</a>
                    </div>
                </div>




                {/* Card 2: New Users */}
                <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between min-h-[12rem] transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-xl text-gray-900">New Users</span>
                        <div className="relative">
                            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-1 text-base font-medium pr-8 focus:outline-none">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <LineChart />
                    </div>
                    <div className="mt-6 flex flex-col items-center">
                        <div className="flex gap-5">
                            <span className="text-2xl font-extrabold text-gray-900">$30200</span>
                            <span className="text-sm text-green-600 font-semibold mt-1 flex items-center">↗ <span className="ml-1">30.6%</span></span>
                        </div>

                        <a href="#" className="mt-3 text-blue-600 text-base font-semibold hover:underline">View More</a>
                    </div>
                </div>



                {/* Card 3: Visitors */}
                <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between min-h-[340px] transition-all">
                    <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xl text-gray-900">Visitors</span>
                        <div className="relative">
                            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4  text-base font-medium pr-8 focus:outline-none">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" ><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center ">
                        <RangeChart />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex gap-5">
                            <span className="text-2xl font-extrabold text-gray-900">$30200</span>
                            <span className="text-sm text-red-500 font-semibold mt-1 flex items-center">↘ <span className="ml-1">30.6%</span></span>
                        </div>
                        <a href="#" className="mt-3 text-blue-600 text-base font-semibold hover:underline">View More</a>
                    </div>
                </div>
            </div>

            <div className="py-5 border border-gray-200 rounded-2xl mt-5 bg-white px-5 ">
                <div className="flex gap-7 py-2 border-b border-gray-200 mb-5 pl-7" >

                    <p>Overview</p>
                    <p>Marketing</p>
                    <p>Project</p>
                    <p>Order</p>

                </div>
                <div className="grid grid-cols-[70%_30%]">
                    <div>
                        <CategoryChart />
                    </div>
                    <div className="flex flex-col gap-6">
                        {overViewSide.map(({ id, icon, title, mainValue, change, changeColor, changePercent, changePercentColor }) => (
                            <div key={id} className="flex items-center justify-between py-4 border-b border-[var(--color-text-gray)]">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-light)]">
                                        {icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[var(--color-text-gray)]">{title}</div>
                                        <div className="text-xl font-semibold text-[var( --color-text-black)]"> {mainValue}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <div>
                                        {change}
                                    </div>
                                    <div
                                        className={
                                            Number(changePercent.replace(/[^\d.-]/g, '')) < 0
                                                ? 'text-red-500'
                                                : Number(changePercent.replace(/[^\d.-]/g, '')) > 0
                                                    ? 'text-green-600'
                                                    : 'text-orange-500'
                                        }
                                    >
                                        {changePercent}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>


    )
}