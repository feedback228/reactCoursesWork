import { HeroBlock } from "../main/HeroBlock";

import python from '../assets/icon/python.svg'
import { Lessons } from "./Lessons";

export const CoursesInfaPage = () => {
    const btn = <button className="bg-black border-solid border-[0.063rem] border-[#717389] rounded-lg p-2">Resume Course</button>
    return (
        <div className="w-full">
            <HeroBlock
                h1="Python"
                description="Gain the skills you need to do independent data science projects."
                image={python}
                percentage={100}
                btn={btn}
                className="!gap-1"
                classNameP="!font-bold !text-[1.3rem]"
            />
            <Lessons />
        </div>
    );
};
