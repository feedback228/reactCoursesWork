import React, { useState } from 'react';

interface DestinationsProps {
    onSelectionChange: (selectedCount: number) => void; 
}

const Destinations: React.FC<DestinationsProps> = ({ onSelectionChange }) => {
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

        const selectedCount = updatedCheckedState.filter((item) => item).length;
        onSelectionChange(selectedCount); 
    };

    return (
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
                                            ? 'bg-hoverBlue border-solid border-0.063rem border-hoverBlue text-white'
                                            : 'border-solid border-0.063rem border-gray text-white'
                                    }
                                    hover:bg-gray hover:text-white 
                                `}
                    >
                        {label}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Destinations;
