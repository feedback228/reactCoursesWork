import { NormalInputRegLog } from '../regLog/NormalInputRegLog';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import lightNightBtn from '../assets/icon/lightNightBtn.svg';
import location from '../assets/icon/location.svg';
import profileIcon from '../assets/icon/profileIcon.svg';
import { BurgerMenu } from './BurgerMenu';

interface HeaderProps {
    coursesPageFn?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (index: number): void => {
        setActiveIndex(index);
    };

    return (
        <header className="flex justify-between w-full bg-black py-8 max-w-[1920px]">
            <div className="flex justify-between items-center w-full px-8 gap-10">
                <div className="flex items-center justify-center gap-8">
                    <Link to="lol">
                        <h2
                            onClick={() => {
                                handleClick(3); 
                            }}
                            className={`font-bold text-[2.5rem] ${
                                activeIndex === 3
                                    ? 'text-[#00bcd4]'
                                    : 'text-[#00bcd4]'
                            } transition duration-300`}
                        >
                            duties
                        </h2>
                    </Link>

                    <ul className="tablet:flex gap-6 hidden">
                        <li
                            className={`font-medium text-[1.5rem] transition duration-300 ${
                                activeIndex === 0
                                    ? 'text-[#00bcd4]'
                                    : 'hover:text-[#00bcd4]'
                            }`}
                            onClick={() => handleClick(0)}
                        >
                            <Link to="kek">Courses</Link>
                        </li>
                        <li
                            className={`font-medium text-[1.5rem] transition duration-300 ${
                                activeIndex === 1
                                    ? 'text-[#00bcd4]'
                                    : 'hover:text-[#00bcd4]'
                            } cursor-pointer`}
                            onClick={() => handleClick(1)}
                        >
                            Responses
                        </li>
                        <li
                            className={`font-medium text-[1.5rem] transition duration-300 ${
                                activeIndex === 2
                                    ? 'text-[#00bcd4]'
                                    : 'hover:text-[#00bcd4]'
                            } cursor-pointer`}
                            onClick={() => handleClick(2)}
                        >
                            Exercise
                        </li>
                    </ul>
                </div>

                <div className="flex justify-end tablet:flex gap-4 w-full items-center">
                    <NormalInputRegLog
                        type="search"
                        placeholder="Search"
                        className="tablet:flex max-w-[20rem] hidden"
                        classNameForm="tablet:flex max-w-[20rem] hidden"
                    />
                    <button className="flex justify-center items-center border-solid border-[0.063rem] border-[#717389] min-w-10 h-10 rounded-lg hover:bg-[#717389] transition duration-300">
                        <img src={lightNightBtn} alt="" />
                    </button>
                    <div className="tablet:flex justify-center items-center border-solid border-[0.063rem] border-[#717389] min-w-[8.125rem] h-10 rounded-lg px-[0.5rem] gap-2 hidden">
                        <img src={location} alt="" />
                        <p>Moskow</p>
                    </div>
                    <Link to="profile">
                        <button
                            className={`flex justify-center items-center bg-white h-10 rounded-lg px-[0.5rem] gap-[.625rem] min-w-10 tablet:min-w-[100px] hover:bg-[#00bcd4] transition duration-300 ${
                                activeIndex === 4 ? 'bg-[#00bcd4]' : ''
                            }`}
                            onClick={() => handleClick(4)} // Set active index for profile button
                        >
                            <img src={profileIcon} alt="Profile" />
                            <p className="text-black font-medium text-base hidden tablet:flex">
                                Stepan Korovin
                            </p>
                        </button>
                    </Link>
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};
