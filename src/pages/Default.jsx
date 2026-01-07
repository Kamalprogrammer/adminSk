import React, { useState } from 'react';
import { Wallet, FileText, Calendar, Download, MoreVertical, Rocket, Plus, ShoppingCart, PlusIcon } from 'lucide-react';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from "../../public/asset/images/avatar.jpg"
import DoughtnoutChart from '../components/charts/DoughtnoutChart';
import TransactionCard from '../components/cards/TransactionCard';
import DefaultTransaction from '../components/DefaultTransaction';



export default function Default() {
    const [iconsClicked, setIconClicked] = useState(null);
    const [chartMenuOpen, setChartMenuOpen] = useState(false);

    const getCssVariable = (varName) => {
        return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    };

    const stats = [
        {
            id: 1,
            title: "All Earnings",
            value: "$3,020",
            percentage: "30.6%",
            isPositive: true,
            icon: <Wallet size={20} className="text-[var(--color-chart-blue)]" />,
            iconBg: "bg-[var(--color-primary-light)]",
            chartColorVar: "--color-chart-blue",
            chartData: [10, 20, 15, 25, 18, 30, 22, 35, 20, 40, 30, 45],
        },
        {
            id: 2,
            title: "Page Views",
            value: "290K+",
            percentage: "30.6%",
            isPositive: true,
            icon: <FileText size={20} className="text-[var(--color-chart-orange)]" />,
            iconBg: "bg-[var(--color-warning-light)]",
            chartColorVar: "--color-chart-orange",
            chartData: [15, 10, 20, 15, 25, 18, 30, 25, 20, 15, 25, 20],
        },
        {
            id: 3,
            title: "Total Task",
            value: "839",
            percentage: "New",
            isPositive: true,
            icon: <Calendar size={20} className="text-[var(--color-chart-green)]" />,
            iconBg: "bg-[var(--color-success-light)]",
            chartColorVar: "--color-chart-green",
            chartData: [10, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40],
        },
        {
            id: 4,
            title: "Download",
            value: "2,067",
            percentage: "30.6%",
            isPositive: false,
            icon: <Download size={20} className="text-[var(--color-chart-red)]" />,
            iconBg: "bg-[var(--color-danger-light)]",
            chartColorVar: "--color-chart-red",
            chartData: [20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45, 40],
        },
    ];

    const transactionsImage1 = [
        {
            id: 1,
            name: "Apple Inc.",
            short: "AI",
            reference: "#ABLE-PRO-T00232",
            amount: 210000,
            currency: "$",
            type: "debit",
            changePercent: -10.6,
        },
        {
            id: 2,
            name: "Spotify Music",
            short: "SM",
            reference: "#ABLE-PRO-T10232",
            amount: 10000,
            currency: "-",
            type: "credit",
            changePercent: 30.6,
        },
        {
            id: 3,
            name: "Medium",
            short: "MD",
            time: "06:30 pm",
            amount: 26,
            currency: "-",
            type: "neutral",
            changePercent: 5,
        },
        {
            id: 4,
            name: "Uber",
            short: "U",
            time: "08:40 pm",
            amount: 210000,
            currency: "+",
            type: "credit",
            changePercent: 10.6,
        },
        {
            id: 5,
            name: "Ola Cabs",
            short: "OC",
            time: "07:40 pm",
            amount: 210000,
            currency: "+",
            type: "credit",
            changePercent: 10.6,
        },
    ]
    const transactionsImage2 = [
        {
            id: 1,
            name: "Uber",
            short: "U",
            time: "08:40 pm",
            amount: 210000,
            type: "credit",
            changePercent: 10.6,
        },
        {
            id: 2,
            name: "Ola Cabs",
            short: "OC",
            time: "07:40 pm",
            amount: 210000,
            type: "credit",
            changePercent: 10.6,
        },
        {
            id: 3,
            name: "Apple Inc.",
            short: "AI",
            reference: "#ABLE-PRO-T00232",
            amount: 210000,
            type: "debit",
            changePercent: -10.6,
        },
        {
            id: 4,
            name: "Spotify Music",
            short: "SM",
            reference: "#ABLE-PRO-T10232",
            amount: 10000,
            type: "credit",
            changePercent: 30.6,
        },
        {
            id: 5,
            name: "Medium",
            short: "MD",
            time: "06:30 pm",
            amount: 26,
            type: "neutral",
            changePercent: 5,
        },
    ]

    const transactionsImage3 = [
        {
            id: 1,
            name: "Spotify Music",
            short: "SM",
            reference: "#ABLE-PRO-T10232",
            amount: 10000,
            type: "credit",
            changePercent: 30.6,
        },
        {
            id: 2,
            name: "Medium",
            short: "MD",
            time: "06:30 pm",
            amount: 26,
            type: "neutral",
            changePercent: 5,
        },
        {
            id: 3,
            name: "Uber",
            short: "U",
            time: "08:40 pm",
            amount: 210000,
            type: "credit",
            changePercent: 10.6,
        },
        {
            id: 4,
            name: "Apple Inc.",
            short: "AI",
            reference: "#ABLE-PRO-T00232",
            amount: 210000,
            type: "debit",
            changePercent: -10.6,
        },
        {
            id: 5,
            name: "Ola Cabs",
            short: "OC",
            time: "07:40 pm",
            amount: 210000,
            type: "credit",
            changePercent: 10.6,
        },
    ];

    const handleMoreOption = (id) => {
        // Toggle: if clicking the same card, close it; otherwise open the new one
        setIconClicked((prev) => prev === id ? null : id)
    }

    const handleMoreOptionChart = () => {
        setChartMenuOpen((prev) => !prev)
    }

    return (
        <div className="space-y-6 bg-[var(--color-page-bg)] min-h-screen">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-[var(--color-section-bg)] rounded-xl p-5 shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className=" flex items-center gap-3">
                                <div className={`p-2.5 rounded-lg ${stat.iconBg}`}>
                                    {stat.icon}
                                </div>
                                <span className="font-medium text-[var(--color-text-gray)] text-sm">{stat.title}</span>
                            </div>
                            <button className="relative text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)] ">
                                <MoreVertical size={18} onClick={() => handleMoreOption(stat.id)} />
                                {iconsClicked === stat.id && (
                                    <div className='bg-[var(--color-section-bg)] border border-[var(--color-border-light)] shadow-lg w-[10rem] sm:w-[11rem] md:w-[12rem] py-2 px-1 absolute z-[100] top-6 right-0 sm:-right-2 md:-right-4 rounded-lg'>
                                        <div className='w-full flex flex-col gap-0.5'>
                                            <button className='text-sm sm:text-base px-3 py-2 w-full text-left text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] transition-colors rounded font-medium'>Today</button>
                                            <button className='text-sm sm:text-base px-3 py-2 w-full text-left text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] transition-colors rounded font-medium'>Weekly</button>
                                            <button className='text-sm sm:text-base px-3 py-2 w-full text-left text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] transition-colors rounded font-medium'>Monthly</button>
                                        </div>
                                    </div>
                                )}
                            </button>
                        </div>

                        <div className="grid grid-cols-[70%_30%] items-end justify-between">
                            <div className="h-[8rem] md:h-[7rem] lg:h-[5rem]">
                                <BarChart data={stat.chartData} color={getCssVariable(stat.chartColorVar)} />
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-[var(--color-text-black)] mb-1">{stat.value}</div>
                                <div className={`text-xs font-medium flex items-center justify-end gap-1 ${stat.isPositive ? 'text-[var(--color-primary)]' : 'text-[var(--color-danger)]'}`}>
                                    <span>↗</span> {/* Arrow placeholder */}
                                    {stat.percentage}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Chart & Project Section  */}
            <div className='grid grid-cols-1 w-full lg:grid-cols-[75%_23%]  gap-5 lg:gap-[2%] bg-[var(--color-page-bg)] '>
                {/* Left Column: Repeat Customer Rate Chart */}
                <div className='bg-[var(--color-section-bg)] p-3  rounded-xl md:p-6 shadow-sm border border-[var(--color-border-light)]'>
                    <div className="flex justify-between items-center mb-2 lg:mb-6">
                        <h3 className="text-lg font-semibold text-[var(--color-text-black)]">Repeat customer rate</h3>
                        <button className="relative text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                            <MoreVertical size={20} onClick={handleMoreOptionChart}/>

                             {chartMenuOpen && (
                                    <div className='bg-[var(--color-section-bg)] border border-[var(--color-border-light)] shadow-lg w-[10rem] sm:w-[11rem] md:w-[12rem] py-2 px-1 absolute z-[100] top-6 right-0 sm:-right-2 md:-right-4 rounded-lg'>
                                        <div className='w-full flex flex-col gap-0.5'>
                                            <button className='text-sm sm:text-base px-3 py-2 w-full text-left text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] transition-colors rounded font-medium'>Today</button>
                                            <button className='text-sm sm:text-base px-3 py-2 w-full text-left text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] transition-colors rounded font-medium'>Weekly</button>
                                            <button className='text-sm sm:text-base px-3 py-2 w-full text-left text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] transition-colors rounded font-medium'>Monthly</button>
                                        </div>
                                    </div>
                                )}
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-2 mb-4">
                        <span className="text-[1rem] sm:text-lg font-bold text-[var(--color-text-black)]">5.44%</span>
                        <span className="bg-[var(--color-success)] text-[var(--color-text-white)] text-[1rem] sm:text-lg px-2 py-0.5 rounded-full font-medium">+2.6%</span>
                    </div>
                    <div className="h-[10rem] sm:h-[15rem] lg:h-[18rem] w-full">
                        <LineChart
                            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                            data={[30, 60, 40, 70, 30, 60, 40, 70, 10, 40, 87, 12]}
                            min={20}
                            max={100}
                            showYAxis={true}
                            showXAxis={true}
                            lineColor="#3b82f6"
                            width='100%'
                            height='100%'


                        />
                    </div>
                </div>

                {/* Right Column: */}
                <div className='bg-[var(--color-section-bg)] rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex flex-col h-full relative'>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-[var(--color-text-black)]">
                            <span className="text-[var(--color-primary)]">Update</span> - Now More easy to Use
                        </h3>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-[var(--color-text-gray)]">Release v1.2.0</span>
                            <span className="text-[var(--color-text-gray)]">70%</span>
                        </div>
                        <div className="w-full bg-[var(--color-primary-light)] rounded-full h-1.5">
                            <div className="bg-[var(--color-primary)] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]"></span>
                            <span className="text-[var(--color-text-gray)] text-sm">Horizontal Layout</span>
                            <span className="ml-auto bg-[var(--color-hover-bg)] text-[var(--color-text-muted)] text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                                📎 2
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]"></span>
                            <span className="text-[var(--color-text-gray)] text-sm">Invoice Generator</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-warning)]"></span>
                            <span className="text-[var(--color-text-gray)] text-sm">Package Upgrades</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-success)]"></span>
                            <span className="text-[var(--color-text-gray)] text-sm">Figma Auto Layout</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-[var(--color-text-white)] py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <Plus size={18} />
                            Add task
                        </button>
                    </div>
                </div>

                {/* Project Overview : ProjectOverview + Able Pro */}
                <div className='w-full lg:w-[77vw] grid grid-cols-1 lg:grid-cols-[75.5%_23%] md:gap-[2%] bg-[var(--color-page-bg)]'>
                    <div className="overview w-full bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-2xl p-6 shadow-sm">
                        <div className='flex justify-between items-center mb-6'>
                            <p className='font-semibold text-lg text-[var(--color-text-black)]'>Project Overview</p>
                            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                                <BsThreeDots size={20} />
                            </button>
                        </div>
                        <div className="graph grid grid-cols-1 w-full md:grid-cols-3 gap-2 md:gap-4">
                            <div className="grid grid-cols-[30%_65%] w-full items-center">
                                <div>
                                    <p className='text-[var(--color-text-gray)] text-sm mb-2'>Total Task</p>
                                    <p className='font-bold text-lg text-[var(--color-text-black)]'>36,548</p>
                                </div>

                                <div>
                                    <LineChart
                                        labels={[1, 2, 1, 4, 2, 1, 7, 1]}
                                        data={[1, 2, 1, 4, 2, 1, 7, 1]}
                                        min={0}
                                        max={10}
                                        showYAxis={false}
                                        showXAxis={false}
                                        lineColor="#3b82f6"
                                        width='100%'
                                        height='4rem' />
                                </div>
                            </div>
                            <div className="second grid grid-cols-[30%_65%] w-full items-center">
                                <div>
                                    <p className='text-[var(--color-text-gray)] text-sm mb-2'>Completed</p>
                                    <p className='font-bold text-lg text-[var(--color-text-black)]'>24,586</p>
                                </div>
                                <div>
                                    <LineChart
                                        labels={[1, 7, 1, 2, 2, 1, 1]}
                                        data={[1, 7, 1, 2, 2, 1, 1]}
                                        min={0}
                                        max={10}
                                        showYAxis={false}
                                        showXAxis={false}
                                        lineColor="#ef4444"
                                        width='100%'
                                        height='4rem' />
                                </div>
                            </div>
                            <button className='flex items-center justify-center h-[3rem] gap-2 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary)] text-[var(--color-text-white)] px-4 md:px-6 py-3 rounded-full font-semibold transition-colors flex-shrink-0'>
                                <GoPlus size={18} /> Add project
                            </button>
                        </div>
                    </div>
                    <div className='w-full border border-[var(--color-border-light)] flex flex-col justify-between bg-[var(--color-section-bg)] rounded-2xl p-6 shadow-sm gap-4'>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className="icon py-2 px-4 rounded-lg text-[var(--color-primary)] bg-[var(--color-primary-light)] font-semibold">@</div>
                            </div>3
                            <div className="">
                                <p className='font-bold text-[var(--color-text-black)] text-sm'>Somnath</p>
                                <p className='text-[var(--color-text-gray)] text-xs'>@shankarPrabhu</p>
                            </div>
                            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                                <BsThreeDotsVertical size={18} />
                            </button>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className="logos flex">
                                <img src={avatar} alt="" className='-mr-3 hover:z-20 w-10 h-10 rounded-full border-2 border-[var(--color-border-light)]' />
                                <img src={avatar} alt="" className='-mr-3 hover:z-20 w-10 h-10 rounded-full border-2 border-[var(--color-border-light)]' />
                                <img src={avatar} alt="" className='-mr-3 hover:z-20 w-10 h-10 rounded-full border-2 border-[var(--color-border-light)]' />
                                <img src={avatar} alt="" className='-mr-3 hover:z-20 w-10 h-10 rounded-full border-2 border-[var(--color-border-light)]' />
                                <img src={avatar} alt="" className='-mr-3 hover:z-20 w-10 h-10 rounded-full border-2 border-[var(--color-border-light)]' />
                            </div>
                            <button className='py-2 px-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] flex justify-center items-center text-[var(--color-text-white)] font-bold rounded-full transition-colors'>
                                <GoPlus size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction  & Total Income      */}
            <DefaultTransaction
                allTransactions={transactionsImage1}
                successTransactions={transactionsImage2}
                pendingTransactions={transactionsImage3}
            />


        </div>
    );
};

