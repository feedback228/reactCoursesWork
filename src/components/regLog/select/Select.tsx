import React, { useState } from 'react';

import SelectOption from './SelectOption';

import selectChevron from '../../../assets/icon/selectChevron.svg';

interface InputProps {
    onSelectError?: (error: string | null) => void;
}


const Select: React.FC<InputProps> = (props) => {
    const [showTextBlock, setShowTextBlock] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState<string>('');
    const [selectedError , setSelectedError ] = useState<string>('');

    const toggleTextBlock = () => {
        setShowTextBlock((prev) => !prev);
    };

    const handleMonthSelect = (month: string) => {
        setSelectedMonth(month);
        if (!selectedMonth) {
            setSelectedError('Поле не может быть пустым');
            props.onSelectError && props.onSelectError('Поле не может быть пустым');
            return;
        }
    };


    const monthGroups = [
        ['Jan', 'Feb'],
        ['Mar', 'Apr', 'May'],
        ['Jun', 'Jul', 'Aug'],
        ['Sep', 'Oct', 'Nov'],
        ['Dec']
    ];

    return (
        <div className='relative'>
            <div
                onClick={toggleTextBlock}
                className="flex items-start justify-between max-w-8.125rem w-full gap-1.5 h-10 bg-black border-solid border-0.063rem border-gray rounded-lg p-2 cursor-pointer "
            >
                <p
                    className={`text-lightGray ${
                        selectedMonth ? 'text-white' : ''
                    }`}
                >
                    {selectedMonth || 'Jan'}
                </p>
                <img src={selectChevron} alt="chevron" />
            </div>
            {showTextBlock && (
                <div className="flex flex-col gap-2 min-w-8.125rem h-21.875rem overflow-y-auto p-4 absolute top-10 right-0 bg-black border-solid border-0.063rem border-gray rounded-lg">
                {monthGroups.map((group, index) => (
                    <SelectOption
                        key={index}
                        months={group}
                        selectedMonth={selectedMonth}
                        onSelect={handleMonthSelect}
                        toggleTextBlock={toggleTextBlock}
                    />
                ))}
            </div>
            )}
        </div>
    );
};

export default Select;
