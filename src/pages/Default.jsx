import React from 'react';
import { Wallet, FileText, Calendar, Download, MoreVertical, Rocket, Plus, ShoppingCart, PlusIcon } from 'lucide-react';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import avatar from "../../public/asset/images/avatar.jpg"

const Default = () => {
    const stats = [
        {
            id: 1,
            title: "All Earnings",
            value: "$3,020",
            percentage: "30.6%",
            isPositive: true,
            icon: <Wallet size={20} className="text-blue-500" />,
            iconBg: "bg-blue-50",
            chartColor: "#3b82f6", // blue-500
            chartData: [10, 20, 15, 25, 18, 30, 22, 35, 20, 40, 30, 45],
        },
        {
            id: 2,
            title: "Page Views",
            value: "290K+",
            percentage: "30.6%",
            isPositive: true,
            icon: <FileText size={20} className="text-orange-500" />,
            iconBg: "bg-orange-50",
            chartColor: "#f97316", // orange-500
            chartData: [15, 10, 20, 15, 25, 18, 30, 25, 20, 15, 25, 20],
        },
        {
            id: 3,
            title: "Total Task",
            value: "839",
            percentage: "New",
            isPositive: true,
            icon: <Calendar size={20} className="text-green-500" />,
            iconBg: "bg-green-50",
            chartColor: "#22c55e", // green-500
            chartData: [10, 15, 10, 20, 15, 25, 20, 30, 25, 35, 30, 40],
        },
        {
            id: 4,
            title: "Download",
            value: "2,067",
            percentage: "30.6%",
            isPositive: false, // Red arrow in image
            icon: <Download size={20} className="text-red-500" />,
            iconBg: "bg-red-50",
            chartColor: "#ef4444", // red-500
            chartData: [20, 15, 25, 20, 30, 25, 35, 30, 40, 35, 45, 40],
        },
    ];

    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
            {/* Banner Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 p-8 text-white shadow-lg">
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
                    <div key={stat.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2.5 rounded-lg ${stat.iconBg}`}>
                                    {stat.icon}
                                </div>
                                <span className="font-medium text-gray-700 text-sm">{stat.title}</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        <div className="flex items-end justify-between gap-4">
                            <div className="w-1/2">
                                <BarChart data={stat.chartData} color={stat.chartColor} />
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className={`text-xs font-medium flex items-center justify-end gap-1 ${stat.isPositive ? 'text-blue-500' : 'text-red-500'}`}>
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
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100'>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800">Repeat customer rate</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                        </button>
                    </div>
                    <div className="flex items-center justify-end gap-2 mb-4">
                        <span className="text-lg font-bold text-gray-900">5.44%</span>
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">+2.6%</span>
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
                <div className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full relative'>
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-800">
                            <span className="text-blue-600">Project</span> - Able Pro
                        </h3>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Release v1.2.0</span>
                            <span className="text-gray-600">70%</span>
                        </div>
                        <div className="w-full bg-blue-100 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            <span className="text-gray-600 text-sm">Horizontal Layout</span>
                            <span className="ml-auto bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                                📎 2
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            <span className="text-gray-600 text-sm">Invoice Generator</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                            <span className="text-gray-600 text-sm">Package Upgrades</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="text-gray-600 text-sm">Figma Auto Layout</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
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
        </div>
    );
};

export default Default;
