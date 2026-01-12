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
        icon: <Bell className="w-5 h-5" />,
        title: "New Order Received",
        description: "A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer.",
        createdTime: new Date(now.getTime() - 2 * 3600000).toISOString(), // 2 hours ago
        read: false,
    },
    {
        id: 2,
        icon: <Mail className="w-5 h-5" />,
        title: "New Message",
        description: "You have rA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customereceived a new message from the support team.",
        createdTime: new Date(now.getTime() - 5 * 3600000).toISOString(), // 5 hours ago
        read: true,
    },
    {
        id: 3,
        icon: <UserPlus className="w-5 h-5" />,
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
        icon: <CheckCircle className="w-5 h-5" />,
        title: "Payment Successful",
        description: "Your recent A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customer payment transaction has been completed.",
        createdTime: new Date(now.getTime() - 50 * 3600000).toISOString(), // 50 hours ago
        read: false,
    },
    {
        id: 7,
        icon: <FileText className="w-5 h-5" />,
        title: "Report Generated",
        description: "The monthly A new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerA new order has been placed by a customerv performance report has been generated.",
        createdTime: new Date(now.getTime() - 80 * 3600000).toISOString(), // 80 hours ago
        read: false,
    },
];


export default function Notification() {
    const unreadLast7Days = notificationsData.filter(n => isUnreadAndWithinDays(n, 7));

    return (
        <div className="bg-section-bg dark:bg-section-bg rounded-xl border border-border-light dark:border-border-light shadow-sm overflow-hidden">
            <div className="flex justify-between items-center px-4 py-4 sm:px-6 border-b border-border-light dark:border-border-light">
                <h3 className="text-lg font-bold text-text-black dark:text-text-black">Notification</h3>
                <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                    Mark all read
                </button>
            </div>

            {/* Unread notifications from last 7 days */}
            {unreadLast7Days.length > 0 ? (
                <div className="divide-y divide-border-light dark:divide-border-light">
                    {unreadLast7Days.map(({ id, title, description, createdTime, icon }) => (
                        <div key={id} className="p-4 sm:px-6 hover:bg-hover-bg dark:hover:bg-hover-bg transition-colors block">
                            <div className="flex gap-4 items-start">
                                <div className="text-primary mt-1 flex-shrink-0">
                                    {icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-2 mb-1">
                                        <p className="text-sm font-semibold text-text-black dark:text-text-black truncate">
                                            {title}
                                        </p>
                                        <span className="text-xs text-text-muted whitespace-nowrap flex-shrink-0">
                                            {new Date(createdTime).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <p className="text-sm text-text-gray dark:text-text-gray line-clamp-2">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-8 text-center text-text-muted">
                    <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>No unread notifications in the last 7 days.</p>
                </div>
            )}
        </div>
    );
}