import React, { useState } from 'react';
import { BackBtnRegLog } from '../BackBtnRegLog';
import { BtnRegLog } from '../BtnRegLog';
import { useNavigate } from 'react-router-dom';
import Destinations from './Destinations';

export const YourDestinations: React.FC = () => {
    const [selectedCount, setSelectedCount] = useState<number>(0); 
    const [hasStartedSelection, setHasStartedSelection] = useState<boolean>(false); 
    const navigate = useNavigate();

    const handleNext = () => {
        if (selectedCount >= 3) {
            navigate('/');
        }
    };

    const handleSelectionChange = (count: number) => {
        setSelectedCount(count);
        if (!hasStartedSelection && count > 0) {
            setHasStartedSelection(true); 
        }
    };

    return (
        <div className="formRegLog">
            <BackBtnRegLog
                title="Pick your destinations"
                p="Enter your age and gender. Click save when you're done."
            />
            <Destinations
                onSelectionChange={handleSelectionChange} 
            />
            {hasStartedSelection && selectedCount < 3 && (
                <p className="text-red-600 text-xs">
                    Выберите минимум 3 опции.
                </p>
            )}
            <BtnRegLog
                handleNext={handleNext}
                title="Continue"
                className={`bg-darkBlue transition duration-300 ${
                    selectedCount >= 3
                        ? 'hover:bg-hoverBlue'
                        : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={selectedCount < 3} 
            />
        </div>
    );
};
