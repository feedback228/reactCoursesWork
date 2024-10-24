import React, { useState } from 'react';
import { RegLog } from './RegLog';
import { RegNamePas } from './RegNamePas'; 
import { NameSurname } from './NameSurname';
import { AgeAndGender } from './AgeAndGender';
import { YourDestinations } from './YourDestinations';
import { SingIn } from './SignIn'; 


export const MainPageRegLog: React.FC = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        if (step === 6) {
            setStep(1); 
        } else {
            setStep((prevStep) => Math.max(prevStep - 1, 1)); 
        }
    };

    const handleSignIn = () => {
        setStep(6); 
    };

    return (
        <div className="relative bg-[url('./assets/bg/regLog.png')] h-lvh bg-cover flex flex-col items-center justify-center w-full">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h2 className="z-10 absolute top-0 left-0 p-4 text-[32px] font-bold">duties</h2>

            {step === 1 && <RegLog handleNext={handleNext} handleSignIn={handleSignIn} />}
            {step === 2 && <RegNamePas handleSignIn={handleSignIn} handleBack={handleBack} handleNext={handleNext} />}
            {step === 3 && <NameSurname handleBack={handleBack} handleNext={handleNext} />}
            {step === 4 && <AgeAndGender handleBack={handleBack} handleNext={handleNext} />}
            {step === 5 && <YourDestinations handleBack={handleBack} />}
            {step === 6 && <SingIn handleBack={handleBack} handleNext={handleNext} />}
        </div>
    );
};