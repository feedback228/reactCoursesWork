import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackBtnRegLog } from './BackBtnRegLog';
import { BtnRegLog } from './BtnRegLog';
import Select from './select/Select';
import Input from './Input';

export const AgeAndGender = () => {
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null); 

    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/auth/register/step5');
    };

    const handleEmailError = (error: string | null) => {
        setErrorMessage(error); 
        setIsEmailValid(error === null); 
    };

    const handleBlurError = (error: string | null) => {
        setErrorMessage(error);
    };

    return (
        <div className="formRegLog">
            <BackBtnRegLog
                title="Enter your age and gender "
                p="Enter your age and gender. Click save when you're done."
            />
            <div className="flex flex-col gap-1rem">
                <div className="flex justify-between gap-6">
                    <Input
                        type="number"
                        placeholder="1"
                        title="Day"
                        classNameForm="flex !items-start flex-col max-w-8.125rem] gap-1.5"
                        onEmailError={handleEmailError} 
                        onBlurError={handleBlurError}
                    />
                    <form className="flex flex-col w-full max-w-8.125rem gap-5">
                        <p className="text-xs">Month</p>
                        <Select onSelectError={handleEmailError} />
                    </form>
                    <Input
                        type="number"
                        placeholder="2000"
                        title="Year"
                        classNameForm="flex !items-start flex-col max-w-8.125rem gap-1.5"
                        onEmailError={handleEmailError} 
                        onBlurError={handleBlurError}
                    />
                </div>
                <Input
                    type=""
                    placeholder="Gender"
                    className="!max-w-26.5rem"
                    classNameForm="!max-w-26.5rem"
                    classNameDiv="!max-w-26.5rem"
                    onEmailError={handleEmailError} 
                    onBlurError={handleBlurError}
                />
            </div>
            {errorMessage && <p className="text-red-600 text-xs">Все поля должны заполнены</p>} 
            <BtnRegLog
                    handleNext={handleRegister}
                    title="Continue"
                    className={`bg-darkBlue transition duration-300 ${
                        isEmailValid
                            ? 'hover:bg-hoverBlue'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!isEmailValid}
            />
        </div>
    );
};
