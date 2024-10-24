import { Link } from 'react-router-dom';

import sharp from '../assets/icon/sharp.svg';

interface CoursesBlockProps {
    h3: string;
    link?: string; 
}

export const CoursesBlock: React.FC<CoursesBlockProps> = (props) => {
    const content = (
        <div className="flex flex-col gap-3 p-6 border-solid border-[0.063rem] border-[#717389] rounded-lg 700:max-w-[17rem] w-full no-underline hover:shadow-lg transition-shadow">
            <div className="flex justify-between w-full">
                <h3 className="text-2xl font-bold">{props.h3}</h3>
                <img src={sharp} alt="" />
            </div>
            <p className="text-sm text-[#A5A7B1]">
                Get started with Python, if you have no coding experience.
            </p>
        </div>
    );
    return props.link ? <Link to={props.link}>{content}</Link> : content;
};
