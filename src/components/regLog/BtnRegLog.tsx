import React from 'react';
import { Link } from "react-router-dom";

interface BtnRegLogProps {
    handleNext?: () => void; 
    title: string;
    className?: string;
    asLink?: boolean; 
    to?: string; 
    handleSignIn?: () => void; 
    disabled?: boolean;
}

export const BtnRegLog: React.FC<BtnRegLogProps> = (props) => {
    const { className, asLink, to, handleNext, title } = props;

    if (asLink && to) {
        return (
            <Link
                to={to}
                className={`border-0.063rem border-gray w-full rounded-lg h-10 flex justify-center items-center ${className || ''}`}
            >
                {title}
            </Link>
        );
    }


    return (
        <button
            onClick={handleNext}
            className={`border-0.063rem border-gray w-full rounded-lg h-10 ${className || ''}`}
        >
            {title}
        </button>
    );
};
