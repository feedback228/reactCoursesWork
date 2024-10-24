import React from 'react';
import { CoursesBlock } from './CoursesBlock';

export const CompletedCourses: React.FC = () => {
    return (
        <div className="flex flex-col w-full gap-4">
            <CoursesBlock h3="Course 123" donwload="Download Sertificate" />
            <CoursesBlock
                h3="Course 777"
                donwload="Download Sertificate"
            />
            <CoursesBlock h3="Course 666" donwload="Download Sertificate" />
        </div>
    );
};
