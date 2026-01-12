import { LuEye } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdClose, MdMoreVert } from "react-icons/md";
import { useState, useCallback } from "react";
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import cardImage from "../../public/asset/images/cardImage.png"
import cardImage3 from "../assets/images/imgcard1.png"
import cardimage2 from "../assets/images/imgcard2.png"
import foodimage from "../assets/images/food.png"
import healthimage from "../assets/images/healthcare.png"
import shoopingImage from "../assets/images/shopping.png"
import travelImage from "../assets/images/travel.png"
import { icons } from "lucide-react";
import { Plus } from "lucide-react";
import { Circle } from "lucide-react";

const expenditureData = [
    {
        id: 1,
        category: "Food & Drink",
        icon: foodimage,
        progress: 65,
        amount: 1000
    },
    {
        id: 2,
        category: "Travel",
        icon: travelImage,
        progress: 30,
        amount: 400
    },
    {
        id: 3,
        category: "Shopping",
        icon: shoopingImage,
        progress: 52,
        amount: 900
    },
    {
        id: 4,
        category: "Healthcare",
        icon: healthimage,
        progress: 26,
        amount: 250
    }
];



const payments = [
    {
        id: 1,
        user: { name: "Airi Satou", avatar: "https://i.pravatar.cc/150?u=1" },
        description: "Salary Payment",
        date: "2023/02/07",
        time: "09:05 PM",
        amount: 950.54,
        status: "Completed",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 2,
        user: { name: "Ashton Cox", avatar: "https://i.pravatar.cc/150?u=2" },
        description: "Project Payment",
        date: "2023/02/01",
        time: "02:14 PM",
        amount: 520.3,
        status: "Completed",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 3,
        user: { name: "Bradley Greer", avatar: "https://i.pravatar.cc/150?u=3" },
        description: "YouTube Subscribe",
        date: "2023/01/22",
        time: "10:32 AM",
        amount: 100,
        status: "Pending",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 4,
        user: { name: "Brielle Williamson", avatar: "https://i.pravatar.cc/150?u=4" },
        description: "Salary Payment",
        date: "2023/02/07",
        time: "09:05 PM",
        amount: 760.25,
        status: "In Progress",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 5,
        user: { name: "Airi Satou", avatar: "https://i.pravatar.cc/150?u=1" },
        description: "Spotify Subscribe",
        date: "2023/02/07",
        time: "09:05 PM",
        amount: 60.05,
        status: "Canceled",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 6,
        user: { name: "Charde Marshall", avatar: "https://i.pravatar.cc/150?u=6" },
        description: "Freelance Work",
        date: "2023/02/08",
        time: "11:15 AM",
        amount: 1250,
        status: "Completed",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 7,
        user: { name: "Colleen Hurst", avatar: "https://i.pravatar.cc/150?u=7" },
        description: "Software License",
        date: "2023/02/09",
        time: "04:45 PM",
        amount: 299.99,
        status: "Pending",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 8,
        user: { name: "Dai Rios", avatar: "https://i.pravatar.cc/150?u=8" },
        description: "Amazon Purchase",
        date: "2023/02/10",
        time: "08:20 AM",
        amount: 45.5,
        status: "Completed",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 9,
        user: { name: "Garrett Winters", avatar: "https://i.pravatar.cc/150?u=9" },
        description: "Consulting Fee",
        date: "2023/02/11",
        time: "01:30 PM",
        amount: 2100,
        status: "In Progress",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
    {
        id: 10,
        user: { name: "Herrod Chandler", avatar: "https://i.pravatar.cc/150?u=10" },
        description: "Web Hosting",
        date: "2023/02/12",
        time: "10:00 AM",
        amount: 120,
        status: "Canceled",
        icons: { view: <LuEye className="w-5 h-5" />, edit: <FaRegEdit className="w-5 h-5" />, delete: <RiDeleteBin5Line className="w-5 h-5" /> },
    },
];

const statusStyles = {
    Completed: "bg-[var(--color-success)] text-[var(--color-text-white)]",
    Pending: "bg-[var(--color-warning)] text-[var(--color-text-white)]",
    "In Progress": "bg-[var(--color-primary)] text-[var(--color-text-white)]",
    Canceled: "bg-[var(--color-danger)] text-[var(--color-text-white)]",
};





export default function Finance() {
    const [isActiveEdit, setIsActtiveEdit] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [selectedOption, setSelectedOption] = useState("Weekly");

    const getActiveCard = useCallback((id) => {
        return payments.find(item => item.id === id);
    }, []);

    const handleView = useCallback((id) => {
        console.log("View button clicked for id:", id);
        // Add your view logic here
    }, []);

    const handleEdit = useCallback((id) => {
        console.log("Edit button clicked for id:", id);
        const activeCard = getActiveCard(id);
        if (activeCard) {
            setEditFormData({
                id: activeCard.id,
                userName: activeCard.user.name,
                description: activeCard.description,
                date: activeCard.date,
                time: activeCard.time,
                amount: activeCard.amount,
                status: activeCard.status,
            });
            setIsActtiveEdit(id);
        }
    }, [getActiveCard]);

    const handleDelete = useCallback((id) => {
        console.log("Delete button clicked for id:", id);
        // Add your delete logic here (e.g., API call, state update)
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsActtiveEdit(null);
        setEditFormData({});
    }, []);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSaveChanges = useCallback(() => {
        handleCloseModal();
    }, [editFormData, handleCloseModal]);


    const data = [
        {
            name: '1',
            uv: 10,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '2',
            uv: 80,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '3',
            uv: 90,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '4',
            uv: 140,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '5',
            uv: 134,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '6',
            uv: 110,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '7',
            uv: 90,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '7',
            uv: 120,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '7',
            uv: 30,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '7',
            uv: 75,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '7',
            uv: 30,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '7',
            uv: 10,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
        <div className="bg-[var(--color-page-bg)]">
            <div className="bg-[var(--color-section-bg)] shadow-sm rounded-2xl border border-[var(--color-border-light)] overflow-hidden h-[80vh] overflow-y-auto scrollbar-hide">
                <div className="px-6 py-5 border-b border-[var(--color-border-light)] flex justify-between">
                    <h1 className="text-xl font-semibold text-[var(--color-text-black)]">Transactions History</h1>
                    <h1 className="text-[1rem] text-blue-500 font-semibold cursor-pointer">View All</h1>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-[var(--color-hover-bg)] text-center text-[var(--color-text-black)]">
                            <tr>
                                <th className="px-6 py-3 font-semibold">USER NAME</th>
                                <th className="px-6 py-3 font-semibold">CATEGORY</th>
                                <th className="px-6 py-3 font-semibold">DATE/TIME</th>
                                <th className="px-6 py-3 font-semibold">AMOUNT</th>
                                <th className="px-6 py-3 font-semibold">STATUS</th>
                                <th className="px-6 py-3 font-semibold text-right">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--color-border-light)] text-center">
                            {payments.map((item) => (
                                <tr key={item.id} className="hover:bg-[var(--color-hover-bg)] transition-colors text-center border-b border-[var(--color-border-light)]">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.user.avatar}
                                                alt={item.user.name}
                                                className="w-10 h-10 rounded-full shadow-sm"
                                            />
                                            <span className="font-semibold text-[var(--color-text-black)] text-[15px] text-center">{item.user.name}</span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-[var(--color-text-gray)] text-[15px]">{item.description}</td>

                                    <td className="px-6 py-4 text-[var(--color-text-muted)] text-[15px]">
                                        <div className="leading-tight">
                                            <div className="font-medium text-[var(--color-text-black)]">{item.date}</div>
                                            <div className="text-[var(--color-text-gray)]">{item.time}</div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 text-[var(--color-text-black)] font-semibold text-[15px]">
                                        ${item.amount.toFixed(2)}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[item.status] || "bg-[var(--color-border-light)] text-[var(--color-text-black)]"}`}>
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="px-4 py-2">
                                        <div className="flex justify-end items-center gap-4 text-[var(--color-text-gray)]">
                                            <button className="hover:text-[var(--color-primary)] transition-colors"
                                                onClick={() => handleView(item.id)}
                                            >
                                                {item.icons.view}
                                            </button>
                                            <button className="hover:text-[var(--color-primary)] transition-colors"
                                                onClick={() => handleEdit(item.id)}
                                            >
                                                {item.icons.edit}
                                            </button>
                                            <button className="hover:text-[var(--color-danger)] transition-colors"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                {item.icons.delete}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Edit Modal */}
                {isActiveEdit && (
                    <div className="fixed inset-0 bg-grey-200 bg-opacity-5 flex items-center justify-center z-50 p-4 backdrop-blur-[1px]">
                        <div className="bg-[var(--color-section-bg)] rounded-2xl shadow-2xl w-[70vw] max-h-[90vh] overflow-y-auto border border-[var(--color-border-light)]">
                            <div className="sticky top-0 bg-[var(--color-section-bg)] border-b border-[var(--color-border-light)] px-6 py-4 flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-[var(--color-text-black)]">Edit Transaction</h2>
                                <button
                                    onClick={handleCloseModal}
                                    className="text-[var(--color-text-muted)] hover:text-[var(--color-text-black)] transition"
                                    aria-label="Close"
                                >
                                    <MdClose className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* User Name */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-black)] mb-1">User Name</label>
                                    <input
                                        type="text"
                                        name="userName"
                                        value={editFormData.userName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-[var(--color-border-light)] bg-[var(--color-hover-bg)] text-[var(--color-text-black)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                        disabled
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-black)] mb-1">Category</label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={editFormData.description}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-[var(--color-border-light)] bg-[var(--color-section-bg)] text-[var(--color-text-black)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-black)] mb-1">Date</label>
                                    <input
                                        type="text"
                                        name="date"
                                        value={editFormData.date}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-[var(--color-border-light)] bg-[var(--color-section-bg)] text-[var(--color-text-black)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-black)] mb-1">Time</label>
                                    <input
                                        type="text"
                                        name="time"
                                        value={editFormData.time}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-[var(--color-border-light)] bg-[var(--color-section-bg)] text-[var(--color-text-black)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    />
                                </div>

                                {/* Amount */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-black)] mb-1">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={editFormData.amount}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-[var(--color-border-light)] bg-[var(--color-section-bg)] text-[var(--color-text-black)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    />
                                </div>

                                {/* Status */}
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-black)] mb-1">Status</label>
                                    <select
                                        name="status"
                                        value={editFormData.status}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-[var(--color-border-light)] bg-[var(--color-section-bg)] text-[var(--color-text-black)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                                    >
                                        <option value="Completed">Completed</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Canceled">Canceled</option>
                                    </select>
                                </div>
                            </div>

                            <div className="border-t border-[var(--color-border-light)] px-6 py-4 flex gap-3 justify-end">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 text-[var(--color-text-black)] border border-[var(--color-border-light)] rounded-lg hover:bg-[var(--color-hover-bg)] transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSaveChanges}
                                    className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-text-white)] rounded-lg hover:bg-[var(--color-primary-dark)] transition"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}


            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 md:my-10 px-4 md:px-0">
                {/* Cashflow Section */}
                <div className="lg:col-span-2 w-full bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-2xl flex flex-col">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 md:px-8 md:py-6 gap-4">
                        <div className="gap-1 flex flex-col">
                            <h1 className="font-bold text-lg md:text-xl text-[var(--color-text-black)]">Cashflow</h1>
                            <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-text-gray)]">
                                <span className="bg-[var(--color-success)] text-[var(--color-text-white)] px-2 py-0.5 rounded-full flex items-center">
                                    ↑ 5.44%
                                </span>
                                <span>vs last month</span>
                            </div>
                        </div>

                        <div className="w-full sm:w-auto">
                            <select
                                name="option"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="w-full sm:w-auto appearance-none px-4 py-2 text-sm font-medium bg-[var(--color-section-bg)] text-[var(--color-text-black)] rounded-lg border border-[var(--color-border-light)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                            >
                                <option value="Today">Today</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                        </div>
                    </div>

                    <div className="h-[300px] w-full p-4 md:px-8 pb-6">
                        <BarChart
                            width={500}
                            height={300}
                            style={{ width: '100%', height: '100%' }}
                            data={data}
                            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--color-chart-blue)" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="var(--color-chart-blue)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Bar
                                dataKey="uv"
                                fill="var(--color-chart-blue)"
                                radius={[4, 4, 4, 4]}
                                barSize={40}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'var(--color-section-bg)',
                                    borderColor: 'var(--color-border-light)',
                                    borderRadius: '8px',
                                    color: 'var(--color-text-black)',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }}
                                cursor={{ fill: 'var(--color-hover-bg)' }}
                            />
                            <XAxis
                                dataKey="name"
                                stroke="var(--color-text-muted)"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="var(--color-text-muted)"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                        </BarChart>
                    </div>
                </div>

                {/* My Card Section */}
                <div className="lg:col-span-1 w-full bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-2xl p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-lg text-[var(--color-text-black)]">My Card</h2>
                        <button className="text-[var(--color-text-gray)] hover:bg-[var(--color-hover-bg)] p-1 rounded-full transition-colors">
                            <MdMoreVert className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative w-full aspect-[1.58] rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300">
                        <img
                            src={cardImage}
                            alt="Credit Card"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div> {/* Subtle overlay */}

                        <div className="relative h-full flex flex-col justify-between p-6 text-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-xs opacity-80 uppercase tracking-wider mb-1">Card Name</p>
                                    <p className="font-semibold tracking-wide">Kamal Vishwakarma</p>
                                </div>
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-white/30"></div>
                                    <div className="w-6 h-6 rounded-full bg-white/30"></div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-xl sm:text-2xl font-mono tracking-widest opacity-90">
                                    <span>****</span>
                                    <span>****</span>
                                    <span>****</span>
                                    <span>8361</span>
                                </div>

                                <div className="flex gap-8">
                                    <div>
                                        <p className="text-[10px] uppercase opacity-70 mb-0.5">Exp Date</p>
                                        <p className="font-mono text-sm">11/31</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase opacity-70 mb-0.5">CVV</p>
                                        <p className="font-mono text-sm">***</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center pt-6 border-t border-[var(--color-border-light)]">
                        <h3 className="text-3xl font-bold text-[var(--color-text-black)] mb-1">
                            $1,480.00
                        </h3>
                        <p className="text-sm font-medium text-[var(--color-text-gray)]">
                            Total Balance
                        </p>
                    </div>
                </div>



            </div>

            {/* Expenditure & Accounts */}
            <div className="flex flex-col xl:flex-row gap-6 mt-6 px-4 md:px-0 mb-10 w-full">
                {/* Accounts Section Placeholder */}
                {/* Accounts Section Placeholder */}
                <div className="w-full xl:w-[35%] bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-2xl p-6 min-h-[200px] flex flex-col justify-center gap-4">
                    <div className="flex justify-between items-center w-full px-4 py-3 border border-[var(--color-border-light)] rounded-2xl bg-[var(--color-section-bg)] shadow-sm">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={cardImage3} alt="Account 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[var(--color-success)] flex items-center gap-2">
                            <Circle className="w-3 h-3 fill-current" />
                            <p className="text-sm font-medium">Active</p>
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="font-bold text-[var(--color-text-black)]">12,920.00</p>
                            <p className="text-xs text-[var(--color-text-gray)]">US Dollar</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center w-full px-4 py-3 border border-[var(--color-border-light)] rounded-2xl bg-[var(--color-section-bg)] shadow-sm">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={cardimage2} alt="Account 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-[var(--color-success)] flex items-center gap-2">
                            <Circle className="w-3 h-3 fill-current" />
                            <p className="text-sm font-medium">Active</p>
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="font-bold text-[var(--color-text-black)]">12,920.00</p>
                            <p className="text-xs text-[var(--color-text-gray)]">US Dollar</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full p-4 border border-[var(--color-border-light)] border-dashed rounded-2xl cursor-pointer hover:bg-[var(--color-hover-bg)] transition-colors">
                        <div className="bg-[var(--color-text-black)] text-[var(--color-section-bg)] rounded-full p-2 mb-2">
                            <Plus className="w-5 h-5" />
                        </div>
                        <p className="text-sm font-medium text-[var(--color-text-gray)]">Add To Account</p>
                    </div>
                </div>

                {/* Expenditure Section */}
                <div className="w-full xl:w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {expenditureData.map(({ id, category, icon, progress, amount }) => (
                        <div key={id} className="bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-2xl p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-[var(--color-hover-bg)] rounded-xl group-hover:scale-110 transition-transform">
                                    <img src={icon} alt={category} className="w-8 h-8 object-contain" />
                                </div>
                                <button className="text-[var(--color-text-gray)] hover:text-[var(--color-text-black)] hover:bg-[var(--color-hover-bg)] p-1 rounded-full transition-colors">
                                    <MdMoreVert className="w-5 h-5" />
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-[var(--color-text-black)] mb-6 whitespace-nowrap overflow-hidden text-ellipsis">{category}</h3>

                                <div className="space-y-3 bg-[#1e293b] p-4 rounded-xl">
                                    <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium">
                                        <span className="text-gray-300">{progress}%</span>
                                        <span className="text-white text-base">${amount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div >
    );
}
