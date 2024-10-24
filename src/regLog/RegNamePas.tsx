import { InputRegLog } from './InputRegLog';

import { BtnRegLog } from './BtnRegLog';
import { BackBtnRegLog } from './BackBtnRegLog';
import { NormalInputRegLog } from './NormalInputRegLog';

interface RegLogProps {
    handleNext: () => void;
    handleBack: () => void;
    handleSignIn: () => void;
}

export const RegNamePas: React.FC<RegLogProps> = (props) => {
    return (
        <div className="formRegLog p-[1.5rem]">
            <BackBtnRegLog
                handleBack={props.handleBack}
                title="Create your profile"
                p="Welcome to "
                span="duties"
                spanP=": Your Job Search Companion"
            />
            <div className="flex flex-col gap-4">
                <NormalInputRegLog
                    type="email"
                    placeholder="Email"
                    title="Email"
                />
                <InputRegLog/>
            </div>
            <div className="flex flex-col gap-2">
                <BtnRegLog
                    handleNext={props.handleNext}
                    title="Continue"
                    className="bg-[#00BCD4]"
                />
                <button
                    className="text-[#0097A7] h-10"
                    onClick={props.handleSignIn}
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default RegNamePas;
