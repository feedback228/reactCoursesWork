import React from 'react';
import { Link } from "react-router-dom";

interface BtnRegLogProps {
    handleNext?: () => void; 
    title: string;
    className?: string;
    asLink?: boolean; 
    to?: string; 
}

export const BtnRegLog: React.FC<BtnRegLogProps> = (props) => {
    const { className, asLink, to, handleNext, title } = props;

    return asLink && to ? (
        <Link
            to={to}
            className={`border-[0.063rem] border-[#717389] w-full rounded-lg h-10 flex justify-center items-center ${className || ''}`}
        >
            {title}
        </Link>
    ) : (
        <button
            onClick={handleNext}
            className={`border-[0.063rem] border-[#717389] w-full rounded-lg h-10 ${className || ''}`}
        >
            {title}
        </button>
    );
};
