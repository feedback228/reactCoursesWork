import React from 'react';
import { CoursesBlock } from './CoursesBlock';
import { ProgressBar } from './ProgressBar';


export const ActiveCourses: React.FC = () => {
    return (
        <div className='flex flex-col w-full gap-4'>
            <CoursesBlock h3='Course 52'>
                <ProgressBar percentage={52} />
            </CoursesBlock>
            <CoursesBlock h3='Course 3123456789'>
                <ProgressBar percentage={2} />
            </CoursesBlock>
            <CoursesBlock h3='Course 777'>
                <ProgressBar percentage={79} />
            </CoursesBlock>
        </div>
    );
};


