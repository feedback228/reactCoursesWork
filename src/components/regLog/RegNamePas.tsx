import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnRegLog } from './BtnRegLog';
import { BackBtnRegLog } from './BackBtnRegLog';
import Input from './Input';
import CreatPass from './CreatPass';

export const RegNamePas = () => {
    const navigate = useNavigate();
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false); 
    const [confirmPassword, setConfirmPassword] = useState<boolean>(false);

    const handleEmailError = (error: string | null) => {
        setIsEmailValid(error === null); 
    };

    const handlePasswordError = (error: string | null) => {
        setIsPasswordValid(error === null); 
    };

    const handleConfirmPasswordChange = (error: string | null) => {
        setConfirmPassword(error === null); 
    };

    const handleSignIn = () => {
        navigate('/auth/signin');
    };

    const handleRegister = () => {
        if (isEmailValid && isPasswordValid && confirmPassword) {
            navigate('/auth/register/step3');
        }
    };

    return (
        <div className="formRegLog p-[1.5rem]">
            <BackBtnRegLog
                title="Create your profile"
                p="Welcome to "
                span="duties"
                spanP=": Your Job Search Companion"
            />
            <div className="flex flex-col gap-4">
                <Input
                    title="Email"
                    type="email"
                    placeholder="Email"
                    onEmailError={handleEmailError} 
                    showDirty={true}
                />
                <CreatPass creatPassErrorProps={handleConfirmPasswordChange} onPasswordError={handlePasswordError}/>
            </div>
            <div className="flex flex-col gap-2">
                <BtnRegLog
                    handleNext={handleRegister}
                    title="Continue"
                    className={`bg-[#008ea1] transition duration-300 ${isEmailValid && isPasswordValid && confirmPassword ? 'hover:bg-darkBlue' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!isEmailValid || !isPasswordValid || !confirmPassword}
                />
                <button className="text-[#0097A7] h-10" onClick={handleSignIn}>
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default RegNamePas;
