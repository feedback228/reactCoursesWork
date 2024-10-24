import React, { useState } from 'react';
import { BackBtnRegLog } from './BackBtnRegLog';
import { BtnRegLog } from './BtnRegLog';
import { useNavigate } from 'react-router-dom'; 

interface YourDestinationsProps {
    handleBack: () => void;
}

export const YourDestinations: React.FC<YourDestinationsProps> = (props) => {
    const options = [
        'Frontend Development',
        'Backend Development',
        'Mobile App Development',
        'Game Development',
        'Data Science/ML',
        'Cybersecurity',
        'UI/UX Design',
        'Quality Assurance (QA) / Testing',
        'Network Engineering',
        'Project Management',
        'Blockchain',
        'System Administrator',
        'Cloud Computing',
    ];

    const [checkedState, setCheckedState] = useState<boolean[]>(
        Array(options.length).fill(false)
    );

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedState = checkedState.map((item, i) =>
            i === index ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };

    const navigate = useNavigate(); 

    const handleNext = () => {
        navigate('/lol');
    };

    return (
        <div className="formRegLog">
            <BackBtnRegLog
                handleBack={props.handleBack}
                title="Pick your destinations"
                p="Enter your age and gender. Click save when you're done."
            />
            <div className="flex flex-wrap gap-2">
                {options.map((label, index: number) => (
                    <div className="form_wrap_btn" key={index}>
                        <input
                            id={`wrap${index + 1}`}
                            type="checkbox"
                            name="wrap"
                            value={label}
                            className="hidden"
                            checked={checkedState[index]}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <label
                            htmlFor={`wrap${index + 1}`}
                            className={`fake_check rounded-lg p-2 flex justify-center items-center transition duration-300 
                            ${
                                checkedState[index]
                                    ? 'bg-[#00BCD4] border-solid border-[0.063rem] border-[#00BCD4] text-white'
                                    : 'border-solid border-[0.063rem] border-[#717389] text-white'
                            }
                            hover:bg-[#717389] hover:text-white 
                        `}
                        >
                            {label}
                        </label>
                    </div>
                ))}
            </div>
            <BtnRegLog
                handleNext={handleNext} 
                title="Done"
                className="bg-[#008ea1] transition duration-300 hover:bg-[#00bcd4] "
            />
        </div>
    );
};
