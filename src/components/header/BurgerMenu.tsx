import { NormalInputRegLog } from '../NormalInput';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import location from '../../assets/icon/location.svg';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex tablet:hidden">
            <button
                onClick={toggleMenu}
                className={`fixed top-2.375rem right-0 flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black z-50 transition-transform duration-300 ${
                    isOpen ? 'text-black' : ''
                }`}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            isOpen
                                ? 'M6 18L18 6M6 6l12 12'
                                : 'M4 6h16M4 12h16M4 18h16'
                        }
                    />
                </svg>
            </button>

            <div
                className={`fixed inset-0 bg-black transform transition-transform duration-300 ease-in-out z-40 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex flex-col px-7 gap-6">
                    <div className="flex mt-10 gap-3">
                        <NormalInputRegLog
                            type="search"
                            placeholder="Search"
                            className="tablet:flex max-w-[11rem] "
                            classNameForm="tablet:flex max-w-[11rem]"
                            classNameP="hidden"
                        />
                        <div className="flex justify-center items-center border-solid border-0.063rem border-gray min-w-[8.125rem] h-10 rounded-lg px-0.5rem gap-2 ">
                            <img src={location} alt="" />
                            <p>Moskow</p>
                        </div>
                    </div>

                    <ul className="tablet:flex gap-6 ">
                        <li className="font-medium text-1.25rem border-solid border-0 border-b-.0625rem  border-gray pb-1">
                            <Link to="kek">Courses</Link>
                        </li>
                        <li className="font-medium text-1.25rem border-solid border-0 border-b-.0625rem  border-gray pb-1">
                            Responses
                        </li>
                        <li className="font-medium text-1.25rem border-solid border-0 border-b-.0625rem  border-gray pb-1">
                            Exercise
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
