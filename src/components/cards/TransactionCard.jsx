import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

const TransactionCard = ({ allTransactions, successTransactions, pendingTransactions }) => {
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { key: 'all', label: 'All Transaction', data: allTransactions },
        { key: 'success', label: 'Success', data: successTransactions },
        { key: 'pending', label: 'Pending', data: pendingTransactions },
    ];

    const currentData = tabs.find(tab => tab.key === activeTab)?.data || [];

    const getShortBgColor = (short) => ({
        'AI': 'bg-[var(--color-hover-bg)] text-[var(--color-text-gray)]',
        'SM': 'bg-[var(--color-primary-light)] text-[var(--color-primary)]',
        'MD': 'bg-purple-100 text-purple-600',
        'U': 'bg-[var(--color-hover-bg)] text-[var(--color-text-gray)]',
        'OC': 'bg-orange-100 text-orange-600',
    }[short] || 'bg-[var(--color-hover-bg)] text-[var(--color-text-gray)]');

    const formatAmount = (amount, type) => {
        if (type === 'debit') return `$${amount.toLocaleString()}`;
        if (type === 'credit') return `+${amount.toLocaleString()}`;
        return `-${amount}`;
    };

    const getChangeStyle = (changePercent, type) => {
        if (type === 'debit' || changePercent < 0) return { color: 'text-red-500', icon: '↙' };
        if (type === 'neutral') return { color: 'text-[var(--color-text-muted)]', icon: '⇄' };
        return { color: 'text-green-500', icon: '↗' };
    };

    return (
        <div className='bg-[var(--color-section-bg)] rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]'>
            {/* Header */}
            <div className='flex justify-between items-center mb-6'>
                <h3 className='text-lg font-semibold text-[var(--color-text-black)]'>Transactions</h3>
                <button className="text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                    <MoreVertical size={20} />
                </button>
            </div>

            {/* Tabs */}
            <div className='flex gap-6 mb-6 border-b border-[var(--color-border-light)]'>
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`pb-3 text-sm font-medium transition-colors relative ${
                            activeTab === key ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]'
                        }`}
                    >
                        {label}
                        {activeTab === key && (
                            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)] rounded-full' />
                        )}
                    </button>
                ))}
            </div>

            {/* Transaction List */}
            <div className='space-y-1'>
                {currentData.map(({ short, id, name, time, reference, amount, type, changePercent }) => {
                    const { color, icon } = getChangeStyle(changePercent, type);
                    return (
                        <div
                            className='flex justify-between items-center py-4 border-b border-[var(--color-border-light)] hover:bg-[var(--color-hover-bg)] transition-colors rounded-lg px-2 cursor-pointer'
                            key={id}
                        >
                            <div className='flex items-center gap-4'>
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold ${getShortBgColor(short)}`}>
                                    {short}
                                </div>
                                <div>
                                    <p className='font-medium text-[var(--color-text-black)]'>{name}</p>
                                    <p className='text-xs text-[var(--color-text-muted)]'>{reference || time}</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='font-semibold text-[var(--color-text-black)]'>{formatAmount(amount, type)}</p>
                                <p className={`text-xs font-medium flex items-center justify-end gap-1 ${color}`}>
                                    <span>{icon}</span>
                                    {Math.abs(changePercent)}%
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 mt-6'>
                <button className='flex-1 py-2.5 px-4 border border-[var(--color-border-light)] rounded-full text-[var(--color-text-gray)] font-medium text-sm hover:bg-[var(--color-hover-bg)] transition-colors'>
                    View all Transaction History
                </button>
                <button className='flex-1 py-2.5 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-full text-[var(--color-text-white)] font-medium text-sm transition-colors'>
                    Create new Transaction
                </button>
            </div>
        </div>
    );
};

export default TransactionCard;
