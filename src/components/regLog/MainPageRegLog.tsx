import React from 'react';
import { RegLog } from './RegLog';
import { Routes, Route } from 'react-router-dom';
import RegNamePas from './RegNamePas';
import { NameSurname } from './NameSurname';
import { AgeAndGender } from './AgeAndGender';
import { YourDestinations } from './YourDestinations/YourDestinations';
import { SingIn } from './SignIn';

export const MainPageRegLog: React.FC = () => {
    return (
        <div className="relative bg-[url('./assets/bg/regLog.png')] h-lvh bg-cover flex flex-col items-center justify-center w-full">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="z-10 absolute top-0 left-0 p-4 text-[32px] font-bold">
                duties
            </h2>
            <Routes>
                <Route index element={<RegLog />} />
                <Route path="signin" element={<SingIn />} />
                <Route path="register/*">
                    <Route index element={<RegLog />} />
                    <Route path="step2" element={<RegNamePas />} />
                    <Route path="step3" element={<NameSurname />} />
                    <Route path="step4" element={<AgeAndGender />} />
                    <Route path="step5" element={<YourDestinations />} />
                </Route>
            </Routes>
        </div>
    );
};
