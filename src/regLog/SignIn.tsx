import React from 'react';
import { BackBtnRegLog } from './BackBtnRegLog';
import { InputRegLog } from './InputRegLog';
import { BtnRegLog } from './BtnRegLog';
import { useNavigate } from 'react-router-dom'; 

interface SingInProps {
    handleBack: () => void;
    handleNext: () => void;
}

export const SingIn: React.FC<SingInProps> = (props) => {
    const navigate = useNavigate(); 

    const handleDone = () => {
        navigate("/lol");
    };

    return (
        <div className="formRegLog">
            <BackBtnRegLog
                handleBack={props.handleBack}
                title="Sign In"
                p="Welcome to duties: Your Job Search Companion"
            />
            <InputRegLog />
            <BtnRegLog
                handleNext={handleDone} 
                asLink={true} to="/lol"
                title="Done"
                 className="bg-[#008ea1] transition duration-300 hover:bg-[#00bcd4] "
            />
        </div>
    );
};
