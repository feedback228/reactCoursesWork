import React, { ReactNode } from 'react';

import star from '../../assets/icon/star.svg';
import { Link } from 'react-router-dom';

interface CoursesBlockProps {
    h3: string;
    children?: ReactNode;
    donwload?: string;
}

export const CoursesBlock: React.FC<CoursesBlockProps> = (props) => {
    return (
        <Link to="lul">
            <div className="flex gap-5 flex-col-reverse 700:flex-row justify-between items-start 700:items-center w-full py-2 px-6 border-solid border-0.063rem border-gray rounded-lg h-auto 700:h-7.375rem">
                <div className="flex items-center gap-8">
                    <img
                        className="hidden 700:flex cursor-pointer"
                        src={star}
                        alt=""
                    />
                    <div>
                        <h3 className="font-bold">{props.h3}</h3>
                        <p className="text-sm 700:text-base text-lightGray 700:text-white">
                            Get started with Python, if you have no coding
                            experience.
                        </p>
                    </div>
                </div>
                <div>
                    {' '}
                    {props.children}
                    <p className="underline">{props.donwload}</p>
                </div>
            </div>
        </Link>
    );
};
