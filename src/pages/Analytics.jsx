import { useEffect, useState } from "react"
import BarChart from "../components/charts/BarChart.jsx"
import LineChart from "../components/reCharts/LineChart.jsx"
import RangeChart from "../components/reCharts/RangeChart.jsx"
import CategoryChart from "../components/reCharts/CategoryChart.jsx"
import { BarChart3, TrendingUp, ShoppingCart, BadgeDollarSign } from "lucide-react";
import { BsBarChart } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import ProductOverview from "../components/reCharts/ProductOverview.jsx"
import { FaPlus } from "react-icons/fa6";
import phonePay from "../../public/asset/images/logos/phonepay.png"
import gogolepay from "../../public/asset/images/logos/googlepat.png"
import paypal from "../../public/asset/images/logos/paypal.png"
import { BsThreeDotsVertical } from "react-icons/bs";
const BarChartData = [
    {
        data: [10, 5, 4, 20, 22, 30, 24, 15, 46, 25, 11, 25, 45]
    }
]


const overViewSide = [
    {
        "id": 1,
        "icon": <BsBarChart />,
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



const paymentHistory = [
    {
        "id": 1,
        "image": paypal,
        "brandName": "PayPal",
        "amount": "+210,000",
        "changePercentage": "+30.6%",
        "threeDotIcon": <BsThreeDotsVertical />
    },
    {
        "id": 2,
        "image": gogolepay,
        "brandName": "GPay",
        "amount": "-2,000",
        "changePercentage": "-30.6%",
        "threeDotIcon": <BsThreeDotsVertical />
    },
    {
        "id": 3,
        "image": phonePay,
        "brandName": "PhonePe",
        "amount": "-2,000",
        "changePercentage": "-30.6%",
        "threeDotIcon": <BsThreeDotsVertical />
    }
]



export default function Analytics() {
    const [barChartColor, setBarChartColor] = useState('#4f46e5');

    useEffect(() => {
        const color = getComputedStyle(document.documentElement)
            .getPropertyValue('--color-chart-blue')
            .trim();
        if (color) {
            setBarChartColor(color);
        }
    }, []);

    return (
        <div className="bg-[#f7f9fb] min-h-screen w-full ">
            {/* heading */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Analytics</h1>
            </div>
            {/* smallGraphs */}


            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-3">

                {/* Card 1: New Orders */}
                <div className="w-full bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between min-h-auto transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-medium text-[.9rem] lg:text-[1rem] text-gray-900">New Orders</span>
                        <div className="relative">
                            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-1 font-medium text-[.7rem] lg:text-[1rem] pr-8 focus:outline-none">
                                <option>Today</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                            </select>
                            <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                    <div className="w-full flex-1 flex items-center justify-center ">
                        <BarChart data={BarChartData[0].data} color={barChartColor} />
                    </div>
                    <div className="mt-1 flex flex-col items-center   ">
                        <div className="flex gap-5 pt-2">
                            <span className=" text-[.8rem] lg:text-[1rem] font-bold text-gray-900">$30200</span>
                            <span className="  text-[.8rem] lg:text-[1rem]  text-sm text-blue-600 font-semibold mt-1 flex items-center">↗ <span className="ml-1">30.6%</span></span>
                        </div>

                        <a href="#" className="mt-3 text-blue-600  text-[.7rem] lg:text-[1rem] font-semibold hover:underline">View More</a>
                    </div>
                </div>

                {/* Card 2: New Users */}
                <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between min-h-[12rem] transition-all">
                    <div className="flex items-center justify-between mb-4">
                        <span className="font-medium text-[.9rem] lg:text-[1rem] text-gray-900">New Users</span>
                        <div className="relative">
                            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-1 font-medium text-[.7rem] lg:text-[1rem] pr-8 focus:outline-none">
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
                        <div className="flex gap-5 pt-2">
                            <span className="text-[.8rem] lg:text-[1rem] font-bold text-gray-900">$30200</span>
                            <span className="text-[.8rem] lg:text-[1rem] text-green-600 font-semibold mt-1 flex items-center">↗ <span className="ml-1">30.6%</span></span>
                        </div>

                        <a href="#" className="mt-3 text-blue-600 text-[.7rem] lg:text-[1rem] font-semibold hover:underline">View More</a>
                    </div>
                </div>
                
                {/* Card 3: Visitors */}
                <div className="bg-white rounded-2xl shadow border border-gray-200 p-5 flex flex-col justify-between min-h-[340px] transition-all">
                    <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-[1rem] lg:text-[1rem] text-gray-900">Visitors</span>
                        <div className="relative">
                            <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 font-medium text-[.7rem] lg:text-[1rem] pr-8 focus:outline-none">
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
                        <div className="flex gap-5 pt-2">
                            <span className="text-[.8rem] lg:text-[1rem] font-bold text-gray-900">$30200</span>
                            <span className="text-[.8rem] lg:text-[1rem] text-red-500 font-semibold mt-1 flex items-center">↘ <span className="ml-1">30.6%</span></span>
                        </div>
                        <a href="#" className="mt-3 text-blue-600 text-[.7rem] lg:text-[1rem] font-semibold hover:underline">View More</a>
                    </div>
                </div>
            </div>

            <div className="py-5 border border-gray-200 rounded-2xl mt-5 bg-white px-5 ">
                <div className="flex gap-7 py-2 border-b border-gray-200 mb-5 pl-7 flex-wrap lg:flex-nowrap" >
                    <p className="cursor-pointer">Overview</p>
                    <p className="cursor-pointer">Marketing</p>
                    <p className="cursor-pointer">Project</p>
                    <p className="cursor-pointer">Order</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[65%_30%] sm:gap-5 lg:gap-[5%] ">

                    <div className="">
                        <div className="flex items-center md:justify-end mb-4 w-full border border-black">
                            <div className="flex items-end gap-2 ">
                                <button className="cursor-pointer md:px-4 md:py-2 px-1 py-1 rounded-sm  md:rounded-full bg-[#5f707e] text-white font-medium text-[.7rem] lg:text-sm transition-all hover:shadow-md">
                                    This week
                                </button>
                                <button className="cursor-pointer md:px-4 md:py-2  px-1 py-1 rounded-sm rounded-full border border-[var(--color-border-light)] text-[var(--color-text-gray)] font-medium   text-[.7rem] lg:text-sm text-sm transition-all hover:bg-[var(--color-hover-bg)]">
                                    Last week
                                </button>
                                <button className="cursor-pointer md:p-2 rounded-lg border border-[var(--color-border-light)] text-[var(--color-text-gray)] transition-all hover:bg-[var(--color-hover-bg)]">
                                    <LuExternalLink size={18} />
                                </button>
                                <button className="cursor-pointer  md:p-2 rounded-lg border border-[var(--color-border-light)] text-[var(--color-text-gray)] transition-all hover:bg-[var(--color-hover-bg)]">
                                    <FiMaximize2 size={18} />
                                </button>
                                <button className="cursor-pointer  md:p-2 rounded-lg border border-[var(--color-border-light)] text-[var(--color-text-gray)] transition-all hover:bg-[var(--color-hover-bg)]">
                                    <BsThreeDots size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[20rem]">
                            <CategoryChart />
                        </div>
                    </div>


                    <div className="flex flex-col gap-4  justify-center ">
                        {overViewSide.map(({ id, icon, title, mainValue, change, changeColor, changePercent, changePercentColor }) => (
                            <div key={id} className="b flex items-center justify-between py-2 border-b border-gray-200">
                                <div className="flex items-end gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 py-3 px-3 rounded-[.3rem] bg-[#eff0f2] text-[#5f707e]">
                                        {icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[var(--color-text-gray)]">{title}</div>
                                        <div className="text-[1rem] font-semibold text-[var(--color-text-black)]"> {mainValue}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start">
                                    <div className="text-[1rem] font-medium">
                                        {change}
                                    </div>
                                    <div
                                        className={
                                            Number(changePercent.replace(/[^\d.-]/g, '')) < 0
                                                ? 'text-red-500'
                                                : Number(changePercent.replace(/[^\d.-]/g, '')) > 0
                                                    ? 'text-green-600'
                                                    : 'text-orange-500'}>
                                        {changePercent}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>




            </div>

            {/* Product Overview:  */}
            <div className="products grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 mt-6">
                <div>
                    <ProductOverview />
                </div>
                {/* payment History &  Total Earning  */}
                <div className="bg-white rounded-xl border border-gray-200 shadow">
                    <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200">
                        <p className="text-[1rem] font-semibold text-[var(--color-text-black)]">Payment History</p>
                        <button className="p-1.5 rounded-lg hover:bg-[var(--color-hover-bg)] transition-colors">
                            <FaPlus className="text-[var(--color-text-gray)]" size={16} />
                        </button>
                    </div>
                    <div className="px-5">
                        {paymentHistory.map(({ id, image, brandName, amount, changePercentage, threeDotIcon }) => (
                            <div key={id} className="flex items-center justify-between py-4 border-b border-[var(--color-border-light)] last:border-b-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[var(--color-hover-bg)] rounded-lg">
                                        <img src={image} alt={brandName} className="w-6 h-6 object-contain" />
                                    </div>
                                    <div>
                                        <p className="text-[1rem] font-semibold text-[var(--color-text-black)]">{brandName}</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[1rem] font-medium text-[var(--color-text-black)]">{amount}</p>
                                            <p className={`text-[1rem] font-medium ${amount.startsWith('+') ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'}`}>
                                                {changePercentage}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button className="p-2 text-[var(--color-text-gray)] hover:text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] rounded-lg transition-colors">
                                    {threeDotIcon}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}