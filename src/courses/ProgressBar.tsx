import React from 'react';
import 'daisyui/dist/full.css';
import { CoursesBlock } from './CoursesBlock';

interface ProgressBarProps {
    percentage: number; 
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
    const radius = 50; 
    const strokeWidth = 10; 
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI; 
    const strokeDashoffset = circumference - (percentage / 100) * circumference; 

    return (
        <svg height={radius * 2} width={radius * 2}>
            <circle
                stroke="#717389"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="#98E698" 
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray={`${circumference} ${circumference}`} 
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 0.5s ease 0s' }}
                transform={`rotate(-90 ${radius} ${radius})`} 
            />
            <text
                x="50%" 
                y="50%" 
                textAnchor="middle"
                dominantBaseline="middle" 
                className="text-xl"
                fill="#E4E5ED" 
            >
                {percentage}%
            </text>
        </svg>
    );
};

export const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl mb-4">Круглый прогресс-бар</h1>
            <CoursesBlock h3="Курс по Python">
                <ProgressBar percentage={75} /> {/* ProgressBar is passed as a child */}
            </CoursesBlock>
        </div>
    );
};
