import { MainPage } from './main/MainPage';
import { CoursesPage } from './courses/CoursesPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CoursesInfaPage } from './coursesInfaPage/CoursesInfaPage';
import { ProfilePage } from './profilePage/ProfilePage';
import { MainPageRegLog } from './regLog/MainPageRegLog';
import { MainLayout } from './MainLayout';

export const Home = () => {
    const navigate = useNavigate();

    const coursesPageFn = () => {
        navigate('/courses');
    };

    return (
        <div className="bg-black w-full flex flex-col items-center">
            <Routes>
                <Route path="/auth/*" element={<MainPageRegLog />} />
                <Route
                    path="/"
                    element={
                        <MainLayout coursesPageFn={coursesPageFn}>
                            <MainPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/courses"
                    element={
                        <MainLayout coursesPageFn={coursesPageFn}>
                            <CoursesPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/courses/:id"
                    element={
                        <MainLayout coursesPageFn={coursesPageFn}>
                            <CoursesInfaPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <MainLayout coursesPageFn={coursesPageFn}>
                            <ProfilePage />
                        </MainLayout>
                    }
                />
            </Routes>
        </div>
    );
};