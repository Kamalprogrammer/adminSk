import { Bell, Mail, UserPlus, ShoppingCart, AlertTriangle, CheckCircle, FileText } from "lucide-react";
// Simple: check hours difference

// Helper: hours since timestamp (MongoDB ISO string)
const getHoursAgo = (timestamp) => (Date.now() - new Date(timestamp).getTime()) / 3600000;

// Helper: unread and within N days
const isUnreadAndWithinDays = (notif, days) => {
    const hoursAgo = getHoursAgo(notif.createdTime);
    return !notif.read && hoursAgo < days * 24;
};


// Example MongoDB ISO timestamps and read property
const now = new Date();
const notificationsData = [
    {
        id: 1,
        icon: <Bell  className="w-5 h-5"/>,
        title: "New Order Received",
        description: "A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer.",
        createdTime: new Date(now.getTime() - 2 * 3600000).toISOString(), // 2 hours ago
        read: false,
    },
    {
        id: 2,
        icon: <Mail  className="w-5 h-5"/>,
        title: "New Message",
        description: "You have rA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customereceived a new message from the support team.",
        createdTime: new Date(now.getTime() - 5 * 3600000).toISOString(), // 5 hours ago
        read: true,
    },
    {
        id: 3,
        icon: <UserPlus  className="w-5 h-5"/>,
        title: "New User Registered",
        description: "A new A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer user has successfully registered on the platform.",
        createdTime: new Date(now.getTime() - 20 * 3600000).toISOString(), // 20 hours ago
        read: false,
    },
    {
        id: 4,
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "Order Shipped",
        description: "The order A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer has been shipped and is currently in transit.",
        createdTime: new Date(now.getTime() - 30 * 3600000).toISOString(), // 30 hours ago
        read: false,
    },
    {
        id: 5,
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "System Alert",
        description: "An unusual A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer login attempt was detected on your account.",
        createdTime: new Date(now.getTime() - 40 * 3600000).toISOString(), // 40 hours ago
        read: true,
    },
    {
        id: 6,
        icon: <CheckCircle  className="w-5 h-5"/>,
        title: "Payment Successful",
        description: "Your recent A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer payment transaction has been completed.",
        createdTime: new Date(now.getTime() - 50 * 3600000).toISOString(), // 50 hours ago
        read: false,
    },
    {
        id: 7,
        icon: <FileText  className="w-5 h-5"/>,
        title: "Report Generated",
        description: "The monthly A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerv performance report has been generated.",
        createdTime: new Date(now.getTime() - 80 * 3600000).toISOString(), // 80 hours ago
        read: false,
    },
];


export default function Notification() {
    const unreadLast7Days = notificationsData.filter(n => isUnreadAndWithinDays(n, 7));

    return (
        <div className="rounded-xl px-2 bg-white">
            <div className=" flex justify-between px-5 font-semibold py-2">
                <p>Notification</p>
                <p className="text-blue-500">Mark all read</p>
            </div>

            {/* Unread notifications from last 7 days */}
            {unreadLast7Days.length > 0 ? (
                <div className="">
                    {unreadLast7Days.map(({ id, title, description, createdTime, icon }) => (
                        <div key={id}>
                            <div className="flex gap-5 py-2 justify-between">
                                <div className="text-blue-800 flex gap-5">
                                    {icon}
                                    <p><strong>{title}</strong></p>
                                </div>
                                <div>
                                    <p className="w-[5rem] h-[1.5rem] overflow-hidden" >{new Date(createdTime).toLocaleString()}</p>
                                </div>
                            </div>
                            <p className="line-clamp-3 text-sm text-black pl-10">{description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No unread notifications in the last 7 days.</p>
            )}

            {/* You can add more sections for other filters as needed */}
        </div>
    );
}