import React from 'react';

interface ProgressingBarLineProps {
    percentage: number;
}

export const ProgressingBarLine: React.FC<ProgressingBarLineProps> = (props) => {
    return (
        <div className="flex flex-col items-center max-w-[23rem] w-full">
            <div className="relative w-full h-2 bg-gray-300 rounded">
                <div
                    className="absolute w-full top-0 left-0 h-2 bg-[#98E698] rounded-lg"
                    style={{ width: `${props.percentage}%` }}
                />
            </div>
            <div className="flex justify-between w-full">
                <span className="ml-2">{props.percentage}%</span>
                <p>Certificate</p>
            </div>
        </div>
    );
};
