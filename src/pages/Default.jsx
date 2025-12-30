import React from 'react';
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

export default function Default() {

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

    return (
        <div className="p-6 space-y-6 bg-[var(--color-page-bg)] min-h-screen">
            {/* Banner Section */}
            <div className="relative overflow-hidden rounded-2xl bg-[image:var(--background-image-banner-gradient)] p-8 text-[var(--color-text-white)] shadow-lg">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-3xl font-bold mb-2">Explore Redesigned Able Pro</h1>
                    <p className="text-blue-100 mb-6 text-sm opacity-90">
                        The Brand new User Interface with power of Bootstrap Components.
                        Explore the Endless possibilities with Able Pro.
                    </p>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors border border-white/30 backdrop-blur-sm">
                        Download
                    </button>
                </div>

                {/* Decorative Circles/Rocket Placeholder */}
                <div className="absolute right-0 top-0 h-full w-1/3 flex items-center justify-center">
                    {/* Using a Rocket icon as a placeholder for the 3D rocket image */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl"></div>
                        <Rocket size={120} className="text-white/90 transform rotate-45 drop-shadow-lg" />
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-[var(--color-section-bg)] rounded-xl p-5 shadow-sm border border-[var(--color-border-light)] hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2.5 rounded-lg ${stat.iconBg}`}>
                                    {stat.icon}
                                </div>
                                <span className="font-medium text-[var(--color-text-gray)] text-sm">{stat.title}</span>
                            </div>
                            <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        <div className="flex items-end justify-between gap-4">
                            <div className="w-1/2">
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
            <div className='grid lg:grid-cols-[70%_30%] grid-cols-1 gap-6'>
                {/* Left Column: Repeat Customer Rate Chart */}
                <div className='bg-[var(--color-section-bg)] rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]'>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-[var(--color-text-black)]">Repeat customer rate</h3>
                        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-2 mb-4">
                        <span className="text-lg font-bold text-[var(--color-text-black)]">5.44%</span>
                        <span className="bg-[var(--color-success)] text-[var(--color-text-white)] text-xs px-2 py-0.5 rounded-full font-medium">+2.6%</span>
                    </div>
                    <div className="h-[300px] w-full">
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

                {/* Right Column: Project - Able Pro */}
                <div className='bg-[var(--color-section-bg)] rounded-xl p-6 shadow-sm border border-[var(--color-border-light)] flex flex-col h-full relative'>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-[var(--color-text-black)]">
                            <span className="text-[var(--color-primary)]">Project</span> - Able Pro
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

                <div className='w-[77vw] m-auto grid grid-cols-1 lg:grid-cols-[67%_29%] gap-[2q%] '>
                    <div className="overview w-full bg-[var(--color-text-white)] border-[.1rem] border-[var(--color-border-light)] rounded-xl">
                        <div className='flex justify-between items-center px-2'>
                            <p className='font-semibold text-[1.2rem]'>Project Overview</p>
                            <BsThreeDots className='font-semibold text-[1.2rem]' />
                        </div>
                        <div className="graph flex justify-between items-center ">
                            <div className="first flex justify-between items-center p-2">
                                <div>
                                    <div className=''>
                                        <p className='text-[var(--color-text-gray)]'>Total Task</p>
                                        <p className='font-bold'>36,548</p>
                                    </div>
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
                                        width='10rem'
                                        height='4rem'

                                    />

                                </div>

                            </div>
                            <div className="Second flex p-2">
                                <div>
                                    <div>
                                        <p className='text-[var(--color-text-gray)]'>Total Task</p>
                                        <p className='font-bold'>36,548</p>
                                    </div>
                                </div>
                                <div>
                                    <LineChart
                                        labels={[1, 7, 1, 2, 2, 1, 1]}
                                        data={[1, 7, 1, 2, 2, 1, 1]}
                                        min={0}
                                        max={10}
                                        showYAxis={false}
                                        showXAxis={false}
                                        lineColor="red"
                                        width='10rem'
                                        height='4rem'

                                    />

                                </div>

                            </div>
                            <button className='flex bg-[var(--color-primary-dark)] items-center p-0 text-white px-20 gap-2 mr-3 h-[3rem] rounded-full'>
                                <GoPlus /> <p className='font-semibold '>Add project</p>
                            </button>
                        </div>

                    </div>
                    <div className='w-full border-[.1rem] border-[var(--color-border-light)] flex  flex-col justify-between items-center bg-[var(--color-text-white)] rounded-xl py-2 gap-5'>
                        <div className='flex justify-between items-center w-full px-5'>
                            <div>
                                <div className="icon py-2 px-4 rounded-xl text-[var(--color-primary)] bg-[var(--color-primary-light)]">@</div>
                            </div>
                            <div className="">
                                <p className='font-bold text-[1rem]'>Somnath</p>
                                <p className='font-[.1rem]'>@shankarPrabhu</p>

                            </div>
                            <div className="icon">
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                        <div className='flex  justify-between w-full px-5'>
                            <div className="logos flex">
                                <img src={avatar} alt="" className='-mr-5 hover:z-20 w-10 h-10 border-2 border-black  rounded-full border-[.1rem] border-white' />
                                <img src={avatar} alt="" className='-mr-5 hover:z-20 w-10 h-10  rounded-full border-[.1rem] border-white' />
                                <img src={avatar} alt="" className='-mr-5 hover:z-20 w-10 h-10 rounded-full border-[.1rem] border-white' />
                                <img src={avatar} alt="" className='-mr-5 hover:z-20 w-10 h-10 rounded-full border-[.1rem] border-white' />
                                <img src={avatar} alt="" className='-mr-5 hover:z-20 w-10 h-10 rounded-full border-[.1rem] border-white' />
                            </div>
                            <div className='py-2 px-3 bg-[var(--color-primary)] flex justify-center items-center text-[var(--color-text-white)] font-bold rounded-full'>
                                <GoPlus />

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            {/* Transaction  & Total Income      */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* Transactions Card */}
                <TransactionCard
                    allTransactions={transactionsImage1}
                    successTransactions={transactionsImage2}
                    pendingTransactions={transactionsImage3}
                />

                {/* Total Income Card */}
                <div className='bg-[var(--color-section-bg)] rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]'>
                    {/* Header */}
                    <div className='flex justify-between items-center mb-6'>
                        <h3 className='text-lg font-semibold text-[var(--color-text-black)]'>Total Income</h3>
                        <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                            <MoreVertical size={20} />
                        </button>
                    </div>

                    {/* Doughnut Chart */}
                    <div className='h-[280px] w-full flex justify-center items-center mb-6'>
                        <div className='w-[260px] h-[260px]' style={{
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                            transform: 'perspective(500px) rotateX(5deg)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <DoughtnoutChart />
                        </div>
                    </div>

                    {/* Legend Grid */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                            <div className='flex items-center gap-2 mb-2'>
                                <span className='w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]'></span>
                                <span className='text-[var(--color-text-gray)] text-sm'>Income</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold text-[var(--color-text-black)]'>$23,876</span>
                                <span className='text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                            </div>
                        </div>
                        <div className='p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                            <div className='flex items-center gap-2 mb-2'>
                                <span className='w-2.5 h-2.5 rounded-full bg-[var(--color-warning)]'></span>
                                <span className='text-[var(--color-text-gray)] text-sm'>Rent</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold text-[var(--color-text-black)]'>$23,876</span>
                                <span className='text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                            </div>
                        </div>
                        <div className='p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                            <div className='flex items-center gap-2 mb-2'>
                                <span className='w-2.5 h-2.5 rounded-full bg-[var(--color-success)]'></span>
                                <span className='text-[var(--color-text-gray)] text-sm'>Download</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold text-[var(--color-text-black)]'>$23,876</span>
                                <span className='text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                            </div>
                        </div>
                        <div className='p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                            <div className='flex items-center gap-2 mb-2'>
                                <span className='w-2.5 h-2.5 rounded-full bg-[var(--color-primary-light)]'></span>
                                <span className='text-[var(--color-text-gray)] text-sm'>Views</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-bold text-[var(--color-text-black)]'>$23,876</span>
                                <span className='text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

