import { ChevronUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';
const faqData = [
    {
        id: 1,
        question: "What is the difference between a standard user and an admin user?",
        answers: "Standard users have limited access to features, while admin users have full control over settings and user management.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 2,
        question: "How do I reset my password?",
        answers: "You can reset your password by clicking the 'Forgot Password' link on the login page and following the instructions sent to your email.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 3,
        question: "Can I upgrade my plan at any time?",
        answers: "Yes, you can upgrade your subscription plan at any time through the billing section in your account settings.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 4,
        question: "What payment methods do you accept?",
        answers: "We accept all major credit cards, PayPal, and bank transfers for enterprise accounts.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 5,
        question: "Is there a limit on the number of projects?",
        answers: "The number of projects depends on your subscription tier. Free plans allow up to 3 projects, while Pro plans are unlimited.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 6,
        question: "How do I invite new team members?",
        answers: "Navigate to the 'Team' tab in your dashboard and enter the email addresses of the people you want to invite.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 7,
        question: "Is my data backed up regularly?",
        answers: "Yes, we perform automated daily backups of all user data to ensure maximum security and reliability.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 8,
        question: "Do you offer a free trial?",
        answers: "We offer a 14-day free trial for our Pro features, no credit card required.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 9,
        question: "How can I contact customer support?",
        answers: "You can reach our support team via the live chat on our website or by emailing support@example.com.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 10,
        question: "Can I export my data to CSV?",
        answers: "Yes, you can export your reports and project data to CSV or PDF format from the settings menu.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 11,
        question: "Is there a mobile application available?",
        answers: "Yes, our mobile app is available for both iOS and Android devices on their respective app stores.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 12,
        question: "How do I delete my account?",
        answers: "Account deletion can be requested through the 'Privacy' section of your account settings. This action is permanent.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 13,
        question: "What is your refund policy?",
        answers: "We offer a full refund within 30 days of purchase if you are not satisfied with our service.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 14,
        question: "Can I use the service offline?",
        answers: "While most features require an internet connection, our mobile app supports offline editing for specific modules.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 15,
        question: "How do I enable two-factor authentication?",
        answers: "Go to 'Security' settings and follow the steps to link your account with an authenticator app.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 16,
        question: "Are there any hidden fees?",
        answers: "No, our pricing is transparent. All costs are clearly stated on our pricing page.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 17,
        question: "Can I change my username?",
        answers: "Yes, you can update your username once every 30 days from your profile settings.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 18,
        question: "How do I update my billing information?",
        answers: "You can update your credit card details and billing address in the 'Billing' section of your dashboard.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 19,
        question: "Do you provide API access?",
        answers: "Yes, we provide a comprehensive REST API for developers on our Business and Enterprise plans.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    },
    {
        id: 20,
        question: "Is there a community forum for users?",
        answers: "Yes, we have an active community forum where users can share tips, tricks, and feature requests.",
        animationtopIcon: ChevronUp,
        downArrowicon: ChevronDown
    }
];




export default function FAQ() {
    const [activeId, setActiveId] = useState(null)

    const handleAnswer = (id) => {
        setActiveId(prevId => (prevId === id ? null : id));
    }

    const midPoint = Math.ceil(faqData.length / 2);
    const leftFaqs = faqData.slice(0, midPoint);
    const rightFaqs = faqData.slice(midPoint);

    const FAQItem = ({ item }) => (
        <div className={`border border-border-light rounded-2xl p-4 md:p-6 mb-4 md:mb-5 transition-all duration-300 ease-in-out ${activeId === item.id ? 'bg-white shadow-md' : 'bg-section-bg hover:bg-hover-bg'}`}>
            <div
                className="flex justify-between items-center cursor-pointer group select-none"
                onClick={() => handleAnswer(item.id)}
            >
                <h3 className="text-text-black font-semibold text-base md:text-lg flex-1 pr-4 md:pr-6">{item.question}</h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${activeId === item.id ? 'bg-black text-white rotate-180' : 'bg-transparent text-gray-500 rotate-0'}`}>
                    <item.downArrowicon size={20} />
                </div>
            </div>
            <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${activeId === item.id ? 'grid-rows-[1fr] opacity-100 mt-2 md:mt-4' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="text-text-gray leading-relaxed text-sm md:text-base border-t border-border-light pt-2 md:pt-4 mt-2">
                        {item.answers}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-text-black tracking-tight">Frequently asked <br /> questions</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 items-start">
                <div className="flex flex-col">
                    {leftFaqs.map((item) => (
                        <FAQItem key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex flex-col">
                    {rightFaqs.map((item) => (
                        <FAQItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}