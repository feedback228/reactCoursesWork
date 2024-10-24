import { BackBtnRegLog } from './BackBtnRegLog';
import { BtnRegLog } from './BtnRegLog';
import { NormalInputRegLog } from './NormalInputRegLog';

interface NameSurnameProps {
    handleNext: () => void;
    handleBack: () => void;
}

export const NameSurname: React.FC<NameSurnameProps> = (props) => {
    return (
        <div className="formRegLog">
            <BackBtnRegLog
                handleBack={props.handleBack}
                title="Enter your name and go further"
                p="Enter your data or register by other means. Click save when you're done."
            />
            <div className="flex flex-col gap-4">
                <NormalInputRegLog
                    type="name"
                    placeholder="Name"
                    title="Name"
                />
                <NormalInputRegLog
                    type="Surname"
                    placeholder="Surname"
                    title="Surname"
                />
            </div>
            <BtnRegLog
                handleNext={props.handleNext}
                title="Continue"
                className="bg-[#008ea1] transition duration-300 hover:bg-[#00bcd4] "
            />
        </div>
    );
};
