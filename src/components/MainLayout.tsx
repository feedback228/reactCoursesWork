import React from 'react';
import { Header } from './header/Header';
import { Footer } from './Footer';

interface MainLayoutProps {
    children: React.ReactNode;
    coursesPageFn: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
    return (
        <>
            <Header coursesPageFn={props.coursesPageFn} />
            {props.children}
            <Footer />
        </>
    );
};
