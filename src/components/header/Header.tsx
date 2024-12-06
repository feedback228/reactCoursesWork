import React, { useState } from 'react';
import Nav from './Nav';
import Logo from './Logo';
import InputBtn from './InputBtn';

interface HeaderProps {
    coursesPageFn?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number): void => {
        setActiveIndex(index);
    };

    return (
        <header className="flex justify-between w-full bg-black py-8 max-w-120rem">
            <div className="flex justify-between items-center w-full px-8 gap-10">
                <div className="flex items-center justify-center gap-8">
                    <Logo activeIndex={activeIndex} handleClick={handleClick} />
                    <Nav activeIndex={activeIndex} handleClick={handleClick}/>
                </div>
                <InputBtn activeIndex={activeIndex} handleClick={handleClick}/>
            </div>
        </header>
    );
};
