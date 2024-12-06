import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackBtnRegLog } from './BackBtnRegLog';
import { BtnRegLog } from './BtnRegLog';
import Input from './Input';

export const NameSurname = () => {
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleEmailError = (error: string | null) => {
        setIsEmailValid(error === null);
        console.log(isEmailValid)
    };

    const handleDone = () => {
        if (isEmailValid) {
            navigate('/auth/register/step4');
        }
    };

    return (
        <div className="formRegLog">
            <BackBtnRegLog
                title="Enter your name and go further"
                p="Enter your data or register by other means. Click save when you're done."
            />
            <div className="flex flex-col gap-4">
                <Input
                    type="name"
                    placeholder="Name"
                    title="Name"
                    onBlurError={handleEmailError}
                    showDirty={true}
                />
                <Input
                    type="Surname"
                    placeholder="Surname"
                    title="Surname"
                    onBlurError={handleEmailError}
                    showDirty={true}
                />
            </div>
            <div>
                <BtnRegLog
                    handleNext={handleDone}
                    title="Continue"
                    className={`bg-darkBlue transition duration-300 ${
                        isEmailValid
                            ? 'hover:bg-hoverBlue'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!isEmailValid}
                />
            </div>
        </div>
    );
};
