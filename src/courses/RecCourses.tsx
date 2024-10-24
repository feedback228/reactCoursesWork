import { CoursesBlock } from '../main/CoursesBLock';
import { SearchFilterBlock } from '../main/SearchFilterBlock';

export const RecCourses = () => {
    return (
        <div className="flex flex-col gap-5 px-8 mt-4">
            <h2 className="text-3xl font-bold">Recommended courses</h2>
            <SearchFilterBlock />
            <div className="grid grid-cols-1 700:grid-cols-3 1000:grid-cols-4 gap-4 1200:grid-cols-6">
                <CoursesBlock h3="Courses 1" link='lul' />
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
                <CoursesBlock h3="Courses 1"  link='lul'/>
            </div>
        </div>
    );
};
