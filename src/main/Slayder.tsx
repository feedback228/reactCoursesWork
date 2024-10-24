import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { CoursesBlock } from './CoursesBLock';

export const Slayder: React.FC = () => {
    useEffect(() => {
        new Splide('.splide', {
            type: 'loop',
            perPage: 6,
            autoplay: true,
            drag: true,
            pagination: false,
            gap: '20px',
            breakpoints: {
                400: {
                    perPage: 1,
                },
                650: {
                    perPage: 2,
                },
                900: {
                    perPage: 3,
                },
                1400: {
                    perPage: 4,
                },
            },
        }).mount();
    }, []);

    return (
        <div className='flex flex-col gap-4 mt-6 px-8 max-w-[119rem] w-full'>
        <h2 className='text-2xl font-bold'>Courses for you</h2>
        <div className="relative w-full mx-auto overflow-hidden bg-black">
            <div className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide"><CoursesBlock h3='Courses 1' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 2' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 3' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 4' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 5' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 6' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 7' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 8' link='/kek/lul' /></li>
                        <li className="splide__slide"><CoursesBlock h3='Courses 9' link='/kek/lul' /></li>
                    </ul>
                </div>
                <div className="splide__arrows absolute top-1/2 transform -translate-y-1/2 w-full justify-end hidden">
                    <button className="splide__arrow splide__arrow--next bg-white p-2">
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    );
};
