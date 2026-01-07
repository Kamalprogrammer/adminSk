import React from 'react';
import { MoreVertical } from 'lucide-react';
import DoughtnoutChart from './charts/DoughtnoutChart';
import TransactionCard from './cards/TransactionCard';
import { useState } from 'react';

export default function DefaultTransaction({
    allTransactions,
    successTransactions,
    pendingTransactions
}) {

    const [iconsClicked, setIconClicked] = useState(null);

    const handleMoreOptionChart = () => {
        setIconClicked((prev) => !prev)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-[50%_48%] gap-5 lg:gap-[2%] bg-[var(--color-page-bg)]'>
            {/* Transactions Card */}
            <TransactionCard
                allTransactions={allTransactions}
                successTransactions={successTransactions}
                pendingTransactions={pendingTransactions}
            />

            {/* Total Income Card */}
            <div className='bg-[var(--color-section-bg)] rounded-xl p-6 shadow-sm border border-[var(--color-border-light)]'>
                {/* Header */}
                <div className='flex justify-between items-center mb-6'>
                    <h3 className='text-base sm:text-lg font-semibold text-[var(--color-text-black)]'>Total Income</h3>
                    <button className="relative text-[var(--color-text-muted)] hover:text-[var(--color-text-gray)]">
                        <MoreVertical size={18} className='sm:w-5 sm:h-5' onClick={handleMoreOptionChart} />

                        {iconsClicked && (
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
                <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                    <div className='p-3 sm:p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--color-primary)]'></span>
                            <span className='text-[var(--color-text-gray)] text-xs sm:text-sm'>Income</span>
                        </div>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <span className='font-bold text-sm sm:text-base text-[var(--color-text-black)]'>$23,876</span>
                            <span className='text-[0.65rem] sm:text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                        </div>
                    </div>
                    <div className='p-3 sm:p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--color-warning)]'></span>
                            <span className='text-[var(--color-text-gray)] text-xs sm:text-sm'>Rent</span>
                        </div>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <span className='font-bold text-sm sm:text-base text-[var(--color-text-black)]'>$23,876</span>
                            <span className='text-[0.65rem] sm:text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                        </div>
                    </div>
                    <div className='p-3 sm:p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--color-success)]'></span>
                            <span className='text-[var(--color-text-gray)] text-xs sm:text-sm'>Download</span>
                        </div>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <span className='font-bold text-sm sm:text-base text-[var(--color-text-black)]'>$23,876</span>
                            <span className='text-[0.65rem] sm:text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                        </div>
                    </div>
                    <div className='p-3 sm:p-4 bg-[var(--color-card-hover-bg)] rounded-xl hover:shadow-md transition-shadow'>
                        <div className='flex items-center gap-2 mb-2'>
                            <span className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--color-primary-light)]'></span>
                            <span className='text-[var(--color-text-gray)] text-xs sm:text-sm'>Views</span>
                        </div>
                        <div className='flex items-center gap-1 sm:gap-2'>
                            <span className='font-bold text-sm sm:text-base text-[var(--color-text-black)]'>$23,876</span>
                            <span className='text-[0.65rem] sm:text-xs text-[var(--color-text-muted)]'>↗ +$763,43</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
