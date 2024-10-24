import { BackBtnRegLog } from './BackBtnRegLog';
import { NormalInputRegLog } from './NormalInputRegLog';
import { BtnRegLog } from './BtnRegLog';

interface AgeAndGenderProps {
    handleNext: () => void;
    handleBack: () => void;
}

export const AgeAndGender: React.FC<AgeAndGenderProps> = (props) => {
    return (
        <div className="formRegLog">
            <BackBtnRegLog
                handleBack={props.handleBack}
                title="Enter your age and gender "
                p="Enter your age and gender. Click save when you're done."
            />
            <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between gap-6">
                    <NormalInputRegLog
                        type="number"
                        placeholder="1"
                        title="Day"
                        classNameForm="flex !items-start  flex-col max-w-[130px] gap-1.5"
                    />
                    <form className="flex flex-col w-full max-w-[130px] gap-5">
                        <p className="text-xs">Month</p>
                        <select className="bg-black text-white border-solid border-[0.063rem] border-[#717389] rounded-lg p-2 flex !items-start flex-col max-w-[130px] w-full gap-1.5 h-10">
                            <option value="" disabled selected hidden>
                                Jan
                            </option>
                            <option value="option1" className="bg-black">
                                Jan
                            </option>
                            <option value="option2" className="bg-black">
                                Feb
                            </option>
                            <option value="option3" className="bg-black">
                                Mar
                            </option>
                        </select>
                    </form>
                    <NormalInputRegLog
                        type="number"
                        placeholder="2000"
                        title="Year"
                        classNameForm="flex !items-start  flex-col max-w-[130px] gap-1.5"
                    />
                </div>
                <NormalInputRegLog
                    type=""
                    placeholder="Gender"
                    className="!max-w-[424px]"
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
