import { HeroBlock } from '../main/HeroBlock';

import heroBlockMain from '../assets/foto/heroBLockMain.png';
import { YourCourses } from './YourCourses';
import { RecCourses } from './RecCourses';

export const CoursesPage = () => {
    const imgHeroBLock = (
        <img
            className="max-w-[15rem] h-[15rem] tablet:max-w-[18rem] h-[18rem]"
            src={heroBlockMain}
            alt=""
        />
    );

    return (
        <div className="w-full">
            <HeroBlock
                h1="Learn"
                description="Gain the skills you need to do independent data science projects."
                img={imgHeroBLock}
            />
            <YourCourses />
            <RecCourses />
        </div>
    );
};
