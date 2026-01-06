import { LuEye } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState, useCallback } from "react";
import { BarChart, Bar, Tooltip, Legend, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import cardImage from "../../public/asset/images/cardImage.png"
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
        <div className="bg-[var(--color-page-bg)] min-h-screen w-full">
            <div className="bg-[var(--color-section-bg)] shadow-sm rounded-2xl border border-[var(--color-border-light)] overflow-hidden h-[80vh] overflow-y-auto scrollbar-hide">
                <div className="px-6 py-5 border-b border-[var(--color-border-light)]">
                    <h1 className="text-xl font-semibold text-[var(--color-text-black)]">Transactions History</h1>

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
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-[var(--color-section-bg)] rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-[var(--color-border-light)]">
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
            <div className="grid grid-cols-[60%_37%] gap-[3%] my-10 py-10 px-5">
                <div className="w-full bg-[var(--color-section-bg)] border border-[var(--color-border-light)] rounded-2xl">
                    <div className="flex justify-between py-5 px-10">
                        <div className="gap-1 flex flex-col">
                            <h1 className="font-bold text-[var(--color-text-black)]">Cashflow</h1>
                            <div className="text-[.7rem] text-[var(--color-text-gray)]">
                                5.44% <span className="bg-[var(--color-success)] text-[var(--color-text-white)] px-2 py-1 rounded-[.5rem]">5.44%</span>
                            </div>
                        </div>

                        <div>
                            <select
                                name="option"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="appearance-none px-2 py-1 lg:text-[.8rem] bg-[var(--color-section-bg)] text-[var(--color-text-black)] font-semibold rounded-lg border-2 border-[var(--color-primary)] cursor-pointer pr-10 focus:outline-none hover:border-[var(--color-primary)] focus:border-[var(--color-primary)] hover:shadow-[0_0_0_2px_var(--color-primary-light)] focus:shadow-[0_0_0_2px_var(--color-primary-light)]"
                            >
                                    <option value="Today" className="bg-[var(--color-section-bg)] text-[var(--color-text-black)]">Today</option>
                                    <option value="Weekly" className="bg-[var(--color-section-bg)] text-[var(--color-text-black)]">Weekly</option>
                                    <option value="Monthly" className="bg-[var(--color-section-bg)] text-[var(--color-text-black)]">Monthly</option>
                            </select>
                        </div>
                    </div>

                    <div className="h-[20rem]">

                        <BarChart
                            style={{ width: '100%', maxWidth: '100%', maxHeight: '100%', aspectRatio: 1.618 }}
                            responsive
                            data={data}
                            margin={{
                                top: 25,
                                right: 10,
                                left: 10,
                                bottom: 5,
                            }}
                        >
                            <Bar dataKey="uv" fill="var(--color-chart-blue)" barSize={30} radius='10,10,10,10' />
                            <RechartsDevtools />
                            <Tooltip 
                                contentStyle={{
                                    backgroundColor: 'var(--color-section-bg)',
                                    border: '1px solid var(--color-border-light)',
                                    borderRadius: '8px',
                                    color: 'var(--color-text-black)'
                                }}
                            />
                            <XAxis dataKey="name" stroke="var(--color-text-muted)" />
                            <YAxis stroke="var(--color-text-muted)" />
                            {/* <Legend /> */}
                        </BarChart>
                    </div>
                </div>
                <div className="relative">
                    <div>
                        <p className="py-2 font-bold text-[var(--color-text-black)]">My Card</p>
                    </div>
                    <div className="realtive ">
                        <img src={cardImage} alt="" className="absolute w-full h-[60%] px-10 rounded-2xl " />

                    
                        <div className="relative z-100 text-[var(--color-text-white)] top-5 left-5 px-10" >
                            <p className="text-[var(--color-text-gray)] text-[.9rem]">CARD NAME</p>
                            <p className="text-[var(--color-text-white)] ">Kamal Vishwakarma</p>
                            <div className="flex w-[85%] lg:pt-15  justify-between text-[1.5rem]">
                                <p>****</p>
                                <p>****</p>
                                <p>****</p>
                                <p>****</p>
                                <p>ABCD</p>
                            </div>
                            <div className="flex lg:gap-10">
                                <div>
                                    <p>EXP</p>
                                    <p>11/2031</p>
                                </div>
                                <div>
                                    <p>CVV</p>
                                    <p>4848</p>
                                </div>
                            </div>
                            <div className="mt-15 w-full text-center">
                                <h1 className="text-[1.5rem] font-bold text-[var(--color-text-black)]">$1.480.000</h1>
                                <p className="text-[1rem] font-medium text-[var(--color-text-gray)]"> Total Balance    </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}
