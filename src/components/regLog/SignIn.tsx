import React, { useState } from 'react';
import { BackBtnRegLog } from './BackBtnRegLog';
import { BtnRegLog } from './BtnRegLog';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import InputRegLog from './InputRegLog';

interface SingInProps {
    handleBack?: () => void;
    handleNext?: () => void;
}

export const SingIn: React.FC<SingInProps> = () => {
    const navigate = useNavigate();

    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false); 
    
    const handleEmailError = (error: string | null) => {
        setIsEmailValid(error === null); 
    };

    const handlePasswordError = (error: string | null) => {
        setIsPasswordValid(error === null); 
    };

    const handleDone = () => {
        if (isEmailValid && isPasswordValid) {
            navigate('/');
        }
    };

    return (
        <div className="formRegLog">
            <BackBtnRegLog
                title="Sign In"
                p="Welcome to duties: Your Job Search Companion"
            />
            <div className="flex flex-col gap-4">
                <Input
                    title="Email"
                    type="email"
                    placeholder="Email"
                    onEmailError={handleEmailError} 
                />
                <InputRegLog
                    title="Password"
                    placehold="Enter your password"
                    onPasswordError={handlePasswordError}
                />
            </div>
            <BtnRegLog
                handleNext={handleDone}
                asLink={true}
                title="Done"
                className={`bg-darkBlue transition duration-300 ${isEmailValid && isPasswordValid ? 'hover:bg-hoverBlue' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!isEmailValid || !isPasswordValid}
            />
        </div>
    );
};
