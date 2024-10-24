import { Header } from './main/Header';
import { Footer } from './main/Footer';
import { MainPage } from './main/MainPage';
import { CoursesPage } from './courses/CoursesPage';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CoursesInfaPage } from './coursesInfaPage/CoursesInfaPage';
import { App } from './App';
import { ProfilePage } from './profilePage/ProfilePage';

export const Home = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    const coursesPageFn = () => {
        navigate('/kek');
    };

    const hideHeaderFooterPaths = ['/'];

    const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

    return (
        <div className="bg-black w-full flex flex-col items-center">
            {!shouldHideHeaderFooter && <Header coursesPageFn={coursesPageFn} />}
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/lol" element={<MainPage />} />
                <Route path="/kek" element={<CoursesPage />} />
                <Route path="/kek/lul" element={<CoursesInfaPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            {!shouldHideHeaderFooter && <Footer />}
        </div>
    );
};
