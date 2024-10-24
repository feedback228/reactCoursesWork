import React from 'react';
import googleIcon from '../assets/icon/Google.svg';
import LinkedInIcon from '../assets/icon/LinkedIn.svg';
import { BtnRegLog } from './BtnRegLog';

interface RegLogProps {
    handleNext: () => void; 
    handleSignIn: () => void; 
}

export const RegLog: React.FC<RegLogProps> = (props) => {
    return (
        <div className="formRegLog">
            <h2 className="text-5xl font-bold leading-[3.75rem]	">Upgrade your brain...</h2>
            <div className="flex flex-col gap-2 max-w-[25.5rem] w-full">
                <button
                    className="bg-[#00BCD4] w-full rounded-lg h-10"
                    onClick={props.handleSignIn} 
                >
                    Sign In
                </button>
                <BtnRegLog handleNext={props.handleNext} title={'Sign Up'} />
            </div>
            <div className="flex flex-col gap-2 max-w-[25.5rem] w-full">
                <button className="flex items-center justify-center gap-2.5 bg-white w-full rounded-lg h-10 text-black font-medium text-sm">
                    <img src={googleIcon} alt="" />
                    Continue with Google
                </button>
                <button className="flex items-center justify-center gap-2.5 bg-[#0A66C2] w-full rounded-lg h-10 font-bold text-sm">
                    <img src={LinkedInIcon} alt="" />
                    Login via Linkedin
                </button>
            </div>
        </div>
    );
};